"use client";
import React from "react";
import StarLogo from "../lib/Logo/StarLogo";

export function Footer() {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          justifyContent: "space-between",
          alignSelf: "stretch",
          marginTop: "10px",
          // "@media (max-width: 991px)": {
          //   maxWidth: "100%",
          // },
        }}
      >
        <div
          style={{
            // gap: "20px",
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
              width: "70%",
              marginLeft: "0px",
              // "@media (max-width: 991px)": {
              //   width: "100%",
              //   marginLeft: 0,
              // },
            }}
          >
            <div
              style={{
                flexGrow: "1",
                // "@media (max-width: 991px)": {
                //   maxWidth: "100%",
                //   marginTop: "40px",
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
                    width: "18%",
                    marginLeft: "0px",
                    // "@media (max-width: 991px)": {
                    //   width: "100%",
                    //   marginLeft: 0,
                    // },
                  }}
                >
                  <div
                    style={{
                      alignItems: "start",
                      display: "flex",
                      gap: "5px",
                      // "@media (max-width: 991px)": {
                      //   marginTop: "40px",
                      // },
                    }}
                  >
                    {/* <StarLogo /> */}
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
                          whiteSpace: "nowrap",
                          // "@media (max-width: 991px)": {
                          //   whiteSpace: "initial",
                          // },
                          font: "700 14px/18px Mulish, sans-serif ",
                        }}
                      >
                        Сторінки
                      </div>
                      <div
                        style={{
                          color: "var(--black-400, #5A5A5A)",
                          marginTop: "10px",
                          whiteSpace: "nowrap",
                          // "@media (max-width: 991px)": {
                          //   whiteSpace: "initial",
                          // },
                          font: "500 14px/18px Mulish, sans-serif ",
                        }}
                      >
                        Про нас
                      </div>
                      <div
                        style={{
                          color: "var(--black-400, #5A5A5A)",
                          marginTop: "10px",
                          whiteSpace: "nowrap",
                          // "@media (max-width: 991px)": {
                          //   whiteSpace: "initial",
                          // },
                          font: "500 14px/18px Mulish, sans-serif ",
                        }}
                      >
                        Про сервіс
                      </div>
                      <div
                        style={{
                          color: "var(--black-400, #5A5A5A)",
                          marginTop: "10px",
                          whiteSpace: "nowrap",
                          // "@media (max-width: 991px)": {
                          //   whiteSpace: "initial",
                          // },
                          font: "500 14px/18px Mulish, sans-serif ",
                        }}
                      >
                        FAQ
                      </div>
                      <div
                        style={{
                          color: "var(--black-400, #5A5A5A)",
                          marginTop: "10px",
                          whiteSpace: "nowrap",
                          // "@media (max-width: 991px)": {
                          //   whiteSpace: "initial",
                          // },
                          font: "500 14px/18px Mulish, sans-serif ",
                        }}
                      >
                        Команда
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    lineHeight: "normal",
                    width: "36%",
                    marginLeft: "20px",
                    // "@media (max-width: 991px)": {
                    //   width: "100%",
                    //   marginLeft: 0,
                    // },
                  }}
                >
                  <div
                    style={{
                      alignItems: "start",
                      display: "flex",
                      flexGrow: "1",
                      justifyContent: "space-between",
                      gap: "5px",
                      // "@media (max-width: 991px)": {
                      //   marginTop: "40px",
                      // },
                    }}
                  >
                    {/* <StarLogo /> */}
                    <div
                      style={{
                        alignItems: "center",
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
                          alignSelf: "stretch",
                          whiteSpace: "nowrap",
                          // "@media (max-width: 991px)": {
                          //   whiteSpace: "initial",
                          // },
                          font: "700 14px/18px Mulish, sans-serif ",
                        }}
                      >
                        Контакти
                      </div>
                      <div
                        style={{
                          alignSelf: "start",
                          display: "flex",
                          // marginTop: "10px",
                          // justifyContent: "space-between",
                          gap: "10px",
                        }}
                      >
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cba29c58-d558-43b5-affd-9fbb05c7c23d?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
                          style={{
                            aspectRatio: "1",
                            objectFit: "contain",
                            objectPosition: "center",
                            width: "20px",
                            justifyContent: "center",
                            alignItems: "center",
                            overflow: "hidden",
                            maxWidth: "100%",
                          }}
                        />

                        <p
                          style={{
                            color: "var(--black-400, #5A5A5A)",
                            display: "flex",
                            maxWidth: "12rem",
                            font: "500 14px/18px Mulish, sans-serif ",
                          }}
                        >
                          Київ, <br />
                          проспект Глушкова Академіка,
                          <br /> будинок 9г, офіс 238
                        </p>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          display: "flex",
                          marginTop: "10px",
                          justifyContent: "space-between",
                          gap: "10px",
                        }}
                      >
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a09f94f-818d-4bad-af5d-0ae196cc5282?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
                          style={{
                            aspectRatio: "1",
                            objectFit: "contain",
                            objectPosition: "center",
                            width: "20px",
                            justifyContent: "center",
                            alignItems: "center",
                            overflow: "hidden",
                            maxWidth: "100%",
                          }}
                        />
                        <div
                          style={{
                            color: "var(--black-400, #5A5A5A)",
                            flexGrow: "1",
                            whiteSpace: "nowrap",
                            // "@media (max-width: 991px)": {
                            //   whiteSpace: "initial",
                            // },
                            font: "500 14px/18px Mulish, sans-serif ",
                          }}
                        >
                          moow.ltd@gmail.com
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    lineHeight: "normal",
                    // width: "27%",
                    marginLeft: "20px",
                    // "@media (max-width: 991px)": {
                    //   width: "100%",
                    //   marginLeft: 0,
                    // },
                  }}
                >
                  <div
                    style={{
                      alignItems: "start",
                      display: "flex",
                      gap: "5px",
                      // "@media (max-width: 991px)": {
                      //   marginTop: "40px",
                      // },
                    }}
                  >
                    {/* <StarLogo /> */}
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
                          whiteSpace: "nowrap",
                          // "@media (max-width: 991px)": {
                          //   whiteSpace: "initial",
                          // },
                          font: "700 14px/18px Mulish, sans-serif ",
                        }}
                      >
                        Соціальні мережі
                      </div>
                      <div
                        style={{
                          display: "flex",
                          marginTop: "10px",
                          paddingRight: "43px",
                          gap: "10px",
                          // "@media (max-width: 991px)": {
                          //   paddingRight: "20px",
                          // },
                        }}
                      >
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/165af61d-5534-4887-ab09-cf061ed11bc1?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
                          style={{
                            aspectRatio: "1",
                            objectFit: "contain",
                            objectPosition: "center",
                            width: "20px",
                            justifyContent: "center",
                            alignItems: "center",
                            overflow: "hidden",
                            maxWidth: "100%",
                          }}
                        />
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aaf4bded-f169-4bd7-ae29-23dd5cc75f18?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaf4bded-f169-4bd7-ae29-23dd5cc75f18?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaf4bded-f169-4bd7-ae29-23dd5cc75f18?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaf4bded-f169-4bd7-ae29-23dd5cc75f18?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaf4bded-f169-4bd7-ae29-23dd5cc75f18?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaf4bded-f169-4bd7-ae29-23dd5cc75f18?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaf4bded-f169-4bd7-ae29-23dd5cc75f18?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaf4bded-f169-4bd7-ae29-23dd5cc75f18?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
                          style={{
                            aspectRatio: "1",
                            objectFit: "contain",
                            objectPosition: "center",
                            width: "20px",
                            justifyContent: "center",
                            alignItems: "center",
                            overflow: "hidden",
                            maxWidth: "100%",
                          }}
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/31b3e34c-ee2c-4d59-8dad-81f48580472b?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
                          style={{
                            aspectRatio: "1",
                            objectFit: "contain",
                            objectPosition: "center",
                            width: "20px",
                            justifyContent: "center",
                            alignItems: "center",
                            overflow: "hidden",
                            maxWidth: "100%",
                          }}
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c927316-2f40-4f9a-b397-09dc83bcaaec?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
                          style={{
                            aspectRatio: "1",
                            objectFit: "contain",
                            objectPosition: "center",
                            width: "20px",
                            justifyContent: "center",
                            alignItems: "center",
                            overflow: "hidden",
                            maxWidth: "100%",
                          }}
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d15a6e7-bc68-4d5f-bece-1f93079be7b7?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
                          style={{
                            aspectRatio: "1",
                            objectFit: "contain",
                            objectPosition: "center",
                            width: "20px",
                            justifyContent: "center",
                            alignItems: "center",
                            overflow: "hidden",
                            maxWidth: "100%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    lineHeight: "normal",
                    width: "19%",
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
                      gap: "5px",
                      // "@media (max-width: 991px)": {
                      //   marginTop: "40px",
                      // },
                    }}
                  >
                    {/* <StarLogo /> */}
                    {/* <div
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
                          whiteSpace: "nowrap",
                          // "@media (max-width: 991px)": {
                          //   whiteSpace: "initial",
                          // },
                          font: "700 14px/18px Mulish, sans-serif ",
                        }}
                      >
                        Документи
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "normal",
              width: "30%",
              marginLeft: "20px",
              // "@media (max-width: 991px)": {
              //   width: "100%",
              //   marginLeft: 0,
              // },
            }}
          >
            <div
              style={{
                justifyContent: "center",
                display: "flex",
                paddingBottom: "15px",
                flexDirection: "column",
                // "@media (max-width: 991px)": {
                //   marginTop: "40px",
                // },
              }}
            >
              {/* <div
                style={{
                  color: "var(--black-500, #262626)",
                  whiteSpace: "nowrap",
                  // "@media (max-width: 991px)": {
                  //   whiteSpace: "initial",
                  // },
                  font: "700 14px/18px Mulish, sans-serif ",
                }}
              >
                Встанови безкоштовний додаток на смартфон
              </div> */}
              <div
                style={{
                  alignSelf: "center",
                  display: "flex",
                  marginTop: "6px",
                  width: "298px",
                  maxWidth: "100%",
                  justifyContent: "space-between",
                  gap: "20px",
                }}
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5658b404-8fb8-41ff-916c-06cc8959175a?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
                  style={{
                    aspectRatio: "3.38",
                    objectFit: "contain",
                    objectPosition: "center",
                    width: "100%",
                    overflow: "hidden",
                    flex: "1",
                  }}
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2d155e6-611e-4e4e-b474-3d79cd25913c?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
                  style={{
                    aspectRatio: "2.95",
                    objectFit: "contain",
                    objectPosition: "center",
                    width: "100%",
                    overflow: "hidden",
                    flex: "1",
                  }}
                />
              </div>
              <div
                style={{
                  alignItems: "center",
                  alignSelf: "center",
                  display: "flex",
                  marginTop: "21px",
                  width: "202px",
                  maxWidth: "100%",
                  gap: "15px",
                  // "@media (max-width: 991px)": {
                  //   justifyContent: "center",
                  // },
                }}
              >
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/84775f7f-b2c8-4df8-9708-8b1f67b02c75?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/84775f7f-b2c8-4df8-9708-8b1f67b02c75?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/84775f7f-b2c8-4df8-9708-8b1f67b02c75?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/84775f7f-b2c8-4df8-9708-8b1f67b02c75?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/84775f7f-b2c8-4df8-9708-8b1f67b02c75?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/84775f7f-b2c8-4df8-9708-8b1f67b02c75?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/84775f7f-b2c8-4df8-9708-8b1f67b02c75?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/84775f7f-b2c8-4df8-9708-8b1f67b02c75?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
                  style={{
                    aspectRatio: "1.56",
                    objectFit: "contain",
                    objectPosition: "center",
                    width: "50px",
                    overflow: "hidden",
                    alignSelf: "stretch",
                    maxWidth: "100%",
                  }}
                />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5946879b-d591-416a-a3a3-f6e4ee57d2cb?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5946879b-d591-416a-a3a3-f6e4ee57d2cb?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5946879b-d591-416a-a3a3-f6e4ee57d2cb?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5946879b-d591-416a-a3a3-f6e4ee57d2cb?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5946879b-d591-416a-a3a3-f6e4ee57d2cb?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5946879b-d591-416a-a3a3-f6e4ee57d2cb?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5946879b-d591-416a-a3a3-f6e4ee57d2cb?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5946879b-d591-416a-a3a3-f6e4ee57d2cb?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
                  style={{
                    aspectRatio: "1.67",
                    objectFit: "contain",
                    objectPosition: "center",
                    width: "50px",
                    overflow: "hidden",
                    alignSelf: "stretch",
                    maxWidth: "100%",
                  }}
                />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a91689a4-6bf3-487c-8bd4-c99c91b1c43b?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91689a4-6bf3-487c-8bd4-c99c91b1c43b?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91689a4-6bf3-487c-8bd4-c99c91b1c43b?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91689a4-6bf3-487c-8bd4-c99c91b1c43b?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91689a4-6bf3-487c-8bd4-c99c91b1c43b?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91689a4-6bf3-487c-8bd4-c99c91b1c43b?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91689a4-6bf3-487c-8bd4-c99c91b1c43b?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91689a4-6bf3-487c-8bd4-c99c91b1c43b?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
                  style={{
                    aspectRatio: "4.8",
                    objectFit: "contain",
                    objectPosition: "center",
                    width: "72px",
                    overflow: "hidden",
                    maxWidth: "100%",
                    margin: "auto 0",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          color: "var(--black-300, #7E7E7E)",
          textAlign: "center",
          marginTop: "20px",
          // "@media (max-width: 991px)": {
          //   maxWidth: "100%",
          // },
          font: "700 11px/14px Mulish, sans-serif ",
        }}
      >
        ©ТОВ «Діджітал інвест адвайзор», 2021-2023
      </div>
    </div>
  );
}
