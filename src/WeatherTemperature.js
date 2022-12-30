import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahreheit(event) {
    event.preventDefault();
    setUnit("fahreheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <p className="city-temperature">{Math.round(props.celsius)}</p>
        <span className="units">
          <span className="celsius-link active">°C</span> |
          <a href="/" className="fahrenheit-link" onClick={convertToFahreheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <p className="city-temperature">{Math.round(fahrenheit())}</p>
        <span className="units">
          <a href="/" className="celsius-link" onClick={convertToCelsius}>
            °C
          </a>{" "}
          |
          <span href="/" className="fahrenheit-link active">
            °F
          </span>
        </span>
      </span>
    );
  }
}
