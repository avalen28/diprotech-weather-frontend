import React, { useEffect, useState } from "react";
import { useWeather } from "../hooks/useWeather";
import { toCelsius } from "../utils/weatherData";

const CurrentLocationWeather = () => {
  const { weather } = useWeather();
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
          <h2>
            {currentCity.name}, {currentCity.country}
          </h2>
          <p>{toCelsius(currentWeather.temp.day)}°C</p>
        </div>
      )}
    </div>
  );
};

export default CurrentLocationWeather;
