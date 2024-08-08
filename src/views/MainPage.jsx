import React, { useEffect, useState } from "react";
import CurrentLocationWeather from "../components/CurrentLocationWeather";
import ForecastWeather from "../components/ForecastWeather";
import NearbyCities from "../components/NearbyCities";
import Map from "../components/Map";
import { useWeather } from "../hooks/useWeather";
import loadingGif from "../miscel/loading.gif";

/**
 * MainPage component displays the main weather information including current location weather,
 * forecast, nearby cities, and a map.
 * @component
 */
const MainPage = () => {
  const { weather } = useWeather();
  const [loading, setLoading] = useState(true);

  /**
   * useEffect hook to update loading state when weather data is available.
   */
  useEffect(() => {
    if (weather) setLoading(false);
  }, [weather]);

  return (
    <div className="App">
      {loading && (
        <div className="loading-container">
          <img src={loadingGif} className="loading-gif" alt="Loading..." />
        </div>
      )}
      {!loading && (
        <>
          <div className="upper-block">
            <CurrentLocationWeather />
            <ForecastWeather />
          </div>
          <NearbyCities />
          <Map />
        </>
      )}
    </div>
  );
};

export default MainPage;
