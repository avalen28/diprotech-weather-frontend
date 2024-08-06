import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faCloudRain,
  faCloudShowersHeavy,
  faBolt,
  faSnowflake,
  faCloudSun,
  faWind,
  faSmog,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

const toCelsius = (temp) => {
  const celsius = temp - 273.15;
  return Math.round(celsius * 10) / 10;
};

const icons = [
  {
    type: "Rain",
    icon: faCloudRain,
  },
  {
    type: "Clear",
    icon: faSun,
  },
  {
    type: "Clouds",
    icon: faCloud,
  },
  {
    type: "Bolt",
    icon: faBolt,
  },
  {
    type: "HeavyRain",
    icon: faCloudShowersHeavy,
  },
  {
    type: "Snow",
    icon: faSnowflake,
  },
  {
    type: "CloudSun",
    icon: faCloudSun,
  },
  {
    type: "Wind",
    icon: faWind,
  },
  {
    type: "Mist",
    icon: faSmog,
  },
  {
    type: "Haze",
    icon: faSmog,
  },
];

const printWeatherIcon = (info) => {

    const patata = icons.find((elem) => elem.type === info);
    return patata.icon
};
export { toCelsius, printWeatherIcon };
