import React from 'react';
import CurrentLocationWeather from '../components/CurrentLocationWeather';
import ForecastWeather from '../components/ForecastWeather';
import NearbyCities from "../components/NearbyCities";

const MainPage = () => {
    return (
      <div>
        <CurrentLocationWeather />
        <ForecastWeather />
        <NearbyCities />
      </div>
    );
};

export default MainPage;