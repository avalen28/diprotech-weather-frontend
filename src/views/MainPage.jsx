import React from 'react';
import CurrentLocationWeather from '../components/CurrentLocationWeather';
import ForecastWeather from '../components/ForecastWeather';
import NearbyCities from "../components/NearbyCities";
import Map from '../components/Map';

const MainPage = () => {
    return (
      <div className='App'>
        <CurrentLocationWeather />
        <ForecastWeather />
        <NearbyCities />
        <Map />
      </div>
    );
};

export default MainPage;