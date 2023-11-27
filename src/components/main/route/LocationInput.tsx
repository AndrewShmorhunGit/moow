"use client";

import { imageSrc } from "@/data/src";
import { AutocompleteInput } from "../lib/AutocompleteInput";

export function LocationInput() {
  return (
    <div
      style={{
        justifyContent: "space-between",
        borderRadius: "10px",
        border: "1px solid var(--black-200, #C4C4C4)",
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        // "@media (max-width: 991px)": {
        //   maxWidth: "100%",
        // },
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
          // "@media (max-width: 991px)": {
          //   maxWidth: "100%",
          //   whiteSpace: "initial",
          // },
        }}
      >
        Точка B
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <div style={{ width: "71%" }}>
          {/* <label
            htmlFor="address"
            style={{
              color: "var(--black-400, #5A5A5A)",
              marginTop: "15px",
              font: "500 14px/18px Mulish, sans-serif ",
            }}
          >
            Адреса
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
                id="address"
                type="address"
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
          </div> */}
          <AutocompleteInput id={"addressB"} />
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
              htmlFor="work"
              style={{
                color: "var(--black-400, #5A5A5A)",
                whiteSpace: "nowrap",
                // "@media (max-width: 991px)": {
                //   whiteSpace: "initial",
                // },
                font: "500 14px/18px Mulish, sans-serif ",
              }}
            >
              Час роботи (год)
            </label>
            <input
              type="number"
              name="work"
              id="work"
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
