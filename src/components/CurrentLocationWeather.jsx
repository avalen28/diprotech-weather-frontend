import React from 'react';
import  {useWeather}  from '../hooks/useWeather';

const CurrentLocationWeather = () => {
    const { weather } = useWeather()
    return (
        <div>
            hello current location
        </div>
    );
};

export default CurrentLocationWeather;