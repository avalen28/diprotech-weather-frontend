import React from "react";
import { toCelsius, printWeatherIcon, formatDate } from "../utils/weatherData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WeatherCard = ({ daylyInfo }) => {
  return (
    <div>
      <div>
        <p>{toCelsius(daylyInfo.temp.max)}°C</p>
        <p>{toCelsius(daylyInfo.temp.min)}°C</p>
      </div>
      <FontAwesomeIcon icon={printWeatherIcon(daylyInfo.weather[0].main)} />
      <p>{formatDate(daylyInfo.dt)}</p>
    </div>
  );
};

export default WeatherCard;
