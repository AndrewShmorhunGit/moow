"use client ";
import { setOrder } from "@/app/redux/features/order/order.slice";
import "./InitialLocationInput.scss";
import { AutocompleteInput } from "../lib/AutocompleteInput";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import { useEffect, useState } from "react";
import { changeLocationInOrderLocationsList } from "@/utils/functions";

export function InitialLocationForm() {
  const dispatch = useAppDispatch();

  const initialState = useAppSelector((state) => state.order);

  const { orderDate, orderTime, orderLocations } = initialState;

  const [isForm, setForm] = useState({
    date: orderDate,
    time: orderTime,
    location: orderLocations[0],
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

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const newTime = target.value as string;
    setForm({ ...isForm, time: newTime });
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const newDate = target.value as string;
    setForm({ ...isForm, date: newDate });
  };

  useEffect(() => {
    dispatch(
      setOrder({
        ...initialState,
        orderDate: isForm.date,
        orderTime: isForm.time,
        orderLocations: changeLocationInOrderLocationsList(
          orderLocations,
          0,
          isForm.location
        ),
      })
    );
  }, [isForm]);

  return (
    <form
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

          font: "700 16px/20px Mulish, sans-serif ",
        }}
      >
        Точка А
      </div>
      <div
        style={{
          alignContent: "flex-start",
          flexWrap: "wrap",
          marginTop: "15px",
        }}
      >
        <div
          style={{
            gap: "20px",
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "normal",
              width: "71%",
              marginLeft: "0px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexGrow: "1",
                flexDirection: "column",
              }}
            >
              <label
                htmlFor="date"
                style={{
                  cursor: "pointer",
                  color: "var(--black-400, #5A5A5A)",
                  font: "500 14px/18px Mulish, sans-serif ",
                }}
              >
                Дата
              </label>
              <div
                style={{
                  display: "flex",
                  marginTop: "5px",
                  paddingRight: "10px",
                  justifyContent: "space-between",
                  gap: "3px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexGrow: "1",
                    flexBasis: "0%",
                    flexDirection: "column",
                  }}
                >
                  <input
                    id="date"
                    name="date"
                    onChange={(e) => handleDateChange(e)}
                    value={isForm.date}
                    style={{
                      outline: "none",
                      border: "none",
                      color: "var(--black-500, #262626)",
                      font: "500 16px/20px Mulish, sans-serif ",
                    }}
                    type="date"
                  />

                  <div
                    style={{
                      background: "#665CD1",
                      display: "flex",
                      height: "1px",
                      flexDirection: "column",
                    }}
                  />
                </div>
              </div>
              <div style={{ marginTop: "15px" }}>
                <AutocompleteInput id={"A"} />
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "normal",
              width: "29%",
              marginLeft: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexGrow: "1",
                flexDirection: "column",
              }}
            >
              <label
                htmlFor="workA"
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
                name="workA"
                id="workA"
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
              <label
                htmlFor="time"
                style={{
                  color: "var(--black-400, #5A5A5A)",
                  marginTop: "16px",
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                  font: "500 14px/18px Mulish, sans-serif ",
                }}
              >
                Час прибуття
              </label>
              <input
                type="time"
                id="time"
                onChange={(e) => handleTimeChange(e)}
                value={isForm.time}
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
    </form>
  );
}
