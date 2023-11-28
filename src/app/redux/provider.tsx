"use client";
import { Provider } from "react-redux";
import { setupStore } from "./store";
import { saveToLocalStorage } from "@/utils/functions";

const store = setupStore();

export default function ReduxStoreProvider({ children }: { children: any }) {
  return <Provider store={store}>{children}</Provider>;
}
