import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  let weatherData = {
    city: "Kyiv",
    date: "Friday 07:47",
    temperature: 8,
    description: "Few Clouds",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 69,
    wind: 2,
  };

  return (
    <div className="Weather">
      <div className="page">
        <div className="col-12">
          <p className="heading-item">{weatherData.date}</p>
        </div>
        <form className="typeCity">
          <input
            className="search-text"
            type="text"
            placeholder="Enter your city"
            autoComplete="off"
          />
          <button className="search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button className="current">
            <i className="fa-solid fa-location-dot"></i>
          </button>
        </form>

        <div className="row heading">
          <div className="col-6 city-name">
            <i className="fa-solid fa-location-dot icon_current_location"></i>
            <p className="cityName">{weatherData.city}</p>
          </div>
        </div>
        <div className="col-12">
          <p className="currentWeather">Current weather</p>{" "}
        </div>
        <div className="row mainPage">
          <div className="col-6 center">
            <img
              src={weatherData.imgUrl}
              alt="icon"
              className="main_icon"
              width="85px"
            />
            <p className="city-temperature">{weatherData.temperature}</p>
            <span className="units">
              <a href="/" className="celsius-link">
                °C
              </a>{" "}
              |
              <a href="/" className="fahrenheit-link">
                °F
              </a>
            </span>
          </div>
          <div className="col-6 weather_description center">
            <h4>
              <span>{weatherData.description}</span>
            </h4>
            <h5>Feels like: 7 °C</h5>
          </div>

          <div className="col-3 statistics">
            <div className="statistic"> WIND </div>
            {weatherData.wind} km/h
          </div>
          <div className="col-3 statistics">
            <div className="statistic"> HUMIDITY </div>
            {weatherData.humidity} %
          </div>
          <div className="col-3 statistics">
            <div className="statistic"> TEMP MAX </div>
            15 °C
          </div>
          <div className="col-3 statistics">
            <div className="statistic"> TEMP MIN </div>2 °C
          </div>
        </div>

        <div className="col-12">
          <p className="forecast">Weather forecast</p>
        </div>

        <div className="weather_forecast" id="weather_forecast">
          {" "}
          <div className="row forecastDays">
            <div className="col-2 days">
              Mon <br />
              <i className="fa-solid fa-sun forecastIcon"></i>
              <br /> 20°/24°
            </div>
            <div className="col-2 days">
              Tue <br />
              <i className="fa-solid fa-sun forecastIcon"></i>
              <br /> 19°/22°
            </div>
            <div className="col-2 days">
              Wed <br />
              <i className="fa-solid fa-cloud forecastIcon"></i>
              <br /> 17°/20°
            </div>
            <div className="col-2 days">
              Thu <br />
              <i className="fa-solid fa-cloud-bolt forecastIcon"></i>
              <br /> 15°/17°
            </div>
            <div className="col-2 days">
              Fri <br />
              <i className="fa-solid fa-bolt-lightning forecastIcon"></i>
              <br /> 17°/20°
            </div>
            <div className="col-2 days">
              Sat <br />
              <i className="fa-solid fa-cloud forecastIcon"></i>
              <br /> 17°/20°
            </div>
          </div>
        </div>

        <p className="credit">
          <a
            href="https://github.com/slixie/weather-app-reactt"
            className="open-source-code"
            target="_blank"
            rel="noreferrer"
          >
            Coded
          </a>{" "}
          by Mariia Sytnykkk
        </p>
      </div>
    </div>
  );
}
