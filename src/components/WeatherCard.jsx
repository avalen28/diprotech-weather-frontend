import React from "react";
import { toCelsius, printWeatherIcon, formatDate } from "../utils/weatherData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/weatherCard.css";

const WeatherCard = ({ daylyInfo }) => {
  return (
    <>
      <h2 className="forecast-day title">{formatDate(daylyInfo.dt)}</h2>
      <div className="forecast-block-info-1">
        <FontAwesomeIcon icon={printWeatherIcon(daylyInfo.weather[0].main)} />
        <div>
          <p>{toCelsius(daylyInfo.temp.max)}°C</p>
          <p className="min">{toCelsius(daylyInfo.temp.min)}°C</p>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
