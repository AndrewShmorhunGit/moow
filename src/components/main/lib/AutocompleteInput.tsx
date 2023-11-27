"use client";
import { setOrder } from "@/app/redux/features/order/order.slice";
import { imageSrc } from "@/data/src";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import { Coords, OrderLocation } from "@/types";
import { getLatitudeValue, getLongitude } from "@/utils/google";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

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
      dispatch(setOrder({ orderLocations: newOrderLocations }));
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
            style={{
              cursor: "pointer",
              color: "var(--black-400, #5A5A5A)",
              marginTop: "15px",
              font: "500 14px/18px Mulish, sans-serif ",
            }}
          >
            Адреса
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
                  {...getInputProps({
                    placeholder: "Введіть адресу ...",
                    id: `location${locationId}`,
                  })}
                  style={{
                    outline: "none",
                    border: "none",
                    color: "var(--black-500, #262626)",
                    font: "500 16px/20px Mulish, sans-serif ",
                  }}
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
              <img
                loading="lazy"
                srcSet={imageSrc}
                style={{
                  transform: "scale(0.9)",
                  aspectRatio: "1",
                  objectFit: "contain",
                  objectPosition: "center",
                  width: "25px",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              />
            </div>
          </label>
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion, index) => {
              const className = suggestion.active
                ? "suggestion-item--active"
                : "suggestion-item";
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: "#fafafa", cursor: "pointer" }
                : { backgroundColor: "#ffffff", cursor: "pointer" };
              return (
                <div key={index}>
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
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
