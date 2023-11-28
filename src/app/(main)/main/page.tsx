"use client";
import { MainComponent } from "@/components/main/MainComponent";
import Script from "next/script";
import "@/utils/google/mapInit";

export default function Main() {
  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
        strategy="beforeInteractive"
        async
        defer
      />
      <div style={{ fontFamily: "Mulish", margin: "0 auto" }}>
        <MainComponent />
      </div>
    </>
  );
}
