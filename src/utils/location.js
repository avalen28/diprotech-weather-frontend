const getCurrentLocationFromBrowser = () => {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            long: position.coords.longitude,
            lat: position.coords.latitude,
          };
          resolve(location);
        },
        (error) => reject(error)
      );
    } else {
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
};

export default getCurrentLocationFromBrowser;
