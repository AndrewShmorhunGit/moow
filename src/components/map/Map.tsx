"use client";
import React, { useState, useEffect, useRef } from "react";
import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";
import { useAppSelector } from "@/hooks/useAppDispatch";
import { createMarkersMap } from "@/utils/google";
import { Coords } from "@/types";

const containerStyle = {
  width: "500px",
  height: "400px",
};

export const Map: React.FC = () => {
  const initialState = useAppSelector((state) => state.order);

  const { orderLocations } = initialState;
  const markersMap: Map<
    string,
    google.maps.LatLng | google.maps.LatLngLiteral
  > = createMarkersMap(orderLocations);

  const destination = {
    /* your destination coordinates */
    ...orderLocations[0].locationCoords,
  };

  const [directionsResponse, setDirectionsResponse] = useState(null);
  const directionsService = useRef(new window.google.maps.DirectionsService());

  const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });

  const origin = {
    /* your origin coordinates */
    ...currentLocation,
  };

  useEffect(() => {
    if (!origin || !destination) return;

    directionsService.current.route(
      {
        origin: origin,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirectionsResponse(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }, [origin, destination]);

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
      {directionsResponse && (
        <DirectionsRenderer directions={directionsResponse} />
      )}

      <Marker position={currentLocation} />
      {Array.from(markersMap.entries()).map(([id, coords]) => {
        if (coords.lat && coords.lng) {
          return (
            <div key={id}>
              <Marker position={coords} label={id} />
            </div>
          );
        }
      })}
    </GoogleMap>
  );
};

export default Map;
