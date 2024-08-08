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
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

/**
 * Converts a temperature from Kelvin to Celsius.
 * @param {number} temp - The temperature in Kelvin.
 * @returns {number} The temperature in Celsius, rounded to one decimal place.
 */
const toCelsius = (temp: number): number => {
  const celsius = temp - 273.15;
  return Math.round(celsius * 10) / 10;
};

/**
 * Interface representing a weather icon mapping.
 */
interface WeatherIcon {
  type: string;
  icon: IconDefinition;
}

/**
 * Array of weather types and their corresponding icons.
 * @type {Array<WeatherIcon>}
 */
const icons: WeatherIcon[] = [
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
 * @returns {IconDefinition } The icon corresponding to the weather type.
 */
const printWeatherIcon = (info: string): IconDefinition => {
  const icon = icons.find((elem) => elem.type === info);
  return icon!.icon;
};

/**
 * Formats a Unix timestamp into a day of the week in Spanish.
 * @param {number} dateToTransform - The Unix timestamp to format.
 * @returns {string} The day of the week in Spanish.
 */
const formatDate = (dateToTransform: number): string => {
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
};

export { toCelsius, printWeatherIcon, formatDate };
