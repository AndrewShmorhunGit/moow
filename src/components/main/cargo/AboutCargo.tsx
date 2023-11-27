"use client";
import React from "react";
import { Input } from "../lib/Input";

export default function AboutCargo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <div
        style={{
          color: "var(--purple-600, #665CD1)",
          alignSelf: "stretch",
          // "@media (max-width: 991px)": {
          //   maxWidth: "100%",
          // },
          margin: "20px -20px 0 0",
          font: "700 19px/24px Mulish, sans-serif ",
        }}
      >
        Про вантаж
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          // "@media (max-width: 991px)": {
          //   maxWidth: "100%",
          //   flexWrap: "wrap",
          // },
          margin: "15px -20px 0 0",
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
          {/* <div
            style={{
              color: "var(--black-400, #5A5A5A)",
              font: "500 14px/18px Mulish, sans-serif ",
            }}
          >
            Вага вантажу (кг)
          </div>
          <div
            style={{
              color: "var(--black-500, #262626)",
              marginTop: "5px",
              font: "500 16px/20px Mulish, sans-serif ",
            }}
          >
            500
          </div> */}
          <Input
            type={"number"}
            id={"weight"}
            label={"Вага вантажу (кг)"}
            placeholder="500"
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
        <div
          style={{
            display: "flex",
            flexGrow: "1",
            flexBasis: "0%",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              color: "#5A5A5A",
              font: "500 14px/18px Mulish, sans-serif ",
            }}
          >
            Габарит вантажу ДШВ (м)
          </div>
          <div
            style={{
              alignItems: "start",
              display: "flex",
              marginTop: "5px",
              gap: "5px",
              // "@media (max-width: 991px)": {
              //   justifyContent: "center",
              // },
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexGrow: "1",
                flexBasis: "0%",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  color: "var(--black-500, #262626)",
                  font: "500 16px/20px Mulish, sans-serif ",
                }}
              >
                500{" "}
              </div>
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
            <div
              style={{
                color: "var(--black-500, #262626)",
                textAlign: "center",
                font: "500 16px/20px Mulish, sans-serif ",
              }}
            >
              х
            </div>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexGrow: "1",
                flexBasis: "0%",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  color: "var(--black-500, #262626)",
                  font: "500 16px/20px Mulish, sans-serif ",
                }}
              >
                500
              </div>
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
            <div
              style={{
                color: "var(--black-500, #262626)",
                textAlign: "center",
                font: "500 16px/20px Mulish, sans-serif ",
              }}
            >
              х
            </div>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexGrow: "1",
                flexBasis: "0%",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  color: "var(--black-500, #262626)",
                  font: "500 16px/20px Mulish, sans-serif ",
                }}
              >
                500{" "}
              </div>
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
      <label
        htmlFor="comment"
        style={{
          color: "var(--black-400, #5A5A5A)",
          alignSelf: "stretch",
          // "@media (max-width: 991px)": {
          //   maxWidth: "100%",
          // },
          margin: "20px -20px 0 0",
          font: "500 14px/18px Mulish, sans-serif ",
        }}
      >
        Коментар до замовлення
      </label>
      <div style={{ position: "relative" }}>
        <textarea
          placeholder="Укажіть інформацію про груз, що перевозите..."
          id="comment"
          style={{
            color: "var(--black-300, #7E7E7E)",
            position: "relative",
            minWidth: "16rem",
            maxHeight: "30rem",
            minHeight: "4rem",
            alignSelf: "stretch",
            borderRadius: "7px",
            border: "2px solid var(--purple-100, #F1F0FF)",
            margin: "5px -20px 0 0",
            padding: "8px",
            font: "500 14px/18px Mulish, sans-serif ",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "1rem",
            bottom: "1rem",
            color: "var(--black-200, #C4C4C4)",
            textAlign: "right",
            marginTop: "10px",
            zIndex: "100",
            font: "500 12px/15px Mulish, sans-serif ",
            // "@media (max-width: 991px)": {
            //   maxWidth: "100%",
            // },
          }}
        >
          0 / 1 000
        </div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          backgroundColor: "var(--black-200, #C4C4C4)",
          display: "flex",
          height: "1px",
          flexDirection: "column",
          // "@media (max-width: 991px)": {
          //   maxWidth: "100%",
          // },
          margin: "20px -20px 0 0",
        }}
      />

      <div
        style={{
          alignSelf: "start",
          display: "flex",
          marginTop: "20px",
          // width: "209px",
          maxWidth: "100%",
          gap: "10px",
        }}
      >
        <div
          style={{
            borderRadius: "4px",
            border: "1px solid var(--black-300, #7E7E7E)",
            display: "flex",
          }}
        >
          <input
            type="checkbox"
            id="expedition"
            style={{
              color: "#665CD1",
              borderRadius: "1.6px",
              backgroundColor: "var(--purple-600, #665CD1)",
              height: "18px",
              width: "18px",
            }}
          />
        </div>
        <label
          htmlFor="expedition"
          style={{
            color: "var(--purple-600, #665CD1)",
            alignSelf: "start",
            flexGrow: "1",
            whiteSpace: "nowrap",
            font: "700 16px/20px Mulish, sans-serif ",
          }}
        >
          Послуга експедитора
        </label>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          backgroundColor: "var(--black-200, #C4C4C4)",
          display: "flex",
          height: "1px",
          flexDirection: "column",
          // "@media (max-width: 991px)": {
          //   maxWidth: "100%",
          // },
          margin: "20px -20px 0 0",
        }}
      />
    </div>
  );
}
