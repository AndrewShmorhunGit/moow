"use client";

import { useEffect, useState } from "react";
import { AutocompleteInput } from "../lib/AutocompleteInput";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import { locationsIdList } from "@/data/order";
import { setOrder } from "@/app/redux/features/order/order.slice";

export function LocationForm({ index: formIndex }: { index: number }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const locationName = locationsIdList[formIndex];
  const dispatch = useAppDispatch();

  const { orderLocations } = useAppSelector((state) => state.order);

  const [isForm, setForm] = useState({
    location: orderLocations[formIndex],
  });

  const handleWorkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const newWorkingHours = target.value as string;
    const hours = +newWorkingHours >= 0 ? +newWorkingHours : 0;

    setForm({
      ...isForm,
      location: { ...isForm.location, workingHours: hours },
    });
  };

  useEffect(() => {
    const newOrderLocations = orderLocations.map((location) => {
      return location.id === locationsIdList[formIndex]
        ? isForm.location
        : location;
    });

    dispatch(
      setOrder({
        orderLocations: newOrderLocations,
      })
    );
  }, [isForm]);

  if (isClient)
    return (
      <div
        style={{
          justifyContent: "space-between",
          borderRadius: "10px",
          border: "1px solid var(--black-200, #C4C4C4)",
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          margin: "10px -20px 0 0",
          padding: "15px",
        }}
      >
        <div
          style={{
            color: "var(--black-500, #262626)",
            whiteSpace: "nowrap",
            paddingBottom: "15px",
            font: "700 16px/20px Mulish, sans-serif ",
          }}
        >
          {`Точка ${locationName}`}
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <div style={{ width: "71%" }}>
            <AutocompleteInput id={locationsIdList[formIndex]} />
          </div>
          <div style={{ width: "29%", marginLeft: "40px" }}>
            <div
              style={{
                display: "flex",
                flexBasis: "0%",
                flexDirection: "column",
              }}
            >
              <label
                htmlFor={`work${locationsIdList[formIndex]}`}
                style={{
                  cursor: "pointer",
                  color: "var(--black-400, #5A5A5A)",
                  whiteSpace: "nowrap",

                  font: "500 14px/18px Mulish, sans-serif ",
                }}
              >
                Час роботи (год)
              </label>
              <input
                type="number"
                name="work"
                id={`work${locationsIdList[formIndex]}`}
                onChange={(e) => handleWorkChange(e)}
                value={isForm.location.workingHours}
                style={{
                  outline: "none",
                  border: "none",
                  color: "var(--black-500, #262626)",
                  marginTop: "5px",
                  font: "500 16px/20px Mulish, sans-serif ",
                }}
              />

              <div
                style={{
                  borderRadius: "10px",
                  background: "#665CD1",
                  display: "flex",
                  height: "1px",
                  flexDirection: "column",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
}
