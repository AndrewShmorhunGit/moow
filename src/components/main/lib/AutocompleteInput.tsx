"use client";
import { imageSrc } from "@/data/src";
import { Coords, OrderLocation } from "@/types";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";

import PlacesAutocomplete, {
  geocodeByAddress,
  // geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";

export function AutocompleteInput({ id }: { id: string }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isAddress, setAddress] = useState("");

  const [isCoords, setCoords] = useState<Coords>({ lat: null, lng: null });

  const handleSelect = async (value: string) => {
    const results = await geocodeByAddress(value);
    const coords = await getLatLng(results[0]);

    setAddress(value);
    setCoords({ lat: coords.lat, lng: coords.lng });
    console.log(isCoords, isAddress);
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
            htmlFor={`location${id}`}
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
                    id: `location${id}`,
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
            {suggestions.map((suggestion) => {
              const className = suggestion.active
                ? "suggestion-item--active"
                : "suggestion-item";
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: "#fafafa", cursor: "pointer" }
                : { backgroundColor: "#ffffff", cursor: "pointer" };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}
