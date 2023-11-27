export type Coords = { lat: null | number; lng: null | number };

export type Order = {
  initialCoords: Coords;
  orderDate: string;
  orderTime: string;
  orderLocations: OrderLocation[];
  cargoInfo: Cargo | null;
  expedition: boolean;
  clientInfo: ClientInfo | null;
  services: null;
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
  distance: number;
};

export type Cargo = {
  weight: number;
  height: number;
  width: number;
  length: number;
};
