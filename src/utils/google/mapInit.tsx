import React, { useState, useEffect } from "react";

// Ensure to install @types/googlemaps if you haven't already
// npm install @types/googlemaps --save-dev

declare global {
  interface Window {
    mapInit: () => void;
  }
}

const MapComponent: React.FC = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  window.mapInit = () => {
    const mapElement = document.getElementById("map") as HTMLElement;
    const mapOptions: google.maps.MapOptions = {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    };
    const newMap = new google.maps.Map(mapElement, mapOptions);
    setMap(newMap);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=mapInit`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      window.mapInit = () => {};
    };
  }, []);

  return <div id="map" style={{ height: "400px", width: "100%" }} />;
};

export default MapComponent;
