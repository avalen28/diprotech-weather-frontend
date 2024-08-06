import React from 'react';
import CurrentLocationWeather from '../components/CurrentLocationWeather';
import ForecastWeather from '../components/ForecastWeather';

const MainPage = () => {
    return (
        <div>
            <CurrentLocationWeather />
            <ForecastWeather/>
        </div>
    );
};

export default MainPage;