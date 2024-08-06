import React, { useEffect, useState } from "react";
import { useWeather } from "../hooks/useWeather";
import WeatherCard from "./WeatherCard";

const ForecastWeather = () => {
  const { weather } = useWeather();
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    if (weather) {
      const { list } = weather.weatherData;

      setCurrentWeather(list.slice(1, 6));
    }
  }, [weather]);
    return <div>
        {currentWeather && currentWeather.length && currentWeather.map((daylyInfo,i) => {
            return (
              <div key={i}>
                <WeatherCard daylyInfo={daylyInfo} />
              </div>
            );
})}
  </div>;
};

export default ForecastWeather;
