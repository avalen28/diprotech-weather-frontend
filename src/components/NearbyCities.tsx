import React, { useEffect, useState } from "react";
import { useWeather } from "../hooks/useWeather";
import "../styles/nearbycities.css";
import { NearbyCity } from "../interfaces";



/**
 * NearbyCities component displays a list of nearby cities with weather information.
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const NearbyCities: React.FC = () => {
  const { weather, handleWeatherService } = useWeather()!;
  const [nearbyCities, setNearbyCities] = useState<NearbyCity[] | null>(null);

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
        nearbyCities.length > 0 &&
        nearbyCities.map((nearbyCity) => {
          const { location, id } = nearbyCity;
          return (
            <div
              onClick={() =>
                handleWeatherService(location.coordinates.reverse() as [number, number])
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
