import { Icon } from "leaflet";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { useWeather } from "../hooks/useWeather";
import "../App.css"
import "leaflet/dist/leaflet.css";

const Map = () => {
  const [coordinates, setCoordinates] = useState([]);
    const { weather } = useWeather();
  useEffect(() => {
    if (weather) {
        const { lon, lat } = weather.weatherData.city.coord;
        setCoordinates([lat, lon]);
    }
  }, [weather]);
  const icon = new Icon({
    iconUrl:
      "https://www.citypng.com/public/uploads/preview/red-gps-location-symbol-icon-hd-png-116369431412wisxxt5bl.png",
    iconSize: [24, 35],
  });

  return (
    <>
      {!coordinates.length && "Loading"}
      {coordinates.length > 0 && (
        <MapContainer
          center={coordinates}
          zoom={11}
          className="leaflet-container"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            detectRetina={true}
          />
          <Marker position={coordinates} icon={icon}></Marker>
        </MapContainer>
      )}
    </>
  );
};

export default Map;
