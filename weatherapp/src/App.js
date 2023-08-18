import React, { useEffect, useState } from "react";

import axios from "axios";

import WeatherDisplay from "./pages/WeatherDisplay";

import wed from "./images/weather.png";

import "./App.css";
import LoadingPage from "./pages/LodingPage";

import { Cardpage, Cardpage2, Cardpage3 } from "./pages/Cardpage";

function App() {
  const [pollution, setPollution] = useState({});
  const [area, setArea] = useState({});
  const [weatherData, setWeatherData] = useState({});
  const [weatherForcastData, setWeatherForcastData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  const [coords, setCoords] = useState("");
  const apiKey = "9e43423fb99be44142f70f0fd71b8f11";
  const apiUrl = `https://api.openweathermap.org/data/2.5/`;

  const searchWeather = (e) => {
    e.preventDefault();

    axios
      .get(`${apiUrl}weather?q=${search}&units=metric&APPID=${apiKey}`)
      .then((response) => {
        setCoords(response.data.coord);
        if (response.data.coord) {
          getevery(response.data.coord); // Pass the coords to getevery directly
        }
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        window.alert("Location not found");
      });
  };

  const getevery = async (coords) => {
    try {
      if (!coords) return;

      const { lat, lon } = coords;

      const [
        responseWeather,
        responseForecast,
        responsePollution,
        responseArea,
      ] = await Promise.all([
        axios.get(
          `${apiUrl}weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
        ),
        axios.get(
          `${apiUrl}forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
        ),
        axios.get(
          `${apiUrl}air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        ),
        axios.get(
          `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        ),
      ]);

      setWeatherData(responseWeather.data);
      setWeatherForcastData(responseForecast.data);
      setPollution(responsePollution.data);
      setArea(responseArea.data[0]);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      window.alert("Error fetching weather data. Please try again.");
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoords({ lat: latitude, lon: longitude });
        },
        (error) => {
          console.error("Error getting current location:", error);
          window.alert("Error getting current location. Please try again.");
        }
      );
    }
  }, []);

  useEffect(() => {
    getevery(coords); // Call getevery directly with coords
  }, [coords]);

  useEffect(() => {
    const date = new Date();
    const options = { weekday: "long", day: "numeric", month: "long" };
    const formattedDate = date.toLocaleDateString(undefined, options);
    setCurrentDate(formattedDate);
  }, []);
  return (
    <div className="main">
      <div className="header">
        <div className="logo">
          <img src={wed} alt="logo" />
          <h1>Weather.Io</h1>
        </div>
        <div className="searchBox">
          <input
            className="searchInput"
            type="text"
            name="location"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
          />
          <button className="searchButton" onClick={searchWeather}>
            <i className="material-icons">search</i>
          </button>
        </div>
        <button
          className="locationbutton"
          onClick={() => window.location.reload()}
        >
          <span className="material-symbols-outlined">my_location</span>{" "}
          <h3 className="button-content">Current Location</h3>
        </button>
      </div>

      {weatherData.main &&
      area.name &&
      pollution.list[0].main.aqi &&
      weatherForcastData.cod &&
      coords ? (
        <div className="card-container">
          <div className="left-column">
            <div className="card-content">
              <div className="icon">
                <WeatherDisplay weather={weatherData.weather[0].main} />
              </div>
            </div>

            <div className="card2-content">
              <h1 style={{ textAlign: "center" }}>Now , {area.name} </h1>
              <h2 style={{ textAlign: "center", color: "whitesmoke" }}>
                {weatherData.main.temp}°C
              </h2>

              <h1
                style={{
                  textAlign: "center",
                  fontSize: "40px",
                }}
              >
                {weatherData.weather[0].main}
              </h1>

              <div className="description">
                <p className="info">
                  {currentDate} {area.name} , {area.state}
                  {", "}
                  {area.country}
                </p>
              </div>
            </div>
          </div>
          <div className="manga">
            <div className="newmanga">
              <div className="right-card">
                <h2 style={{ fontSize: "1.1vw", color: "antiquewhite" }}>
                  Today Highlightss
                </h2>
                <Cardpage weather1data={weatherData} poll={pollution} />
              </div>
              <div className="rightcor-card">
                <h2
                  style={{
                    fontSize: "1.1vw",
                    color: "antiquewhite",
                    marginBottom: "17px",
                  }}
                >
                  This Week Forecast
                </h2>
                <Cardpage3 forecastt={weatherForcastData} />
              </div>
            </div>
            <div className="right-card2">
              <h2 style={{ fontSize: "1.1vw", color: "antiquewhite" }}>
                Today At
              </h2>
              <Cardpage2 forecast={weatherForcastData} />
            </div>
          </div>
        </div>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
}

export default App;
