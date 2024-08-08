import React, { useEffect, useState } from "react";

import { useWeather } from "../hooks/useWeather";

import "../styles/nearbycities.css"

/**
 * NearbyCities component displays a list of nearby cities with weather information.
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const NearbyCities = () => {
  const { weather, handleWeatherService } = useWeather();
  const [nearbyCities, setNearbyCities] = useState(null);

  /**
   * useEffect hook to update the nearby cities when weather data is available.
   */
  useEffect(() => {
    if (weather) {
      const { nearbyCities } = weather;
      setNearbyCities(nearbyCities);
    }
  }, [weather]);
  return (
    <div className="nearbycities-container">
      {nearbyCities &&
        nearbyCities.length &&
        nearbyCities.map((nearbyCity, i) => {
          const { location, id } = nearbyCity;
          return (
            <div
              onClick={() =>
                handleWeatherService(location.coordinates.reverse())
              }
              key={id}
              className="nearby-city-button"
            >
              {nearbyCity.city}
            </div>
          );
        })}
    </div>
  );
};

export default NearbyCities;
