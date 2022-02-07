import styled from '@emotion/styled';
import { createRef, useEffect, useRef, useState } from "react";
import mapboxgl from '!mapbox-gl';
import ReactDOM from 'react-dom';
import MapMarker from "../components/MapMarker";
import 'mapbox-gl/dist/mapbox-gl.css'



mapboxgl.accessToken = "pk.eyJ1IjoianVsaW1hbiIsImEiOiJja3EydnF0b3YwMTZmMndvenljYTR1bmcyIn0.7iZsib6jwfEnmMPHM66Dxw";

// import geoJson from './chicago-parks.geojson';

import parks from "../components/chicago-parks.json"

const MapContainer = styled.main`
* {
  /* border: 1px solid black; */
}
/* background: red; */
  .map-container {
    height: 400px;
    width: 80%;
    position: relative;
    overflow: hidden;
  }
  .sidebar {
  background-color: purple;
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
  /* display: none; */
}
.mapboxgl-marker {
  width: fit-content;
.marker-info {
  display: none;
}
  &:hover {
    .marker-info {
    background: yellow;
    display: flex;
    }
  }
}
`;


const map = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(-87.5781);
  const [lat, setLat] = useState(41.8998);
  const [zoom, setZoom] = useState(9);

  // initialize map when component mounts
  useEffect(() => {
    const newMap = new mapboxgl.Map({
      container: mapContainerRef.current,
      // style: "mapbox://styles/juliman/ckq5muqmg6iqk17mnpb1x3df7",
      style: "mapbox://styles/mapbox/light-v9",
      center: [lng, lat],
      zoom: zoom
    });

  // Render custom marker components
    parks.features.forEach((feature) => {
      // create a react ref
      const ref = createRef();
      // create a new dom node and save it to the react ref
      ref.current = document.createElement("div");
      // render a marker component on our new dom node
      // console.log(`feature`, feature)
      ReactDOM.render(
        <MapMarker onClick={markerClicked} feature={feature} >

          <div className="marker-info">
            {feature.properties.title}
            {/* {feature.properties.description} */}
          </div>

        </MapMarker>,
        ref.current
      );

      // create a mapbox marker at our new dom node
      new mapboxgl.Marker(ref.current, )
        .setLngLat(feature.geometry.coordinates)
        .addTo(newMap);
    });

    // add navigation control
    newMap.addControl(new mapboxgl.NavigationControl(), "top-right");

    newMap.on("move", () => {
      setLng(newMap.getCenter().lng.toFixed(4));
      setLat(newMap.getCenter().lat.toFixed(4));
      setZoom(newMap.getZoom().toFixed(2));
    });

    // clean up on unmount
    return () => newMap.remove();
  }, []);

  const markerClicked = title => window.alert(title);
  return (
    <MapContainer>
      MAAAAAAAP!
      <div ref={mapContainerRef} className="map-container">

      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      </div>


    </MapContainer>
  )
};

export default map;
