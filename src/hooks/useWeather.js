import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

/**
 * Custom hook to access the WeatherContext.
 * @function
 * @returns {Object} The value provided by WeatherContext.
 */
export const useWeather = () => useContext(WeatherContext)