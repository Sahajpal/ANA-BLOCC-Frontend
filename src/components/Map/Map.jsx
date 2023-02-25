import React, { useEffect, useRef } from "react";

function Map() {
  const mapRef = useRef(null);
  useEffect(() => {
    const mapOptions = {
      center: { lat: 20.5937, lng: 78.9629 },
      zoom: 80,
      scaleControl: true,
    };
    const map = new window.google.maps.Map(mapRef.current, mapOptions);
    const polygon = new window.google.maps.Polygon({
      paths: [
        { lat: 20.5937, lng: 78.9629 },
        { lat: 20.5938, lng: 78.963 },
        { lat: 20.5936, lng: 78.962 },
        { lat: 20.5937, lng: 78.9629 },
      ],
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
    });

    polygon.setMap(map);
  }, []);
  return <div ref={mapRef} style={{ height: "100%", width: "100%" }} />;
}

export default Map;
