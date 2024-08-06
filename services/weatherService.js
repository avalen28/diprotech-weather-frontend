import axios from "axios";

class WeatherService {
    constructor(){
     this.api = axios.create({
       baseURL: "http://localhost:8000/weather-data",
     });
    }

    async getWeatherDataByLongLat(long, lat) {
        try {
            const response = await this.api.get(`${long}/${lat}`);
            return response
        } catch (error) {
            console.error(error)
        }
    }
}

const weatherService = new WeatherService();

export default weatherService;