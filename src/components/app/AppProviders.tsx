// import { Loader } from "@googlemaps/js-api-loader";
import ReduxStoreProvider from "@/app/redux/provider";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";
import { ReactNode } from "react";
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <ReduxStoreProvider>{children}</ReduxStoreProvider>
    </ClerkProvider>
  );
}
