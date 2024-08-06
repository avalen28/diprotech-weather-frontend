const getCurrentLocationFromBrowser = async () => {
  if ("geolocation" in navigator) {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      return {
        long: position.coords.longitude,
        lat: position.coords.latitude,
      };
    } catch (error) {
      throw new Error(`Error getting location: ${error.message}`);
    }
  } else {
    throw new Error("Geolocation is not supported by this browser.");
  }
};

export default getCurrentLocationFromBrowser;
