import dynamic from "next/dynamic";
import React from "react";
import { ConfirmOrderList } from "../order/ConfirmOrderList";
const MapWithNoSSR = dynamic(() => import("@/components/map/Map"), {
  ssr: false,
});
export default function InfoBlock() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        lineHeight: "normal",
        marginRight: "20px",

        // width: "80%",
        // marginLeft: "20px",
        // "@media (max-width: 991px)": {
        //   width: "100%",
        //   marginLeft: 0,
        // },
      }}
    >
      <div
        style={{
          borderRadius: "10px",
          backgroundColor: "var(--purple-100, #F1F0FF)",
          display: "flex",
          flexDirection: "column",
          // "@media (max-width: 991px)": {
          //   maxWidth: "100%",
          //   marginTop: "40px",
          // },
          // margin: "0 auto",
          padding: "10px",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            borderRadius: "8px",
            boxShadow: "0px 2px 9px 0px rgba(159, 159, 159, 0.25)",
            backgroundColor: "var(--bg, #FEFEFE)",
            paddingRight: "5px",
            marginBottom: "10px",
            // "@media (max-width: 991px)": {
            //   maxWidth: "100%",
            // },
          }}
        >
          <div
            style={{
              gap: "20px",
              display: "flex",
              height: "6.4rem",
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
                marginLeft: "0px",
                // "@media (max-width: 991px)": {
                //   width: "100%",
                //   marginLeft: 0,
                // },
              }}
            >
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7a9eb049-d24b-4ddf-81ed-d029f375fc94?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a9eb049-d24b-4ddf-81ed-d029f375fc94?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a9eb049-d24b-4ddf-81ed-d029f375fc94?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a9eb049-d24b-4ddf-81ed-d029f375fc94?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a9eb049-d24b-4ddf-81ed-d029f375fc94?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a9eb049-d24b-4ddf-81ed-d029f375fc94?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a9eb049-d24b-4ddf-81ed-d029f375fc94?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a9eb049-d24b-4ddf-81ed-d029f375fc94?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
                style={{
                  aspectRatio: "1.82",
                  objectFit: "contain",
                  objectPosition: "center",
                  width: "200px",
                  overflow: "hidden",
                  maxWidth: "100%",
                  flexGrow: "1",
                  // "@media (max-width: 991px)": {
                  //   marginTop: "10px",
                  // },
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "normal",
                width: "57%",
                marginLeft: "20px",
                // "@media (max-width: 991px)": {
                //   width: "100%",
                //   marginLeft: 0,
                // },
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  paddingBottom: "13px",
                  gap: "15px",
                  // "@media (max-width: 991px)": {
                  //   marginTop: "15px",
                  // },
                  margin: "auto 0",
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
                  <div
                    style={{
                      color: "var(--black-500, #262626)",
                      font: "500 16px/20px Mulish, sans-serif ",
                    }}
                  >
                    Склад 1Склад 1Склад
                    <br />
                    Склад 1Склад 1Склад
                  </div>
                  <div
                    style={{
                      color: "#665CD1",
                      marginTop: "5px",
                      whiteSpace: "nowrap",
                      // "@media (max-width: 991px)": {
                      //   whiteSpace: "initial",
                      // },
                      font: "700 19px/24px Mulish, sans-serif ",
                    }}
                  >
                    300 грн/кв.м.
                  </div>
                  <div
                    style={{
                      color: "var(--50-shades-of-moow-400, #5A5A5A)",
                      whiteSpace: "nowrap",
                      // "@media (max-width: 991px)": {
                      //   whiteSpace: "initial",
                      // },
                      font: "300 14px/18px Mulish, sans-serif ",
                    }}
                  >
                    min 200 грн/кг
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "start",
                    display: "flex",
                    flexBasis: "0%",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      color: "var(--black-400, #5A5A5A)",
                      textAlign: "right",
                      whiteSpace: "nowrap",
                      // "@media (max-width: 991px)": {
                      //   whiteSpace: "initial",
                      // },
                      font: "300 14px/18px Mulish, sans-serif ",
                    }}
                  >
                    21.06.2022
                  </div>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "10px",
                      justifyContent: "space-between",
                      gap: "3px",
                    }}
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5267643f-94de-411c-8109-4b6c6f965321?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
                      style={{
                        aspectRatio: "1",
                        objectFit: "contain",
                        objectPosition: "center",
                        width: "25px",
                        overflow: "hidden",
                        maxWidth: "100%",
                      }}
                    />
                    <div
                      style={{
                        color: "var(--black-400, #5A5A5A)",
                        textAlign: "right",
                        alignSelf: "center",
                        flexGrow: "1",
                        whiteSpace: "nowrap",
                        // "@media (max-width: 991px)": {
                        //   whiteSpace: "initial",
                        // },
                        margin: "auto 0",
                        font: "500 14px/18px Mulish, sans-serif ",
                      }}
                    >
                      4.8
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "10px",
                      justifyContent: "space-between",
                      gap: "5px",
                    }}
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/225a2b9f-ccd8-4df2-b722-f2aa20263f73?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
                      style={{
                        aspectRatio: "1",
                        objectFit: "contain",
                        objectPosition: "center",
                        width: "16px",
                        overflow: "hidden",
                        maxWidth: "100%",
                      }}
                    />
                    <div
                      style={{
                        color: "var(--50-shades-of-moow-400, #5A5A5A)",
                        flexGrow: "1",
                        whiteSpace: "nowrap",
                        // "@media (max-width: 991px)": {
                        //   whiteSpace: "initial",
                        // },
                        font: "300 14px/18px Mulish, sans-serif ",
                      }}
                    >
                      12 тис.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MapWithNoSSR />
        <ConfirmOrderList />
      </div>
    </div>
  );
}
