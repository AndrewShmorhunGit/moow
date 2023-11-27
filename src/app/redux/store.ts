"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import orderReducer from "./features/order/order.slice";

export const rootReducer = combineReducers({
  order: orderReducer,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
    // [api.reducerPath]: api.reducer,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
