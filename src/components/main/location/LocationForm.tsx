"use client";
import "./LocationForm.scss";
import { useEffect, useState } from "react";
import { AutocompleteInput } from "../lib/inputs/AutocompleteInput";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import { locationsIdList } from "@/data/order";
import { setOrder } from "@/app/redux/features/order/order.slice";
import { Input } from "../lib/inputs/Input";

export function LocationForm({ index: formIndex }: { index: number }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const locationName = locationsIdList[formIndex];
  const dispatch = useAppDispatch();

  const initialState = useAppSelector((state) => state.order);
  const { orderLocations } = initialState;
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
        ...initialState,
        orderLocations: newOrderLocations,
      })
    );
  }, [isForm]);

  if (isClient)
    return (
      <div className="location-form-container">
        <div className="location-title">{`Точка ${locationName}`}</div>
        <div className="location-fields">
          <div className="input-group">
            <AutocompleteInput id={locationsIdList[formIndex]} />
          </div>
          <div className="additional-fields">
            <div className="input-field">
              <Input
                type="number"
                label="Час роботи (год)"
                id={`work${locationsIdList[formIndex]}`}
                onInputChange={handleWorkChange}
                value={isForm.location.workingHours}
              />
              <div className="underline" />
            </div>
          </div>
        </div>
      </div>
    );
}
