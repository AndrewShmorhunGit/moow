"use client";
import React, { useState, useEffect } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "500px",
  height: "400px",
};

export const Map: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  if (process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY === undefined) {
    throw new Error("Google maps API key is undefined!");
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={currentLocation}
      zoom={10}
    >
      <Marker
        position={currentLocation}
        // icon={{
        //   url: "./location.svg",
        //   scaledSize: new window.google.maps.Size(50, 50),
        // }}
      />
    </GoogleMap>
  );
};

export default Map;
