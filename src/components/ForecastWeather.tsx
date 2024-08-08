import React, { useEffect, useState } from "react";
import { useWeather } from "../hooks/useWeather";
import WeatherCard from "./WeatherCard";
import "../styles/forecastWeather.css";
import { WeatherInfoShort } from "../interfaces";



/**
 * ForecastWeather component displays a weather forecast for the upcoming days.
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const ForecastWeather: React.FC = () => {
  const weather = useWeather()?.weather;
  const [currentWeather, setCurrentWeather] = useState<WeatherInfoShort[] | null>(null);

  /**
   * useEffect hook to update the weather forecast when weather data is available.
   */
  useEffect(() => {
    if (weather) {
      const { list } = weather.weatherData;

      setCurrentWeather(list.slice(1, 6));
    }
  }, [weather]);

  return (
    <div className="forecast-container">
      {currentWeather &&
        currentWeather.length > 0 &&
        currentWeather.map((daylyInfo, i) => {
          return (
            <div key={i} className="weatherCard-container">
              <WeatherCard daylyInfo={daylyInfo} />
            </div>
          );
        })}
    </div>
  );
};

export default ForecastWeather;
