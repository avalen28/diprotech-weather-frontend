
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

/**
 * Converts a temperature from Kelvin to Celsius.
 * @param {number} temp - The temperature in Kelvin.
 * @returns {number} The temperature in Celsius, rounded to one decimal place.
 */
const toCelsius = (temp) => {
  const celsius = temp - 273.15;
  return Math.round(celsius * 10) / 10;
};

/**
 * Array of weather types and their corresponding icons.
 * @type {Array<{type: string, icon: Object}>}
 */
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

/**
 * Finds and returns the corresponding weather icon for the given weather type.
 * @param {string} info - The type of weather.
 * @returns {Object} The icon corresponding to the weather type.
 */
const printWeatherIcon = (info) => {

    const patata = icons.find((elem) => elem.type === info);
    return patata.icon
};

/**
 * Formats a Unix timestamp into a day of the week in Spanish.
 * @param {number} dateToTransform - The Unix timestamp to format.
 * @returns {string} The day of the week in Spanish.
 */
const formatDate = (dateToTransform) => {
  const daysOfWeek = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  const date = new Date(dateToTransform * 1000);

  const dayOfWeek = date.getUTCDay();

  return daysOfWeek[dayOfWeek];

}
export { toCelsius, printWeatherIcon, formatDate };
