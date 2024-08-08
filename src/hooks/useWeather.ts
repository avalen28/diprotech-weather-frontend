import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { WeatherContextType } from "../interfaces";

/**
 * Custom hook to access the WeatherContext.
 * @function
 * @returns {WeatherContextType | undefined} The value provided by WeatherContext.
 */
export const useWeather = (): WeatherContextType | undefined =>
  useContext<WeatherContextType | undefined>(WeatherContext);
