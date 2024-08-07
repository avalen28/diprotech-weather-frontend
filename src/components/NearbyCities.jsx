import React, { useEffect, useState } from "react";

import { useWeather } from "../hooks/useWeather";

import "../styles/nearbycities.css"

const NearbyCities = () => {
  const { weather, handleWeatherService } = useWeather();
  const [nearbyCities, setNearbyCities] = useState(null);

  useEffect(() => {
    if (weather) {
      const { nearbyCities } = weather;
      setNearbyCities(nearbyCities);
    }
  }, [weather]);
  return (
    <div className="naerbycities-container">
      {nearbyCities &&
        nearbyCities.length &&
        nearbyCities.map((nearbyCity, i) => {
          const { location, id } = nearbyCity;
          return (
            <button onClick={()=> handleWeatherService(location.coordinates.reverse())} key={id} className="nearby-city-button">
              {nearbyCity.city}
            </button>
          );
        })}
    </div>
  );
};

export default NearbyCities;
