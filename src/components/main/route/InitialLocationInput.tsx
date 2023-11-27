"use client ";
import { imageSrc } from "@/data/src";
import "./InitialLocationInput.scss";
import { AutocompleteInput } from "../lib/AutocompleteInput";

export function InitialLocationInput() {
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
          // "@media (max-width: 991px)": {
          //   maxWidth: "100%",
          //   whiteSpace: "initial",
          // },
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
          // "@media (max-width: 991px)": {
          //   maxWidth: "100%",
          // },
        }}
      >
        <div
          style={{
            gap: "20px",
            display: "flex",
            // "@media (max-width: 991px)": {
            //   flexDirection: "column",
            //   alignItems: "stretch",
            //   gap: "0px",
            // },
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "normal",
              width: "71%",
              marginLeft: "0px",
              // "@media (max-width: 991px)": {
              //   width: "100%",
              //   marginLeft: 0,
              // },
            }}
          >
            <div
              style={{
                display: "flex",
                flexGrow: "1",
                flexDirection: "column",
                // "@media (max-width: 991px)": {
                //   marginTop: "40px",
                // },
              }}
            >
              <label
                htmlFor="date"
                style={{
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
                <AutocompleteInput id={"addressA"} />
              </div>
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

                      height: "1px",
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
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "normal",
              width: "29%",
              marginLeft: "20px",
              // "@media (max-width: 991px)": {
              //   width: "100%",
              //   marginLeft: 0,
              // },
            }}
          >
            <div
              style={{
                display: "flex",
                flexGrow: "1",
                flexDirection: "column",
                // "@media (max-width: 991px)": {
                //   marginTop: "40px",
                // },
              }}
            >
              <label
                htmlFor="workA"
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
                name="workA"
                id="workA"
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
              <div
                style={{
                  color: "var(--black-400, #5A5A5A)",
                  marginTop: "16px",
                  whiteSpace: "nowrap",
                  // "@media (max-width: 991px)": {
                  //   whiteSpace: "initial",
                  // },
                  font: "500 14px/18px Mulish, sans-serif ",
                }}
              >
                Час прибуття
              </div>
              <input
                type="time"
                style={{
                  outline: "none",
                  border: "none",
                  color: "var(--black-500, #262626)",
                  marginTop: "5px",
                  font: "500 16px/20px Mulish, sans-serif ",
                }}
              />
              {/* 12:00 */}

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
    </div>
  );
}
