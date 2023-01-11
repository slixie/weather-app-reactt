import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function hadleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      feels_like: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      temp_max: response.data.main.temp_max,
      temp_min: response.data.main.temp_min,
    });
  }

  function search() {
    const apiKey = "fc5e25b8c524cb4b4ebd4ca86a442c09";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(hadleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="page">
          <div className="col-12">
            <div className="heading-item">
              <FormattedDate date={weatherData.date} />
            </div>
          </div>
          <form className="typeCity" onSubmit={handleSubmit}>
            <input
              className="search-text"
              type="text"
              placeholder="Enter your city"
              autoComplete="off"
              onChange={handleCityChange}
            />
            <button className="search-btn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button className="current">
              <i className="fa-solid fa-location-dot"></i>
            </button>
          </form>
          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinaes={weatherData.coordinates} />

          <p className="credit">
            <a
              href="https://github.com/slixie/weather-app-reactt"
              className="open-source-code"
              target="_blank"
              rel="noreferrer"
            >
              Coded
            </a>{" "}
            by Mariia Sytnyk
          </p>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
