"use client";
import { Order } from "@/types";
import { loadOrderLocalStorage, saveToLocalStorage } from "@/utils/functions";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Order = loadOrderLocalStorage() || {
  initialCoords: { lat: null, lng: null },
  orderDate: "",
  orderTime: "",
  orderLocations: [
    {
      id: "A",
      address: "",
      locationCoords: { lat: null, lng: null },
      workingHours: 0,
    },
  ],
  cargoInfo: null,
  expedition: false,
  clientInfo: null,
  services: null,
  distanceToStorage: 0,
  totalRouteDistance: 0,
  routeDistance: 0,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state, action) => {
      saveToLocalStorage(action.payload);
      return action.payload;
    },
  },
});

export const { setOrder } = orderSlice.actions;

export default orderSlice.reducer;
