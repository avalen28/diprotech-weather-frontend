import axios from "axios";
import getCurrentLocationFromBrowser from "../utils/location";

class WeatherService {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:8000/weather-data",
    });
  }

  async getWeatherDataByLongLat() {
    try {
      const currentCoordinates = await getCurrentLocationFromBrowser();
      const { long, lat } = currentCoordinates;
      const response = await this.api.get(`${long}/${lat}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

const weatherService = new WeatherService();

export default weatherService;
