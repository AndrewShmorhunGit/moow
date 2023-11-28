export type Coords = google.maps.LatLng | google.maps.LatLngLiteral;

export type Order = {
  initialCoords: Coords;
  orderDate: string;
  orderTime: string;
  orderLocations: OrderLocation[];
  cargoInfo: Cargo;
  expedition: boolean;
  clientInfo: ClientInfo | null;
  services: null;
  distanceToStorage: number;
  totalDistance: number;
  routeDistance: number;
};

export type ClientInfo = {
  firstName: string;
  lastName: string;
  phone: string;
};

export type OrderLocation = {
  id: string;
  address: string;
  locationCoords: Coords;
  workingHours: number;
};

export type Cargo = {
  weight: number;
  height: number;
  width: number;
  length: number;
  description: string;
};
