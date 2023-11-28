import { useAppSelector } from "@/hooks/useAppDispatch";
import React from "react";
import "./OrderList.scss";
import OrderItem from "./item/OrderItem";
import { showPrice } from "@/utils/functions";
import { OrderLocation } from "@/types";

export function OrderList() {
  const initialState = useAppSelector((state) => state.order);

  const { expedition, routeDistance, distanceToStorage, orderLocations } =
    initialState;

  const toStoragePrice = distanceToStorage * 10;
  const routePrice = routeDistance * 20;
  const expeditionPrice = expedition ? 2000 : 0;

  function calculateTotalWorkingHours(locations: OrderLocation[]): number {
    return locations.reduce((total, location) => {
      return total + location.workingHours;
    }, 0);
  }
  const totalWorkingHours = calculateTotalWorkingHours(orderLocations);
  const totalWorkingPrice = calculateTotalWorkingHours(orderLocations) * 200;

  const total =
    toStoragePrice + routePrice + expeditionPrice + totalWorkingPrice;

  return (
    <div style={{ marginTop: "5px", display: "flex", flexDirection: "column" }}>
      <OrderItem title="Подача транспотру" price={showPrice(toStoragePrice)} />
      <OrderItem
        title="Маршрут загрузка - вигрузка"
        price={showPrice(routePrice)}
      />
      <OrderItem
        title="Послуги експедитора"
        price={showPrice(expeditionPrice)}
      />

      <div
        style={{
          justifyContent: "space-between",
          alignSelf: "stretch",
          display: "flex",
          marginTop: "5px",
          gap: "20px",
        }}
      >
        <div
          style={{
            color: "var(--black-500, #262626)",
            textAlign: "center",
            font: "300 14px/18px Mulish, sans-serif ",
          }}
        >
          Послуги грузчиків
        </div>
        <div
          style={{
            color: "var(--black-500, #262626)",
            textAlign: "center",
            whiteSpace: "nowrap",
            font: "500 14px/18px Mulish, sans-serif ",
          }}
        >
          {`${showPrice(totalWorkingPrice)} грн`}
        </div>
      </div>
      <div
        style={{
          justifyContent: "space-between",
          alignSelf: "stretch",
          display: "flex",
          marginTop: "5px",
          gap: "20px",
        }}
      >
        <div
          style={{
            color: "var(--black-500, #262626)",
            textAlign: "center",
            font: "300 14px/18px Mulish, sans-serif ",
          }}
        >
          2 грузчиків
        </div>
        <div
          style={{
            color: "var(--black-500, #262626)",
            textAlign: "center",
            whiteSpace: "nowrap",
            font: "500 14px/18px Mulish, sans-serif ",
          }}
        >
          {`${showPrice(200)} грн/год`}
        </div>
      </div>
      <div
        style={{
          justifyContent: "space-between",
          alignSelf: "stretch",
          display: "flex",
          marginTop: "5px",
          gap: "20px",
        }}
      >
        <div
          style={{
            color: "var(--black-500, #262626)",
            textAlign: "center",
            font: "300 14px/18px Mulish, sans-serif ",
          }}
        >
          Зайнятість
        </div>
        <div
          style={{
            color: "var(--black-500, #262626)",
            textAlign: "center",
            whiteSpace: "nowrap",

            font: "500 14px/18px Mulish, sans-serif ",
          }}
        >
          {`${totalWorkingHours} години`}
        </div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          backgroundColor: "var(--black-200, #C4C4C4)",
          display: "flex",
          marginTop: "5px",
          height: "1px",
          flexDirection: "column",
        }}
      />
      <div>
        <div
          style={{
            color: "var(--black-600, #171717)",
            marginTop: "15px",
            whiteSpace: "nowrap",
            font: "700 16px/20px Mulish, sans-serif ",
          }}
        >
          Повна ціна:
        </div>
        <div
          style={{
            color: "var(--purple-600, #665CD1)",
            font: "700 24px/30px Mulish, sans-serif ",
          }}
        >
          {`${showPrice(total)} грн`}
        </div>
        <div className="center">
          <button
            className="secondary-button"
            style={{
              marginTop: "15px",
            }}
          >
            Оформити
          </button>
        </div>
      </div>
    </div>
  );
}
