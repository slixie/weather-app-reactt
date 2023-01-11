import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row heading">
        <div className="city-name">
          <i className="fa-solid fa-location-dot icon_current_location"></i>
          <p className="cityName">{props.data.city}</p>
        </div>
      </div>
      <p className="titles d-none d-md-block">Current weather</p>{" "}
      <div className="row mainPage">
        <div className="col-12 col-md-6 pt-3 pt-md-0 center">
          <WeatherIcon code={props.data.icon} />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-12 col-md-6 pb-2 pb-md-0 weather_description center">
          <h4>
            <span>{props.data.description}</span>
          </h4>
          <h5>Feels like: {Math.round(props.data.feels_like)} °C</h5>
        </div>

        <div className="col-6 col-md-3 statistics">
          <div className="statistic"> WIND </div>
          {Math.round(props.data.wind)} km/h
        </div>
        <div className="col-6 col-md-3 statistics">
          <div className="statistic"> HUMIDITY </div>
          {props.data.humidity} %
        </div>
        <div className="col-6 col-md-3 statistics">
          <div className="statistic"> TEMP MAX </div>
          {Math.round(props.data.temp_max)} °C
        </div>
        <div className="col-6 col-md-3 statistics">
          <div className="statistic"> TEMP MIN </div>
          {Math.round(props.data.temp_min)} °C
        </div>
      </div>
    </div>
  );
}
