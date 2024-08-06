const getCurrentLocationFromBrowser = () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const userCoordinates = {
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
      };
      return userCoordinates
    });
  }
};

export default getCurrentLocationFromBrowser;
