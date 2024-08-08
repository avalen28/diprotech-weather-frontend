import React from "react";
import { toCelsius, printWeatherIcon, formatDate } from "../utils/weatherData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/weatherCard.css";

/**
 * WeatherCard component displays the weather information for a specific day.
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.daylyInfo - The weather information for a specific day.
 * @param {number} props.daylyInfo.dt - The Unix timestamp for the specific day.
 * @param {Object} props.daylyInfo.weather - The weather details for the specific day.
 * @param {Object} props.daylyInfo.temp - The temperature details for the specific day.
 * @returns {JSX.Element} The rendered component.
 */
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
