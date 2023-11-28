"use client";
import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";
import { useAppSelector } from "@/hooks/useAppDispatch";
import { createMarkersMap } from "@/utils/google";

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

  const [directionsResponse, setDirectionsResponse] =
    useState<google.maps.DirectionsResult | null>(null);
  const directionsService = useRef(new window.google.maps.DirectionsService());

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

  const destination = {
    /* your destination coordinates */
    ...orderLocations[0].locationCoords,
  };

  const origin = {
    /* your origin coordinates */
    ...currentLocation,
  };

  // const distance =
  //   window.google.maps.geometry.spherical.computeDistanceBetween(
  //     new window.google.maps.LatLng(origin.lat, origin.lng),
  //     new window.google.maps.LatLng(destination.lat, destination.lng)
  //   ) / 1000;

  // console.log(distance);

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
  }, []);

  if (process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY === undefined) {
    throw new Error("Google maps API key is undefined!");
  }

  const locationMarkers = useMemo(() => {
    return Array.from(markersMap.entries()).map(([id, coords]) => {
      if (coords.lat && coords.lng) {
        return <Marker key={id} position={coords} label={id} />;
      }
      return null;
    });
  }, [markersMap]);

  const validMarkers = locationMarkers.filter(
    (marker) => marker !== null
  ) as React.JSX.Element[];

  const calculateRoute = useCallback(() => {
    if (Object.keys(currentLocation).length === 0 || validMarkers.length < 1)
      return;

    const waypoints = validMarkers.map((marker: any) => ({
      location: marker.props.position,
      stopover: true,
    }));
    if (waypoints === undefined) {
      return;
    }

    const destination = waypoints.pop().location;

    directionsService.current.route(
      {
        origin: currentLocation,
        destination: destination,
        waypoints: waypoints,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirectionsResponse(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }, [currentLocation, validMarkers]);

  useEffect(() => {
    calculateRoute();
  }, [calculateRoute]);

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
      {locationMarkers}
    </GoogleMap>
  );
};

export default Map;
