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
      locationCoords: { lat: 0, lng: 0 },
      workingHours: 0,
      distance: 0,
    },
  ],
  cargoInfo: null,
  expedition: false,
  clientInfo: null,
  services: null,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state, action) => {
      saveToLocalStorage(action.payload);
      return { ...state, ...action.payload };
    },
  },
});

export const { setOrder } = orderSlice.actions;

export default orderSlice.reducer;
