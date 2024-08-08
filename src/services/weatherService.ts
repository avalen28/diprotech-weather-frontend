import axios, { AxiosInstance } from "axios";
import getCurrentLocationFromBrowser from "../utils/location";
import { WeatherData } from "../interfaces";

/**
 * Service for handling weather data requests.
 * @class
 */

class WeatherService {
  /**
   * Creates an instance of WeatherService.
   * Sets up the axios instance with the base URL for weather data.
   */
  api: AxiosInstance | any = null;
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:8000/weather-data",
    });
  }

  /**
   * Gets the weather data by longitude and latitude.
   * If coordinates are not provided, it fetches the current location from the browser.
   * @async
   * @param {Array<number>} [coordinates] - The longitude and latitude coordinates.
   * @returns {Promise<Object|string>} The weather data or an error message.
   */
  async getWeatherDataByLongLat(
    coordinates?: [number, number]
  ): Promise<WeatherData | string> {
    try {
      if (!coordinates) {
        const currentCoordinates = await getCurrentLocationFromBrowser();
        const { long, lat } = currentCoordinates;
        coordinates = [long, lat];
      }
      const [long, lat] = coordinates;
      const response = await this.api.get(`${long}/${lat}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return "error";
    }
  }
}

/**
 * Instance of WeatherService.
 * @type {WeatherService}
 */
const weatherService = new WeatherService();

export default weatherService;
