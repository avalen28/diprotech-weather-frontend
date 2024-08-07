import { Icon } from "leaflet";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import { useWeather } from "../hooks/useWeather";
import "../styles/map.css";
import "leaflet/dist/leaflet.css";

const UpdateMap = ({ center, zoom, zoomControl }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom, zoomControl);
  }, [center, zoom, zoomControl, map]);

  return null;
};

const Map = () => {
  const { weather, handleWeatherService } = useWeather();
  const [coordinates, setCoordinates] = useState(null);
  const [nearbyCities, setNearbyCities] = useState(null);
  useEffect(() => {
    if (weather) {
      const { lon, lat } = weather.weatherData.city.coord;
      setCoordinates([lat, lon]);
      setNearbyCities(weather.nearbyCities);
    }
  }, [weather]);
  const icon = new Icon({
    iconUrl:
      "https://www.citypng.com/public/uploads/preview/red-gps-location-symbol-icon-hd-png-116369431412wisxxt5bl.png",
    iconSize: [24, 35],
  });

  return (
    <>
      {!coordinates && "Loading"}
      {coordinates && (
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
          <Marker position={coordinates} icon={icon}></Marker>;
          {nearbyCities.map((location) => (
            <Marker
              key={location.id}
              position={location.location.coordinates.reverse()}
              icon={icon}
              eventHandlers={{
                click: () =>
                  handleWeatherService(location.location.coordinates.reverse()),
              }}
            ></Marker>
          ))}
          <UpdateMap center={coordinates} zoom={11} zoomControl={false} />
        </MapContainer>
      )}
    </>
  );
};

export default Map;
