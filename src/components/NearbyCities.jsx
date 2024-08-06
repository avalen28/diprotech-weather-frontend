import React, { useEffect, useState } from "react";

import { useWeather } from "../hooks/useWeather";

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
    <div>
      {nearbyCities &&
        nearbyCities.length &&
        nearbyCities.map((nearbyCity, i) => {
          const { location, id } = nearbyCity;
          return (
            <button onClick={()=> handleWeatherService(location.coordinates)} key={id}>
              {nearbyCity.city}
            </button>
          );
        })}
    </div>
  );
};

export default NearbyCities;
