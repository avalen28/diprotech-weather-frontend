import { ReactNode } from "react";

/**
 * Interface for the city's coordinates.
 */
interface Coord {
  lon: number;
  lat: number;
}

/**
 * Interface for the current city's weather data.
 */
export interface City {
  name: string;
  coord: Coord;
}

/**
 * Interface for the temperature details.
 */
interface Temp {
  day: number;
  min: number;
  max: number;
}

/**
 * Interface for the feels like temperature details.
 */
interface FeelsLike {
  day: number;
}

/**
 * Interface for the weather details.
 */
interface WeatherDetails {
  main: string;
}

/**
 * Interface for the weather information of a specific day.
 */
export interface WeatherInfo {
  dt: number;
  temp: Temp;
  feels_like: FeelsLike;
  weather: WeatherDetails[];
  clouds: number;
  humidity: number;
}

/**
 * Interface for the weather information of a specific day of forecast weather.
 */
export interface WeatherInfoShort {
  dt: number;
  weather: { main: string }[];
  temp: {
    day: number;
    min: number;
    max: number;
  };
}

/**
 * Interface for UpdateMapProps.
 */
export interface UpdateMapProps {
  center: [number, number];
  zoom: number;
  zoomControl: boolean;
}

/**
 * Interface for the location data.
 */
export interface Location {
  coordinates: [number, number];
}

/**
 * Interface for a nearby city.
 */
export interface NearbyCity {
  id: number;
  city: string;
  location: Location;
}

export interface WeatherData {
  weatherData: {
    city: {
      coord: {
        lon: number;
        lat: number;
      };
      name: string;
    };
    list: Array<{
      dt: number;
      temp: {
        day: number;
        min: number;
        max: number;
      };
      feels_like: {
        day: number;
      };
      weather: Array<{ main: string }>;
      clouds: number;
      humidity: number;
    }>;
  };
  nearbyCities: Array<{
    id: number;
    city: string;
    location: {
      coordinates: [number, number];
    };
  }>;
}

/**
 * Interface for WeatherContext props.
 */
export interface WeatherContextProps {
  children: ReactNode;
}

/**
 * Interface for the WeatherContext type.
 */
export interface WeatherContextType {
  weather: WeatherData | null;
  handleWeatherService: (coordinates?: [number, number]) => Promise<void>;
}
