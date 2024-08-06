import React, { useEffect, useState } from "react";
import { useWeather } from "../hooks/useWeather";
import { toCelsius, printWeatherIcon } from "../utils/weatherData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

const CurrentLocationWeather = () => {
  const { weather,handleWeatherService } = useWeather();
  const [currentCity, setCurrentCity] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    if (weather) {
      const { city, list } = weather.weatherData;
      setCurrentCity(city);
      setCurrentWeather(list[0]);
    }
  }, [weather]);

  return (
    <div>
      {(!currentCity || !currentWeather) && "loading"}

      {currentCity && currentWeather && (
        <div>
          <FontAwesomeIcon
            icon={faArrowsRotate}
            onClick={() =>
              handleWeatherService([currentCity.coord.lon, currentCity.coord.lat])
            }
          />{" "}
          <br />
          <FontAwesomeIcon
            icon={printWeatherIcon(currentWeather.weather[0].main)}
          />
          <h2>{currentCity.name}</h2>
          <div>
            <p>Temperatura: {toCelsius(currentWeather.temp.day)}°C</p>
            <p>
              Sensación térmica: {toCelsius(currentWeather.feels_like.day)}°C
            </p>
          </div>
          <div>
            <p>Temperatura máxima: {toCelsius(currentWeather.temp.max)}°C</p>
            <p>Temperatura mínima: {toCelsius(currentWeather.temp.min)}°C</p>
          </div>
          <p>Nubes: {currentWeather.clouds}%</p>
          <p>Humedad: {currentWeather.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default CurrentLocationWeather;
