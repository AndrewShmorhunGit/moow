"use client";
import "./AutocompleteInput.scss";
import { setOrder } from "@/app/redux/features/order/order.slice";
import { Spinner } from "@/components/lib/spinner/Spinner";
import { imageSrc } from "@/data/src";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import { Coords } from "@/types";
import { getLatitudeValue } from "@/utils/google";
import React, { useEffect, useState } from "react";

import PlacesAutocomplete, {
  geocodeByAddress,
  // geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";

export function AutocompleteInput({ id: locationId }: { id: string }) {
  const dispatch = useAppDispatch();
  const initialState = useAppSelector((state) => state.order);
  const { orderLocations } = initialState;
  const currentLocation = orderLocations.find(
    (location) => location.id === locationId
  );

  const [isAddress, setAddress] = useState(currentLocation?.address || "");
  const [isCoords, setCoords] = useState<Coords>({ lat: 0, lng: 0 });

  useEffect(() => {
    const latitude = getLatitudeValue(isCoords.lat);
    const longitude = getLatitudeValue(isCoords.lng);

    if (latitude && longitude !== 0 && isAddress) {
      const newOrderLocations = orderLocations.map((location) => {
        return location.id === locationId
          ? { ...location, address: isAddress, locationCoords: isCoords }
          : location;
      });
      dispatch(
        setOrder({
          ...initialState,
          orderLocations: newOrderLocations,
        })
      );
    }
  }, [isAddress, isCoords]);

  const handleSelect = async (value: string) => {
    const results = await geocodeByAddress(value);
    const coords = await getLatLng(results[0]);

    setAddress(value);
    setCoords({ lat: coords.lat, lng: coords.lng });
  };

  return (
    <PlacesAutocomplete
      value={isAddress}
      onChange={setAddress}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <label
            htmlFor={`location${locationId}`}
            className="autocomplete-label"
          >
            Адреса
            <div className="autocomplete-wrapper">
              <div className="autocomplete-input-container">
                <input
                  {...getInputProps({
                    placeholder: "Введіть адресу ...",
                    id: `location${locationId}`,
                  })}
                  className="autocomplete-input"
                />
                <div className="underline" />
              </div>
              <img loading="lazy" srcSet={imageSrc} className="icon" />
            </div>
          </label>
          <div className="autocomplete-dropdown-container">
            {loading && (
              <div
                style={{
                  transform: "translate(13rem,-12px) scale(0.5)",
                }}
              >
                <Spinner />
              </div>
            )}
            {suggestions.map((suggestion, index) => {
              const className = suggestion.active
                ? "suggestion-item--active"
                : "suggestion-item";
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: "#fafafa", cursor: "pointer" }
                : { backgroundColor: "#ffffff", cursor: "pointer" };
              return (
                <div key={index + "" + className}>
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                      key: index + "" + className,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}
