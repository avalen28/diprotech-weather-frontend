import { React, createContext } from 'react';

const WeatherContext = createContext()

function WeatherProviderWrapper(props) {
    
    return (
        <WeatherContext.Provider >
            {props.children}
        </WeatherContext.Provider>
    )
}

export {WeatherProviderWrapper, WeatherContext}