"use client ";
import "./InitialLocationForm.scss";
import { setOrder } from "@/app/redux/features/order/order.slice";
import "./InitialLocationForm.scss";
import { AutocompleteInput } from "../lib/inputs/AutocompleteInput";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import { useEffect, useState } from "react";
import { changeLocationInOrderLocationsList } from "@/utils/functions";
import { DateInput } from "../lib/inputs/DateInput";
import { Input } from "../lib/inputs/Input";
import { locationsIdList } from "@/data/order";

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
        orderDate: initialState.orderDate || isForm.date,
        orderTime: initialState.orderTime || isForm.time,
        orderLocations: changeLocationInOrderLocationsList(
          orderLocations,
          0,
          isForm.location
        ),
      })
    );
  }, [isForm]);

  return (
    <div className="initial-location-form">
      <div className="location-title">Точка А</div>
      <div>
        <div className="location-details">
          <div className="input-section input-section--wide">
            <div>
              <DateInput
                label="Дата"
                date={isForm.date}
                onDateChange={handleDateChange}
              />

              <div style={{ marginTop: "15px" }}>
                <AutocompleteInput id={"A"} />
              </div>
            </div>
          </div>
          <div className="input-section input-section--narrow">
            <div
              style={{
                display: "flex",
                flexGrow: "1",
                flexDirection: "column",
              }}
            >
              <Input
                type="number"
                label="Час роботи (год)"
                id={`work${locationsIdList[0]}`}
                onInputChange={handleWorkChange}
                value={isForm.location.workingHours}
              />
              <div className="underline" />

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

              <div className="underline" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
