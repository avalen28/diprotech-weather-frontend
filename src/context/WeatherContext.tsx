import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import weatherService from "../services/weatherService";
import { WeatherContextProps, WeatherContextType, WeatherData } from "../interfaces";



/**
 * Context for weather data.
 * @constant
 * @type {React.Context<WeatherContextType | undefined>}
 */
const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

/**
 * WeatherProviderWrapper component provides weather data to its children.
 * @component
 * @param {WeatherContextProps} props - The properties passed to the component.
 * @returns {JSX.Element} The provider component that wraps its children.
 */
const WeatherProviderWrapper: React.FC<WeatherContextProps> = (props) => {
  const navigate = useNavigate();
  const [weather, setWeather] = useState<WeatherData | null>(null);

  /**
   * Fetches weather data from the weather service.
   * @async
   * @function
   * @param {Array<number>} [coordinates] - The coordinates for fetching weather data.
   * @returns {Promise<void>}
   */
  const handleWeatherService = async (coordinates?: [number, number]) => {
    const weatherDataFromAPI = await weatherService.getWeatherDataByLongLat(coordinates);
    if (typeof weatherDataFromAPI === "string") {
      navigate("/error");
      return;
    }
    setWeather(weatherDataFromAPI);
  };

  /**
   * useEffect hook to fetch weather data on component mount.
   */
  useEffect(() => {
    handleWeatherService();
    // eslint-disable-next-line
  }, []);

  return (
    <WeatherContext.Provider value={{ weather, handleWeatherService }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export { WeatherProviderWrapper, WeatherContext };
