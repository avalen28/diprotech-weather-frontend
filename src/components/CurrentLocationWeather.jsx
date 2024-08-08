import React, { useEffect, useState } from "react";
import { useWeather } from "../hooks/useWeather";
import { toCelsius, printWeatherIcon } from "../utils/weatherData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import "../styles/currentLocationWeather.css"

/**
 * CurrentLocationWeather component displays the current weather information for the user's location.
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const CurrentLocationWeather = () => {
  const { weather, handleWeatherService } = useWeather();
  const [currentCity, setCurrentCity] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  /**
   * useEffect hook to update the current city and weather when weather data is available.
   */
  useEffect(() => {
    if (weather) {
      const { city, list } = weather.weatherData;
      setCurrentCity(city);
      setCurrentWeather(list[0]);
    }
  }, [weather]);

  return (
    <div className="currentLocation-container">
      {currentCity && currentWeather && (
        <div className="currentLocation-info">
          <div className="refresh-button">
            <FontAwesomeIcon
              icon={faArrowsRotate}
              onClick={() =>
                handleWeatherService([
                  currentCity.coord.lon,
                  currentCity.coord.lat,
                ])
              }
            />
          </div>

          <h2 className="city-name title">{currentCity.name}</h2>
          <div className="block-info-1">
            <div className="weather-logo">
              <FontAwesomeIcon
                icon={printWeatherIcon(currentWeather.weather[0].main)}
              />
            </div>

            <div className="main-temperatures">
              <p>Temperatura {toCelsius(currentWeather.temp.day)}°C</p>
              <p>
                Sensación térmica {toCelsius(currentWeather.feels_like.day)}°C
              </p>
              <p>Máx {toCelsius(currentWeather.temp.max)}°C</p>
              <p>Mín {toCelsius(currentWeather.temp.min)}°C</p>
            </div>
          </div>
          <div className="block-info-2">
            <p>Nubes: {currentWeather.clouds}%</p>
            <p>Humedad: {currentWeather.humidity}%</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentLocationWeather;
