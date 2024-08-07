import { Icon, LatLngExpression } from "leaflet";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import { useWeather } from "../hooks/useWeather";
import "../styles/map.css";
import "leaflet/dist/leaflet.css";
import { NearbyCity, UpdateMapProps } from "../interfaces";


/**
 * UpdateMap component updates the map view when the center or zoom changes.
 * @component
 * @param {UpdateMapProps} props - The properties passed to the component.
 * @param {Array<number>} props.center - The center coordinates of the map.
 * @param {number} props.zoom - The zoom level of the map.
 * @param {boolean} props.zoomControl - Whether the zoom control is enabled.
 * @returns {null} This component does not render anything.
 */
const UpdateMap: React.FC<UpdateMapProps> = ({ center, zoom, zoomControl }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom, { animate: true });
  }, [center, zoom, zoomControl, map]);

  return null;
};





/**
 * Map component displays a map with markers for the current location and nearby cities.
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const Map: React.FC = () => {
  const { weather, handleWeatherService } = useWeather()!;
  const [coordinates, setCoordinates] = useState<[number, number] | null>(null);
  const [nearbyCities, setNearbyCities] = useState<NearbyCity[] | null>(null);

  /**
   * useEffect hook to update the coordinates and nearby cities when weather data is available.
   */
  useEffect(() => {
    if (weather) {
      const { lon, lat } = weather.weatherData.city.coord;
      setCoordinates([lat, lon]);
      setNearbyCities(weather.nearbyCities);
    }
  }, [weather]);

  const currentIcon = new Icon({
    iconUrl:
      "https://static.vecteezy.com/system/resources/previews/023/554/762/original/red-map-pointer-icon-on-a-transparent-background-free-png.png",
    iconSize: [28, 34],
  });

  const icon = new Icon({
    iconUrl:
      "https://www.iconpacks.net/icons/2/free-location-pointer-icon-2961-thumb.png",
    iconSize: [24, 28],
  });

  return (
    <>
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
          <Marker position={coordinates} icon={currentIcon}></Marker>;
          {nearbyCities?.map((city) => (
            <Marker
              key={city.id}
              position={city.location.coordinates.reverse() as LatLngExpression}
              icon={icon}
              eventHandlers={{
                click: () =>
                  handleWeatherService(city.location.coordinates.reverse() as [number, number]),
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
