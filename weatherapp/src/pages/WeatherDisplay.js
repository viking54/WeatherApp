import React from "react";
import "./WeatherDisplay.css";

const WeatherDisplay = ({ weather }) => {
  if (weather === "Clouds") {
    return (
      <>
        <div icon="cloudy">
          <span className="cloud"></span>
          <span className="cloud"></span>
        </div>
      </>
    );
  } else if (weather === "Clear") {
    return (
      <>
        <div icon="sunny">
          <span className="sun"> </span>
        </div>
      </>
    );
  } else if (weather === "Snow") {
    return (
      <>
        <div icon="snowy" data-label="Chilly">
          <span className="snowman"></span>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </>
    );
  } else if (weather === "Rain") {
    return (
      <>
        <div icon="stormy">
          <span className="cloud"></span>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </>
    );
  } else if (weather === "Haze") {
    return (
      <>
        <div icon="cloudy">
          <span className="cloud"></span>
          <span className="cloud"></span>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div icon="sunny">
          <span className="sun"> </span>
        </div>
      </>
    );
  }
};

export default WeatherDisplay;
