"use client";
import { Input } from "../lib/inputs/Input";

export function ClientContacts() {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          color: "var(--purple-600, #665CD1)",
          alignSelf: "stretch",
          margin: "20px 0px 0 0",
          font: "700 19px/24px Mulish, sans-serif ",
        }}
      >
        Контактні дані
      </div>
      <div
        style={{
          alignSelf: "stretch",
          margin: "15px -20px 0 0",
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
              flexGrow: "1",
              flexDirection: "column",
              // "@media (max-width: 991px)": {
              //   marginTop: "40px",
              // },
            }}
          >
            <Input
              type={"name"}
              id={"clientLastName"}
              placeholder="Валунов"
              label={"Прізвище"}
            />

            <div
              style={{
                borderRadius: "10px",
                marginBottom: "20px",
                background: "#665CD1",
                display: "flex",
                height: "1px",
                flexDirection: "column",
              }}
            />

            <Input
              type={"name"}
              id={"clientName"}
              placeholder="Валентин"
              label={"Ім’я"}
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
              flexDirection: "column",
              lineHeight: "normal",
              width: "50%",
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
                flexDirection: "column",
                // "@media (max-width: 991px)": {
                //   marginTop: "40px",
                // },
              }}
            >
              <Input
                type={"phone"}
                id={"clientPhone"}
                placeholder="+38 (097) 333 3333"
                label={"Номер телефону"}
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
