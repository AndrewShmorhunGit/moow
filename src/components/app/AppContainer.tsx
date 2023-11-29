"use client";
import { ReactNode, useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "@/app/globals.scss";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export function AppContainer({ children }: { children: ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY === undefined) {
    throw new Error("Google maps API key is undefined!");
  }

  return (
    <html lang="en" className="no-touch">
      <body className={inter.className}>
        {children}
        <div id="map"></div>
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`}
          strategy="beforeInteractive"
          async
          defer
        />
      </body>
    </html>
  );
}
