import { Coords, OrderLocation } from "@/types";

export function createMarkersMap(
  orderLocations: OrderLocation[]
): Map<string, google.maps.LatLng | google.maps.LatLngLiteral> {
  return orderLocations.reduce((map, location) => {
    map.set(location.id, location.locationCoords);
    return map;
  }, new Map<string, google.maps.LatLng | google.maps.LatLngLiteral>());
}

export function getLatitudeValue(lat: number | (() => number)): number {
  if (typeof lat === "function") {
    return lat();
  }
  return lat;
}

export function getLongitude(lng: number | (() => number)): number {
  if (typeof lng === "function") {
    return lng();
  }
  return lng;
}
