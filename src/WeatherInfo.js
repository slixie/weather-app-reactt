import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row heading">
        <div className="col-6 city-name">
          <i className="fa-solid fa-location-dot icon_current_location"></i>
          <p className="cityName">{props.data.city}</p>
        </div>
      </div>
      <div className="col-12">
        <p className="currentWeather">Current weather</p>{" "}
      </div>
      <div className="row mainPage">
        <div className="col-6 center">
          <WeatherIcon code={props.data.icon} />
          <p className="city-temperature">
            {Math.round(props.data.temperature)}
          </p>
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
            <span>{props.data.description}</span>
          </h4>
          <h5>Feels like: {Math.round(props.data.feels_like)} °C</h5>
        </div>

        <div className="col-3 statistics">
          <div className="statistic"> WIND </div>
          {Math.round(props.data.wind)} km/h
        </div>
        <div className="col-3 statistics">
          <div className="statistic"> HUMIDITY </div>
          {props.data.humidity} %
        </div>
        <div className="col-3 statistics">
          <div className="statistic"> TEMP MAX </div>
          {Math.round(props.data.temp_max)} °C
        </div>
        <div className="col-3 statistics">
          <div className="statistic"> TEMP MIN </div>
          {Math.round(props.data.temp_min)} °C
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
  );
}
