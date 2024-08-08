/**
 * Gets the current geographic location from the browser.
 * @async
 * @function
 * @returns {Promise<{long: number, lat: number}>} The longitude and latitude of the current location.
 * @throws {Error} If geolocation is not supported by the browser or if there is an error obtaining the location.
 */
const getCurrentLocationFromBrowser = async (): Promise<{
  long: number;
  lat: number;
}> => {
  if ("geolocation" in navigator) {
    try {
      const position = await new Promise<GeolocationPosition>(
        (resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        }
      );

      return {
        long: position.coords.longitude,
        lat: position.coords.latitude,
      };
    } catch (error) {
      throw new Error("Error getting location");
    }
  } else {
    throw new Error("Geolocation is not supported by this browser.");
  }
};

export default getCurrentLocationFromBrowser;
