"use client";
import "./MainComponent.scss";
import { InitialLocationForm } from "./location/InitialLocationForm";
import { LocationForm } from "./location/LocationForm";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import AboutCargo from "./cargo/AboutCargo";
import { ClientContacts } from "./contacts/ClientContacts";
import { PaymentMethod } from "./payment/PaymentMethod";
import { MoowLogo } from "@/assets/logos/MoowLogo";
import InfoBlock from "./info/InfoBlock";
import { locationsIdList } from "@/data/order";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import { trimArray } from "@/utils/functions";
import { setOrder } from "@/app/redux/features/order/order.slice";
import { OrderLocation } from "@/types";
import { useState, useEffect } from "react";

export function MainComponent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const dispatch = useAppDispatch();
  const initialState = useAppSelector((state) => state.order);

  const { orderLocations } = initialState;

  const handleAddLocation = () => {
    const newLocationIndex = orderLocations.length;
    const newLocation: OrderLocation = {
      id: locationsIdList[newLocationIndex],
      address: "",
      locationCoords: { lat: 0, lng: 0 },
      workingHours: 0,
    };
    const newOrderLocations = [...orderLocations, newLocation];

    dispatch(setOrder({ ...initialState, orderLocations: newOrderLocations }));
  };

  const handleRemoveLocation = () => {
    const length = orderLocations.length < 2 ? 2 : orderLocations.length - 1;

    const newOrderLocations = trimArray(orderLocations, length);

    dispatch(setOrder({ ...initialState, orderLocations: newOrderLocations }));
  };

  if (isClient)
    return (
      <div
        style={{
          backgroundColor: "#FFF",
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
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
            font: "700 24px/30px Mulish, sans-serif ",
          }}
        >
          Замовити
        </div>
        <div
          style={{
            marginTop: "15px",
          }}
        >
          <div className="grid-container">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "normal",
                // padding: "0 1.6rem",
                marginLeft: "0px",
              }}
            >
              <div
                style={{
                  alignItems: "flex-start",
                  display: "flex",
                  flexGrow: "1",
                  flexDirection: "column",
                  padding: "0 20px",
                }}
              >
                <div
                  style={{
                    color: "var(--purple-600, #665CD1)",
                    alignSelf: "stretch",
                    font: "700 19px/24px Mulish, sans-serif ",
                  }}
                >
                  Маршрут
                </div>
                <InitialLocationForm />
                {trimArray(locationsIdList, orderLocations.length).map(
                  (location, index, array) => {
                    return (
                      index < array.length - 1 && (
                        <LocationForm key={location} index={index + 1} />
                      )
                    );
                  }
                )}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                    width: "100%",
                  }}
                >
                  <button
                    className="primary-button"
                    onClick={handleAddLocation}
                  >
                    Додати ще одну точку
                  </button>
                  {orderLocations.length > 2 && (
                    <button
                      className="secondary-button"
                      style={{}}
                      onClick={handleRemoveLocation}
                    >
                      Видалити точку
                    </button>
                  )}
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    backgroundColor: "var(--black-200, #C4C4C4)",
                    display: "flex",
                    height: "1px",
                    flexDirection: "column",
                    margin: "20px 0 0 0",
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
            padding: "0 42px",
          }}
        >
          <div className="footer-logo">
            <MoowLogo size={124} />
          </div>
          <Footer />
        </div>
      </div>
    );
}
