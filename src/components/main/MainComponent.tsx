"use client";

import * as React from "react";
// import dynamic from "next/dynamic";
import { InitialLocationInput } from "./route/InitialLocationInput";
import { LocationInput } from "./route/LocationInput";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
// import { ConfirmOrderList } from "./order/ConfirmOrderList";
import AboutCargo from "./cargo/AboutCargo";
import { ClientContacts } from "./contacts/ClientContacts";
import { PaymentMethod } from "./payment/PaymentMethod";
import { MoowLogo } from "@/assets/logos/MoowLogo";
import InfoBlock from "./info/InfoBlock";

export function MainComponent() {
  return (
    <div
      style={{
        backgroundColor: "#FFF",
        width: "1240px",
        display: "flex",

        flexDirection: "column",
      }}
    >
      <Header />
      <div
        style={{
          color: "#000",
          textAlign: "center",
          alignSelf: "center",
          marginTop: "15px",
          whiteSpace: "nowrap",
          // "@media (max-width: 991px)": {
          //   whiteSpace: "initial",
          // },
          font: "700 24px/30px Mulish, sans-serif ",
        }}
      >
        Замовити
      </div>

      <div
        style={{
          marginTop: "15px",
          // "@media (max-width: 991px)": {
          //   maxWidth: "100%",
          // },
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 540px",
            // "@media (max-width: 991px)": {
            //   flexDirection: "column",
            //   alignItems: "stretch",
            // },
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "normal",
              padding: "0 1.6rem",
              marginLeft: "0px",
              // "@media (max-width: 991px)": {
              //   width: "100%",
              //   marginLeft: 0,
              // },
            }}
          >
            <div
              style={{
                alignItems: "flex-start",
                display: "flex",
                flexGrow: "1",
                flexDirection: "column",
                padding: "0 20px",
                // "@media (max-width: 991px)": {
                //   maxWidth: "100%",
                //   marginTop: "40px",
                // },
              }}
            >
              <div
                style={{
                  color: "var(--purple-600, #665CD1)",
                  alignSelf: "stretch",
                  marginRight: "-20px",
                  // "@media (max-width: 991px)": {
                  //   maxWidth: "100%",
                  // },
                  font: "700 19px/24px Mulish, sans-serif ",
                }}
              >
                Маршрут
              </div>
              <InitialLocationInput />
              <LocationInput />

              <button
                className="primary-button"
                style={{
                  marginTop: "10px",
                }}
              >
                Додати ще одну точку
              </button>
              <div
                style={{
                  alignSelf: "stretch",
                  backgroundColor: "var(--black-200, #C4C4C4)",
                  display: "flex",
                  height: "1px",
                  flexDirection: "column",
                  // "@media (max-width: 991px)": {
                  //   maxWidth: "100%",
                  // },
                  margin: "20px -20px 0 0",
                }}
              />
              <AboutCargo />
              <ClientContacts />
              <PaymentMethod />
            </div>
          </div>
          <InfoBlock />
        </div>
      </div>
      <div
        style={{
          alignItems: "start",
          backgroundColor: "var(--bg, #FEFEFE)",
          display: "flex",
          marginTop: "86px",
          width: "100%",
          borderTop: "1px grey solid",
          flexDirection: "column",
          // "@media (max-width: 991px)": {
          //   maxWidth: "100%",
          //   padding: "0 20px",
          // },
          padding: "0 42px",
        }}
      >
        <MoowLogo size={124} />
        <Footer />
      </div>
    </div>
  );
}
