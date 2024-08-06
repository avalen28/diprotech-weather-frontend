import axios from "axios";
import getCurrentLocationFromBrowser from "../utils/location";

class WeatherService {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:8000/weather-data",
    });
  }

  async getWeatherDataByLongLat(coordinates) {
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
      return "error"
    }
  }
}

const weatherService = new WeatherService();

export default weatherService;
