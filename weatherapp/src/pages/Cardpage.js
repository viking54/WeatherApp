import React from "react";
import air from "../images/air.png";
import sun from "../images/sun.png";

import moon from "../images/moon.png";
import thermo from "../images/thermometer.png";
import humidity from "../images/humidity.png";
import cloudy from "../images/cloudy.png";
import wind from "../images/win.png";

import imageClear from "../images/s4.png";
import imageSunny from "../images/s3.png";
import imageRain from "../images/r2.png";
import eye from "../images/eye.png";
import "./Cardpage.css";

const Cardpage3 = ({ forecastt }) => {
  function getImage(check) {
    if (check === "Clouds") {
      return imageClear;
    } else if (check === "Clear") {
      return imageSunny;
    } else if (check === "Sunny") {
      return imageSunny;
    } else if (check === "Rain") {
      return imageRain;
    } else {
      return imageClear;
    }
  }

  function formattdate(ndate) {
    const date = new Date(ndate);
    const options = { day: "numeric", month: "long" };
    const formattedDate = date.toLocaleDateString(undefined, options);
    return formattedDate;
  }
  return (
    <>
      <div className="newair3" style={{ width: "11.80vw" }}>
        <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>
          {forecastt.list[9].main.temp}
        </h3>
        <img
          src={getImage(forecastt.list[9].weather[0].main)}
          style={{ height: "3.7vh", width: "2.77vw", margin: "0.347vw" }}
          alt="loading"
        />
        <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>
          {formattdate(forecastt.list[9].dt_txt)}
        </h3>
      </div>
      <div className="newair3" style={{ width: "11.80vw" }}>
        <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>
          {forecastt.list[17].main.temp}
        </h3>
        <img
          src={getImage(forecastt.list[17].weather[0].main)}
          style={{ height: "3.7vh", width: "2.77vw", margin: "0.347vw" }}
          alt="loading"
        />
        <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>
          {formattdate(forecastt.list[17].dt_txt)}
        </h3>
      </div>

      <div className="newair3" style={{ width: "11.80vw" }}>
        <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>
          {forecastt.list[25].main.temp}
        </h3>
        <img
          src={getImage(forecastt.list[25].weather[0].main)}
          style={{ height: "3.7vh", width: "2.77vw", margin: "0.347vw" }}
          alt="loading"
        />
        <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>
          {formattdate(forecastt.list[25].dt_txt)}
        </h3>
      </div>
      <div className="newair3" style={{ width: "11.80vw" }}>
        <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>
          {forecastt.list[33].main.temp}
        </h3>
        <img
          src={getImage(forecastt.list[33].weather[0].main)}
          style={{ height: "3.7vh", width: "2.77vw", margin: "0.347vw" }}
          alt="loading"
        />
        <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>
          {formattdate(forecastt.list[33].dt_txt)}
        </h3>
      </div>

      <div className="newair3" style={{ width: "11.80vw" }}>
        <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>
          {forecastt.list[37].main.temp}
        </h3>
        <img
          src={getImage(forecastt.list[37].weather[0].main)}
          style={{ height: "3.7vh", width: "2.77vw", margin: "0.347vw" }}
          alt="loading"
        />
        <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>
          {formattdate(forecastt.list[37].dt_txt)}
        </h3>
      </div>
    </>
  );
};

const Cardpage2 = ({ forecast }) => {
  function getImage(check) {
    if (check === "Clouds") {
      return imageClear;
    } else if (check === "Clear") {
      return imageSunny;
    } else if (check === "Sunny") {
      return imageSunny;
    } else if (check === "Rain") {
      return imageRain;
    } else {
      return imageClear;
    }
  }

  return (
    <>
      <div className="upper2">
        <div className="timeslab">
          <div className="newair2" style={{ width: "11.80vw" }}>
            <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>9 AM</h3>
            <img
              src={getImage(forecast.list[0].weather[0].main)}
              style={{
                height: "3.9vh",
                width: "2.43vw",
                border: "2px",
                marginRight: "0.48vw",
                marginLeft: "0.48vw",
                borderRadius: "12px",
              }}
              alt="loading"
            />
            <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>
              {forecast.list[0].main.temp}
            </h3>
          </div>
          <div className="newair2" style={{ width: "11.80vw" }}>
            <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>12 AM</h3>
            <img
              src={getImage(forecast.list[1].weather[0].main)}
              style={{
                height: "3.9vh",
                width: "2.43vw",
                border: "2px",
                marginRight: "0.48vw",
                marginLeft: "0.48vw",
                borderRadius: "12px",
              }}
              alt="loading"
            />
            <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>
              {forecast.list[1].main.temp}
            </h3>
          </div>
          <div className="newair2" style={{ width: "11.80vw" }}>
            <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>3 PM</h3>
            <img
              src={getImage(forecast.list[2].weather[0].main)}
              style={{
                height: "3.9vh",
                width: "2.43vw",
                border: "2px",
                marginRight: "0.48vw",
                marginLeft: "0.48vw",
                borderRadius: "12px",
              }}
              alt="loading"
            />
            <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>
              {forecast.list[2].main.temp}
            </h3>
          </div>
          <div className="newair2" style={{ width: "11.80vw" }}>
            <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>6 PM</h3>
            <img
              src={getImage(forecast.list[3].weather[0].main)}
              style={{
                height: "3.9vh",
                width: "2.43vw",
                border: "2px",
                marginRight: "0.48vw",
                marginLeft: "0.48vw",
                borderRadius: "12px",
              }}
              alt="loading"
            />
            <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>
              {forecast.list[3].main.temp}
            </h3>
          </div>
          <div className="newair2" style={{ width: "11.80vw" }}>
            <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>9 PM</h3>
            <img
              src={getImage(forecast.list[4].weather[0].main)}
              style={{
                height: "3.9vh",
                width: "2.43vw",
                border: "2px",
                marginRight: "0.48vw",
                marginLeft: "0.48vw",
                borderRadius: "12px",
              }}
              alt="loading"
            />
            <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>
              {forecast.list[4].main.temp}
            </h3>
          </div>
        </div>
      </div>

      <div className="lower2">
        <div className="timeslab">
          <div className="newair2" style={{ width: "11.80vw" }}>
            <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>9 AM</h3>
            <img
              src={wind}
              style={{ height: "3.9vh", width: "3vw" }}
              alt="loading"
            />
            <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>
              {forecast.list[0].wind.speed}
            </h3>
          </div>
          <div className="newair2" style={{ width: "11.80vw" }}>
            <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>12 AM</h3>
            <img
              src={wind}
              style={{ height: "3.9vh", width: "3vw" }}
              alt="loading"
            />
            <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>
              {forecast.list[1].wind.speed}
            </h3>
          </div>
          <div className="newair2" style={{ width: "11.80vw" }}>
            <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>3 PM</h3>
            <img
              src={wind}
              style={{ height: "3.9vh", width: "3vw" }}
              alt="loading"
            />
            <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>
              {forecast.list[2].wind.speed}
            </h3>
          </div>
          <div className="newair2" style={{ width: "11.80vw" }}>
            <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>6 PM</h3>
            <img
              src={wind}
              style={{ height: "3.9vh", width: "3vw" }}
              alt="loading"
            />
            <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>
              {forecast.list[3].wind.speed}
            </h3>
          </div>
          <div className="newair2" style={{ width: "11.80vw" }}>
            <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>9 PM</h3>
            <img
              src={wind}
              style={{ height: "3.9vh", width: "3vw" }}
              alt="loading"
            />
            <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>
              {forecast.list[4].wind.speed}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
const Cardpage = ({ weather1data, poll }) => {
  const getAirQualityStatus = (aqi) => {
    console.log(aqi);
    if (aqi <= 50) {
      return { label: "Good", backgroundColor: "green" };
    } else if (aqi <= 100) {
      return { label: "Moderate", backgroundColor: "lightseagreen" };
    } else if (aqi <= 300) {
      return { label: "Unhealthy", backgroundColor: "brown" };
    } else {
      return { label: "Hazardous", backgroundColor: "red" };
    }
  };
  const aqi = poll.list[0].components.pm2_5;
  const airQualityStatus = getAirQualityStatus(aqi);

  const sunriseTimestamp = weather1data.sys.sunrise;
  const sunsetTimestamp = weather1data.sys.sunset;

  const convertTo12HourFormat = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const amPm = hours >= 12 ? "PM" : "AM";
    const twelveHourFormat = `${hours % 12 || 12}:${
      minutes < 10 ? "0" : ""
    }${minutes} ${amPm}`;
    return twelveHourFormat;
  };

  const sunriseTime = convertTo12HourFormat(sunriseTimestamp);
  const sunsetTime = convertTo12HourFormat(sunsetTimestamp);
  return (
    <>
      <div className="upper">
        <div className="air">
          <div style={{ display: "flex" }}>
            <h3 style={{ fontSize: "1.1vw", color: "antiquewhite" }}>
              Air Quality Index
            </h3>

            <h4
              className="airper"
              style={{ backgroundColor: airQualityStatus.backgroundColor }}
            >
              {airQualityStatus.label}
            </h4>
          </div>

          <div className="con">
            <img src={air} alt="loading" className="imgg" />
            <div className="grid-container">
              <div className="cell labels">PM 2.5</div>
              <div className="cell labels">SO2</div>
              <div className="cell labels">NO2</div>
              <div className="cell labels">O3</div>

              <div className="cell vale">{poll.list[0].components.pm2_5}</div>
              <div className="cell vale">{poll.list[0].components.so2}</div>
              <div className="cell vale">{poll.list[0].components.no2}</div>
              <div className="cell vale">{poll.list[0].components.o3}</div>
            </div>
          </div>
        </div>
        <div className="air">
          <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>
            Sunrise & Sunset
          </h3>
          <div className="con">
            <img src={sun} alt="loading" className="sunimg" />
            <div className="grid-container2">
              <div className="cell labels">Sunrise</div>

              <div className="cell vale">{sunriseTime}</div>
            </div>
            <img
              src={moon}
              alt="loading"
              style={{ marginLeft: "0.9vw", height: "4.8vh", width: "2.7vw" }}
            />
            <div className="grid-container2">
              <div className="cell labels">Sunset</div>

              <div className="cell vale">{sunsetTime}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="lower">
        <div className="newair">
          <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>Humidity</h3>
          <div className="newcon">
            <img
              src={humidity}
              style={{ marginLeft: "0", height: "3.7vh", width: "2.08vw" }}
              alt="loading"
            />
            <h3 style={{ fontSize: "1.59vw", color: "antiquewhite" }}>
              {weather1data.main.humidity}%
            </h3>
          </div>
        </div>
        <div className="newair" style={{ width: "11.80vw" }}>
          <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>Pressure</h3>
          <div className="newcon">
            <img
              src={cloudy}
              style={{ marginLeft: "0", height: "3.7vh", width: "2.08vw" }}
              alt="loading"
            />
            <h3 style={{ fontSize: "1.59vw", color: "antiquewhite" }}>
              {weather1data.main.pressure}hPa
            </h3>
          </div>
        </div>
        <div className="newair">
          <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>Visibility</h3>
          <div className="newcon">
            <img
              src={eye}
              style={{ marginLeft: "0", height: "3.8vh", width: "2.43vw" }}
              alt="loading"
            />
            <h3 style={{ fontSize: "1.59vw", color: "antiquewhite" }}>
              {weather1data.visibility / 1000}km
            </h3>
          </div>
        </div>
        <div className="newair" style={{ width: "11.80vw" }}>
          <h3 style={{ fontSize: "1vw", color: "antiquewhite" }}>Feels Like</h3>
          <div className="newcon">
            <img
              src={thermo}
              style={{ marginLeft: "0", height: "3.9vh", width: "2.43vw" }}
              alt="loading"
            />
            <h3 style={{ fontSize: "1.59vw", color: "antiquewhite" }}>
              {weather1data.main.feels_like}°C
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export { Cardpage, Cardpage2, Cardpage3 };
