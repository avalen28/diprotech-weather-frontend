const toCelsius = (temp) => {
  const celsius = temp - 273.15;
  return Math.round(celsius * 10) / 10;
};

export { toCelsius };
