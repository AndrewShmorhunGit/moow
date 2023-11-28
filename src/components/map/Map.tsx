"use client";
import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import { createMarkersMap } from "@/utils/google";
import { setOrder } from "@/app/redux/features/order/order.slice";

const containerStyle = {
  width: "500px",
  height: "400px",
};

export const Map: React.FC = () => {
  const dispatch = useAppDispatch();
  const initialState = useAppSelector((state) => state.order);

  const {
    orderLocations,
    distanceToStorage,
    totalRouteDistance,
    routeDistance,
  } = initialState;

  const [isRoutes, setRoutes] = useState({
    distanceToStorage,
    totalRouteDistance,
    routeDistance,
  });

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

  useEffect(() => {
    const { distanceToStorage, totalRouteDistance, routeDistance } = isRoutes;
    dispatch(
      setOrder({
        ...initialState,
        distanceToStorage,
        totalRouteDistance,
        routeDistance,
      })
    );
  }, [isRoutes]);

  if (process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY === undefined) {
    throw new Error("Google maps API key is undefined!");
  }

  const locationMarkers = useMemo(() => {
    return Array.from(markersMap.entries()).map(([id, coords], index) => {
      if (coords.lat && coords.lng) {
        return <Marker key={id} position={coords} />;
      }
      return null;
    });
  }, [orderLocations]);

  const validMarkers = locationMarkers.filter(
    (marker) => marker !== null
  ) as React.JSX.Element[];

  const calculateRoute = useCallback(() => {
    if (validMarkers.length < 2) return;

    const waypoints = validMarkers.map((marker: unknown) => ({
      location: marker.props.position,
      stopover: true,
    }));
    if (waypoints === undefined) {
      return;
    }

    const destination = waypoints.pop()?.location;

    // Calculate distance from current location to the first marker
    const firstDestination = validMarkers[0].props.position;
    directionsService.current.route(
      {
        origin: currentLocation,
        destination: firstDestination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK && result) {
          let storeDistance = 0;
          result.routes[0].legs.forEach((leg) => {
            storeDistance += leg.distance.value;
          });
          storeDistance = storeDistance / 1000;

          setRoutes({ ...isRoutes, distanceToStorage: storeDistance });

          console.log("Distance to first marker: ", storeDistance, "km");
        } else {
          console.error(`Error fetching distance to first marker`);
        }
      }
    );

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

          // Calculate the total distance
          let totalDistance = 0;
          result.routes[0].legs.forEach((leg) => {
            totalDistance += leg.distance.value;
          });
          totalDistance = totalDistance / 1000;
          const routeDistance = totalDistance - initialState.distanceToStorage;
          setRoutes({
            ...isRoutes,
            routeDistance,
            totalRouteDistance: totalDistance,
          });

          console.log("Total distance: ", totalDistance, "km");
        } else {
          console.error(
            `error fetching directions ${result}, Status: ${status}`
          );
        }
      }
    );
  }, [currentLocation, validMarkers]);

  useEffect(() => {
    calculateRoute();
  }, [currentLocation, orderLocations]);

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
