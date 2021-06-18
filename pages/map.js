import styled from '@emotion/styled';
import { useEffect, useRef, useState } from "react";
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = "pk.eyJ1IjoianVsaW1hbiIsImEiOiJja3EydnF0b3YwMTZmMndvenljYTR1bmcyIn0.7iZsib6jwfEnmMPHM66Dxw";

const Map = styled.main`
  .map-container {
    height: 400px;
    width: 100%;
    position: relative;
  }
  .sidebar {
  background-color: rgba(35, 55, 75, 0.9);
  color: black;
  padding: 6px 12px;
  font-family: monospace;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  margin: 12px;
  border-radius: 4px;
}
.mapboxgl-control-container {
  display: none;
}
`;


const map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    zoom: 10,
    width: "500px",
    height: "500px",
  });


  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <Map>
      MAAAAAAAP!
      <div ref={mapContainer} className="map-container">

      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      </div>


    </Map>
  )
};

export default map;
