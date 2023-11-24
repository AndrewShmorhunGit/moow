import * as React from "react";

export function MainComponent() {
  return (
    <div
      style={{
        borderRadius: "9.333px",
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          justifyContent: "center",
          backgroundColor: "var(--bg, #FEFEFE)",
          display: "flex",
          width: "100%",
          flexDirection: "column",
          // "@media (max-width: 991px)": {
          //   maxWidth: "100%",
          // },
          padding: "15px 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "20px",
            // "@media (max-width: 991px)": {
            //   maxWidth: "100%",
            //   flexWrap: "wrap",
            //   justifyContent: "center",
            // },
            margin: "0 10px",
          }}
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6df902d8-3a40-4d97-afab-79afb980aa8b?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
            style={{
              aspectRatio: "4.85",
              objectFit: "contain",
              objectPosition: "center",
              width: "126px",
              overflow: "hidden",
              alignSelf: "center",
              maxWidth: "100%",
              margin: "auto 0",
            }}
          />
          <div
            style={{
              color: "var(--purple-600, #665CD1)",
              textAlign: "center",
              whiteSpace: "nowrap",
              // "@media (max-width: 991px)": {
              //   whiteSpace: "initial",
              // },
              justifyContent: "center",
              borderRadius: "35px",
              boxShadow: "0px 5px 6px 0px rgba(45, 33, 54, 0.10)",
              backgroundColor: "var(--purple-100, #F1F0FF)",
              padding: "10px 15px",
              font: "700 16px/20px Mulish, sans-serif ",
            }}
          >
            Категорії
          </div>
          <div
            style={{
              justifyContent: "flex-end",
              alignItems: "end",
              borderRadius: "6px",
              border: "1.5px solid var(--black-200, #C4C4C4)",
              alignSelf: "center",
              display: "flex",
              flexGrow: "1",
              flexBasis: "0%",
              flexDirection: "column",
              // "@media (max-width: 991px)": {
              //   maxWidth: "100%",
              // },
              margin: "auto 0",
              padding: "4px 20px",
            }}
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fa2bd45-ec42-432c-9c12-30c569f43e0f?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
              style={{
                aspectRatio: "1",
                objectFit: "contain",
                objectPosition: "center",
                width: "25px",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                marginRight: "-10px",
                maxWidth: "100%",
              }}
            />
          </div>
          <div
            style={{
              color: "var(--black-100, #EBEBEB)",
              textAlign: "center",
              whiteSpace: "nowrap",
              // "@media (max-width: 991px)": {
              //   whiteSpace: "initial",
              // },
              justifyContent: "center",
              borderRadius: "35px",
              boxShadow: "0px 5px 8px 0px rgba(77, 76, 76, 0.40)",
              backgroundColor: "var(--black-600, #171717)",
              padding: "10px 15px",
              font: "700 16px/20px Mulish, sans-serif ",
            }}
          >
            Створити оголошення
          </div>
          <div
            style={{
              alignSelf: "center",
              display: "flex",
              gap: "20px",
              margin: "auto 0",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "20px",
                // "@media (max-width: 991px)": {
                //   justifyContent: "center",
                // },
              }}
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9b6569e-f1a3-42af-b31a-2fc82c1f0d6c?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
                style={{
                  aspectRatio: "1",
                  objectFit: "contain",
                  objectPosition: "center",
                  width: "25px",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  maxWidth: "100%",
                }}
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/806b8139-f63a-4067-93e0-dade5c2a4f2e?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
                style={{
                  aspectRatio: "1",
                  objectFit: "contain",
                  objectPosition: "center",
                  width: "25px",
                  overflow: "hidden",
                  maxWidth: "100%",
                }}
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7c165f0-49b1-4b77-9ef3-53a05bb5d343?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
                style={{
                  aspectRatio: "1",
                  objectFit: "contain",
                  objectPosition: "center",
                  width: "25px",
                  overflow: "hidden",
                  maxWidth: "100%",
                }}
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/438bad41-8d03-4bd8-8245-76efa0217b9f?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
                style={{
                  aspectRatio: "1",
                  objectFit: "contain",
                  objectPosition: "center",
                  width: "25px",
                  overflow: "hidden",
                  maxWidth: "100%",
                }}
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7f52f9a-bfc5-4166-80aa-1aa1636699cc?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
                style={{
                  aspectRatio: "1",
                  objectFit: "contain",
                  objectPosition: "center",
                  width: "25px",
                  overflow: "hidden",
                  maxWidth: "100%",
                }}
              />
            </div>
            <div
              style={{
                justifyContent: "center",
                alignSelf: "center",
                display: "flex",
                gap: "0px",
                margin: "auto 0",
              }}
            >
              <div
                style={{
                  color: "var(--black-600, #171717)",
                  font: "700 16px/20px Mulish, sans-serif ",
                }}
              >
                УКР
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7efda4a9-bcfd-4f91-b77b-02182eb45755?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
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
          color: "#000",
          textAlign: "center",
          alignSelf: "center",
          marginTop: "15px",
          whiteSpace: "nowrap",
          // "@media (max-width: 991px)": {
          //   whiteSpace: "initial",
          // },
          font: "700 24px/30px Mulish, sans-serif ",
        }}
      >
        Замовити{" "}
      </div>
      <div
        style={{
          justifyContent: "space-between",
          alignSelf: "center",
          marginTop: "15px",
          width: "100%",
          maxWidth: "1180px",
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
              width: "56%",
              marginLeft: "0px",
              // "@media (max-width: 991px)": {
              //   width: "100%",
              //   marginLeft: 0,
              // },
            }}
          >
            <div
              style={{
                alignItems: "flex-start",
                display: "flex",
                flexGrow: "1",
                flexDirection: "column",
                // "@media (max-width: 991px)": {
                //   maxWidth: "100%",
                //   marginTop: "40px",
                // },
                padding: "0 20px",
              }}
            >
              <div
                style={{
                  color: "var(--purple-600, #665CD1)",
                  alignSelf: "stretch",
                  marginRight: "-20px",
                  // "@media (max-width: 991px)": {
                  //   maxWidth: "100%",
                  // },
                  font: "700 19px/24px Mulish, sans-serif ",
                }}
              >
                Маршрут
              </div>
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
                        <div
                          style={{
                            color: "var(--black-400, #5A5A5A)",
                            font: "500 14px/18px Mulish, sans-serif ",
                          }}
                        >
                          Дата
                        </div>
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
                            <div
                              style={{
                                color: "var(--black-500, #262626)",
                                font: "500 16px/20px Mulish, sans-serif ",
                              }}
                            >
                              25.10.22
                            </div>
                            <div
                              style={{
                                borderRadius: "10px",
                                border: "2px solid #665CD1",
                                display: "flex",
                                height: "1px",
                                flexDirection: "column",
                              }}
                            />
                          </div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a067ce58-ba4f-41ac-9a07-6fb5823d1acd?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
                            style={{
                              aspectRatio: "1",
                              objectFit: "contain",
                              objectPosition: "center",
                              width: "25px",
                              justifyContent: "center",
                              alignItems: "center",
                              overflow: "hidden",
                              maxWidth: "100%",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            color: "var(--black-400, #5A5A5A)",
                            marginTop: "15px",
                            font: "500 14px/18px Mulish, sans-serif ",
                          }}
                        >
                          Адреса
                        </div>
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
                            <div
                              style={{
                                color: "var(--black-500, #262626)",
                                font: "500 16px/20px Mulish, sans-serif ",
                              }}
                            >
                              Україна
                            </div>
                            <div
                              style={{
                                borderRadius: "10px",
                                border: "2px solid #665CD1",
                                display: "flex",
                                height: "1px",
                                flexDirection: "column",
                              }}
                            />
                          </div>
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/af9e15b1-49ec-4b59-9bd0-3bb7e6fdd178?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/af9e15b1-49ec-4b59-9bd0-3bb7e6fdd178?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/af9e15b1-49ec-4b59-9bd0-3bb7e6fdd178?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/af9e15b1-49ec-4b59-9bd0-3bb7e6fdd178?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/af9e15b1-49ec-4b59-9bd0-3bb7e6fdd178?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/af9e15b1-49ec-4b59-9bd0-3bb7e6fdd178?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/af9e15b1-49ec-4b59-9bd0-3bb7e6fdd178?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/af9e15b1-49ec-4b59-9bd0-3bb7e6fdd178?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
                            style={{
                              aspectRatio: "1",
                              objectFit: "contain",
                              objectPosition: "center",
                              width: "25px",
                              justifyContent: "center",
                              alignItems: "center",
                              overflow: "hidden",
                              maxWidth: "100%",
                            }}
                          />
                        </div>
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
                        <div
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
                        </div>
                        <div
                          style={{
                            color: "var(--black-500, #262626)",
                            marginTop: "5px",
                            font: "500 16px/20px Mulish, sans-serif ",
                          }}
                        >
                          2
                        </div>
                        <div
                          style={{
                            borderRadius: "10px",
                            border: "2px solid #665CD1",
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
                        <div
                          style={{
                            color: "var(--black-500, #262626)",
                            marginTop: "5px",
                            font: "500 16px/20px Mulish, sans-serif ",
                          }}
                        >
                          12:00
                        </div>
                        <div
                          style={{
                            borderRadius: "10px",
                            border: "2px solid #665CD1",
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
                  Точка B
                </div>
                <div
                  style={{
                    alignContent: "flex-start",
                    flexWrap: "wrap",
                    display: "flex",
                    marginTop: "15px",
                    justifyContent: "space-between",
                    gap: "20px",
                    // "@media (max-width: 991px)": {
                    //   maxWidth: "100%",
                    // },
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
                        color: "var(--black-400, #5A5A5A)",
                        font: "500 14px/18px Mulish, sans-serif ",
                      }}
                    >
                      Адреса
                    </div>
                    <div
                      style={{
                        display: "flex",
                        marginTop: "5px",
                        paddingRight: "11px",
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
                        <div
                          style={{
                            color: "var(--black-500, #262626)",
                            font: "500 16px/20px Mulish, sans-serif ",
                          }}
                        >
                          Україна
                        </div>
                        <div
                          style={{
                            borderRadius: "10px",
                            border: "2px solid #665CD1",
                            display: "flex",
                            height: "1px",
                            flexDirection: "column",
                          }}
                        />
                      </div>
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3eecdd14-47f3-438c-9b22-12494813cf04?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3eecdd14-47f3-438c-9b22-12494813cf04?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3eecdd14-47f3-438c-9b22-12494813cf04?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3eecdd14-47f3-438c-9b22-12494813cf04?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3eecdd14-47f3-438c-9b22-12494813cf04?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3eecdd14-47f3-438c-9b22-12494813cf04?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3eecdd14-47f3-438c-9b22-12494813cf04?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3eecdd14-47f3-438c-9b22-12494813cf04?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
                        style={{
                          aspectRatio: "1",
                          objectFit: "contain",
                          objectPosition: "center",
                          width: "25px",
                          justifyContent: "center",
                          alignItems: "center",
                          overflow: "hidden",
                          maxWidth: "100%",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexBasis: "0%",
                      flexDirection: "column",
                    }}
                  >
                    <div
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
                    </div>
                    <div
                      style={{
                        color: "var(--black-500, #262626)",
                        marginTop: "5px",
                        font: "500 16px/20px Mulish, sans-serif ",
                      }}
                    >
                      2
                    </div>
                    <div
                      style={{
                        borderRadius: "10px",
                        border: "2px solid #665CD1",
                        display: "flex",
                        height: "1px",
                        flexDirection: "column",
                      }}
                    />
                  </div>
                </div>
              </div>
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
                  Точка С
                </div>
                <div
                  style={{
                    alignContent: "flex-start",
                    flexWrap: "wrap",
                    display: "flex",
                    marginTop: "15px",
                    justifyContent: "space-between",
                    gap: "20px",
                    // "@media (max-width: 991px)": {
                    //   maxWidth: "100%",
                    // },
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
                        color: "var(--black-400, #5A5A5A)",
                        font: "500 14px/18px Mulish, sans-serif ",
                      }}
                    >
                      Адреса
                    </div>
                    <div
                      style={{
                        display: "flex",
                        marginTop: "5px",
                        paddingRight: "11px",
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
                        <div
                          style={{
                            color: "var(--black-500, #262626)",
                            font: "500 16px/20px Mulish, sans-serif ",
                          }}
                        >
                          Україна
                        </div>
                        <div
                          style={{
                            borderRadius: "10px",
                            border: "2px solid #665CD1",
                            display: "flex",
                            height: "1px",
                            flexDirection: "column",
                          }}
                        />
                      </div>
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f0c88168-19e3-457d-9c70-a8bcd81126a2?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c88168-19e3-457d-9c70-a8bcd81126a2?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c88168-19e3-457d-9c70-a8bcd81126a2?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c88168-19e3-457d-9c70-a8bcd81126a2?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c88168-19e3-457d-9c70-a8bcd81126a2?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c88168-19e3-457d-9c70-a8bcd81126a2?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c88168-19e3-457d-9c70-a8bcd81126a2?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c88168-19e3-457d-9c70-a8bcd81126a2?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
                        style={{
                          aspectRatio: "1",
                          objectFit: "contain",
                          objectPosition: "center",
                          width: "25px",
                          justifyContent: "center",
                          alignItems: "center",
                          overflow: "hidden",
                          maxWidth: "100%",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexBasis: "0%",
                      flexDirection: "column",
                    }}
                  >
                    <div
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
                    </div>
                    <div
                      style={{
                        color: "var(--black-500, #262626)",
                        marginTop: "5px",
                        font: "500 16px/20px Mulish, sans-serif ",
                      }}
                    >
                      2
                    </div>
                    <div
                      style={{
                        borderRadius: "10px",
                        border: "2px solid #665CD1",
                        display: "flex",
                        height: "1px",
                        flexDirection: "column",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  color: "var(--purple-600, #665CD1)",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  // "@media (max-width: 991px)": {
                  //   whiteSpace: "initial",
                  // },
                  justifyContent: "center",
                  borderRadius: "35px",
                  boxShadow: "0px 5px 6px 0px rgba(45, 33, 54, 0.10)",
                  backgroundColor: "var(--purple-100, #F1F0FF)",
                  alignSelf: "start",
                  marginTop: "10px",
                  width: "211px",
                  maxWidth: "100%",
                  padding: "10px 15px",
                  font: "700 16px/20px Mulish, sans-serif ",
                }}
              >
                Додати ще одну точку
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
                  <div
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
                  </div>
                  <div
                    style={{
                      borderRadius: "10px",
                      border: "2px solid #665CD1",
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
                          border: "2px solid #665CD1",
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
                          border: "2px solid #665CD1",
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
                          border: "2px solid #665CD1",
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
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  borderRadius: "7px",
                  border: "2px solid var(--purple-100, #F1F0FF)",
                  display: "flex",
                  flexDirection: "column",
                  // "@media (max-width: 991px)": {
                  //   maxWidth: "100%",
                  // },
                  margin: "5px -20px 0 0",
                  padding: "8px",
                }}
              >
                <div
                  style={{
                    color: "var(--black-300, #7E7E7E)",
                    // "@media (max-width: 991px)": {
                    //   maxWidth: "100%",
                    // },
                    font: "500 14px/18px Mulish, sans-serif ",
                  }}
                >
                  Укажіть інформацію про груз, що перевозите...
                </div>
                <div
                  style={{
                    color: "var(--black-200, #C4C4C4)",
                    textAlign: "right",
                    marginTop: "10px",
                    // "@media (max-width: 991px)": {
                    //   maxWidth: "100%",
                    // },
                    font: "500 12px/15px Mulish, sans-serif ",
                  }}
                >
                  0 / 4 000
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
                  width: "209px",
                  maxWidth: "100%",
                  gap: "11px",
                  padding: "1px 0 1px 1px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    aspectRatio: "1",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "3.333px",
                      border: "1.5px solid var(--black-300, #7E7E7E)",
                      display: "flex",
                      aspectRatio: "1",
                      flexDirection: "column",
                      padding: "2px",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "1.667px",
                        backgroundColor: "var(--purple-600, #665CD1)",
                        display: "flex",
                        height: "19px",
                        flexDirection: "column",
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    color: "var(--purple-600, #665CD1)",
                    alignSelf: "start",
                    flexGrow: "1",
                    whiteSpace: "nowrap",
                    // "@media (max-width: 991px)": {
                    //   whiteSpace: "initial",
                    // },
                    font: "700 16px/20px Mulish, sans-serif ",
                  }}
                >
                  Послуга експедитора
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
                  color: "var(--purple-600, #665CD1)",
                  alignSelf: "stretch",
                  // "@media (max-width: 991px)": {
                  //   maxWidth: "100%",
                  // },
                  margin: "20px -20px 0 0",
                  font: "700 19px/24px Mulish, sans-serif ",
                }}
              >
                Контактні дані
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  // "@media (max-width: 991px)": {
                  //   maxWidth: "100%",
                  // },
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
                      flexDirection: "column",
                      lineHeight: "normal",
                      width: "50%",
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
                      <div
                        style={{
                          color: "var(--black-400, #5A5A5A)",
                          font: "500 14px/18px Mulish, sans-serif ",
                        }}
                      >
                        Прізвище
                      </div>
                      <div
                        style={{
                          color: "var(--black-500, #262626)",
                          marginTop: "5px",
                          font: "500 16px/20px Mulish, sans-serif ",
                        }}
                      >
                        Валунов
                      </div>
                      <div
                        style={{
                          borderRadius: "10px",
                          border: "2px solid #665CD1",
                          display: "flex",
                          height: "1px",
                          flexDirection: "column",
                        }}
                      />
                      <div
                        style={{
                          color: "var(--black-400, #5A5A5A)",
                          marginTop: "15px",
                          font: "500 14px/18px Mulish, sans-serif ",
                        }}
                      >
                        Ім’я
                      </div>
                      <div
                        style={{
                          color: "var(--black-500, #262626)",
                          marginTop: "5px",
                          font: "500 16px/20px Mulish, sans-serif ",
                        }}
                      >
                        Валентин
                      </div>
                      <div
                        style={{
                          borderRadius: "10px",
                          border: "2px solid #665CD1",
                          display: "flex",
                          height: "1px",
                          flexDirection: "column",
                        }}
                      />
                    </div>
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
                      <div
                        style={{
                          color: "var(--black-400, #5A5A5A)",
                          font: "500 14px/18px Mulish, sans-serif ",
                        }}
                      >
                        Номер телефону
                      </div>
                      <div
                        style={{
                          color: "var(--black-500, #262626)",
                          marginTop: "5px",
                          font: "500 16px/20px Mulish, sans-serif ",
                        }}
                      >
                        +38 (097) 333 3333
                      </div>
                      <div
                        style={{
                          borderRadius: "10px",
                          border: "2px solid #665CD1",
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
              <div
                style={{
                  alignSelf: "stretch",
                  color: "var(--purple-600, #665CD1)",
                  // "@media (max-width: 991px)": {
                  //   maxWidth: "100%",
                  // },
                  margin: "20px -20px 0 0",
                  font: "700 19px/24px Mulish, sans-serif ",
                }}
              >
                Оплата
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  borderRadius: "7px",
                  backgroundColor: "var(--100, #F1F0FF)",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "11px",
                  // "@media (max-width: 991px)": {
                  //   maxWidth: "100%",
                  //   flexWrap: "wrap",
                  //   paddingRight: "20px",
                  // },
                  margin: "15px -20px 0 0",
                  padding: "11px 80px 11px 11px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    aspectRatio: "1",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "15px",
                      border: "1.5px solid var(--black-300, #7E7E7E)",
                      display: "flex",
                      aspectRatio: "1",
                      flexDirection: "column",
                      padding: "2px",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "44.167px",
                        backgroundColor: "var(--purple-600, #665CD1)",
                        display: "flex",
                        height: "19px",
                        flexDirection: "column",
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    color: "var(--black-600, #171717)",
                    alignSelf: "start",
                    flexGrow: "1",
                    whiteSpace: "nowrap",
                    // "@media (max-width: 991px)": {
                    //   whiteSpace: "initial",
                    // },
                    font: "700 16px/20px Mulish, sans-serif ",
                  }}
                >
                  Готівка перед завантаженням
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  borderRadius: "7px",
                  backgroundColor: "var(--100, #F1F0FF)",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "11px",
                  // "@media (max-width: 991px)": {
                  //   maxWidth: "100%",
                  //   flexWrap: "wrap",
                  //   paddingRight: "20px",
                  // },
                  margin: "15px -20px 0 0",
                  padding: "11px 80px 11px 11px",
                }}
              >
                <div
                  style={{
                    borderRadius: "15px",
                    border: "1.5px solid var(--black-300, #7E7E7E)",
                    display: "flex",
                    width: "23px",
                    height: "23px",
                    flexDirection: "column",
                  }}
                />
                <div
                  style={{
                    color: "var(--black-600, #171717)",
                    alignSelf: "start",
                    flexGrow: "1",
                    whiteSpace: "nowrap",
                    // "@media (max-width: 991px)": {
                    //   whiteSpace: "initial",
                    // },
                    font: "700 16px/20px Mulish, sans-serif ",
                  }}
                >
                  Готівка перед розвантаженням
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  borderRadius: "7px",
                  backgroundColor: "var(--100, #F1F0FF)",
                  display: "flex",
                  gap: "10px",
                  // "@media (max-width: 991px)": {
                  //   maxWidth: "100%",
                  //   flexWrap: "wrap",
                  //   justifyContent: "center",
                  // },
                  margin: "15px -20px 0 0",
                  padding: "11px 10px 11px 11px",
                }}
              >
                <div
                  style={{
                    borderRadius: "15px",
                    border: "1.5px solid var(--black-300, #7E7E7E)",
                    display: "flex",
                    width: "23px",
                    height: "23px",
                    flexDirection: "column",
                  }}
                />
                <div
                  style={{
                    color: "var(--black-600, #171717)",
                    alignSelf: "start",
                    flexGrow: "1",
                    flexBasis: "auto",
                    font: "700 16px/20px Mulish, sans-serif ",
                  }}
                >
                  Безпечна угода через MOOW
                </div>
                <div
                  style={{
                    color: "var(--purple, #665CD1)",
                    textAlign: "right",
                    alignSelf: "center",
                    flexGrow: "1",
                    flexBasis: "auto",
                    margin: "auto 0",
                    font: "300 14px/18px Mulish, sans-serif ",
                  }}
                >
                  Visa / MasterCard
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "normal",
              width: "44%",
              marginLeft: "20px",
              // "@media (max-width: 991px)": {
              //   width: "100%",
              //   marginLeft: 0,
              // },
            }}
          >
            <div
              style={{
                alignItems: "center",
                borderRadius: "10px",
                backgroundColor: "var(--purple-100, #F1F0FF)",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                // "@media (max-width: 991px)": {
                //   maxWidth: "100%",
                //   marginTop: "40px",
                // },
                margin: "0 auto",
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
                      width: "43%",
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
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9bf4d96a-0ce3-474b-b0a2-94a19ca546f5?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9bf4d96a-0ce3-474b-b0a2-94a19ca546f5?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9bf4d96a-0ce3-474b-b0a2-94a19ca546f5?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9bf4d96a-0ce3-474b-b0a2-94a19ca546f5?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9bf4d96a-0ce3-474b-b0a2-94a19ca546f5?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9bf4d96a-0ce3-474b-b0a2-94a19ca546f5?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9bf4d96a-0ce3-474b-b0a2-94a19ca546f5?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9bf4d96a-0ce3-474b-b0a2-94a19ca546f5?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
                style={{
                  aspectRatio: "1.11",
                  objectFit: "contain",
                  objectPosition: "center",
                  width: "100%",
                  alignSelf: "stretch",
                  overflow: "hidden",
                  marginTop: "15px",
                  // "@media (max-width: 991px)": {
                  //   maxWidth: "100%",
                  // },
                }}
              />
              <div
                style={{
                  justifyContent: "space-between",
                  alignSelf: "stretch",
                  display: "flex",
                  marginTop: "15px",
                  gap: "20px",
                  // "@media (max-width: 991px)": {
                  //   maxWidth: "100%",
                  //   flexWrap: "wrap",
                  // },
                }}
              >
                <div
                  style={{
                    color: "var(--black-500, #262626)",
                    textAlign: "center",
                    font: "300 14px/18px Mulish, sans-serif ",
                  }}
                >
                  Подача транспотру
                </div>
                <div
                  style={{
                    color: "var(--black-500, #262626)",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    // "@media (max-width: 991px)": {
                    //   whiteSpace: "initial",
                    // },
                    font: "500 14px/18px Mulish, sans-serif ",
                  }}
                >
                  2000 грн
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  backgroundColor: "var(--black-200, #C4C4C4)",
                  display: "flex",
                  marginTop: "5px",
                  height: "1px",
                  flexDirection: "column",
                  // "@media (max-width: 991px)": {
                  //   maxWidth: "100%",
                  // },
                }}
              />
              <div
                style={{
                  justifyContent: "space-between",
                  alignSelf: "stretch",
                  display: "flex",
                  marginTop: "5px",
                  gap: "20px",
                  // "@media (max-width: 991px)": {
                  //   maxWidth: "100%",
                  //   flexWrap: "wrap",
                  // },
                }}
              >
                <div
                  style={{
                    color: "var(--black-500, #262626)",
                    textAlign: "center",
                    font: "300 14px/18px Mulish, sans-serif ",
                  }}
                >
                  Маршрут загрузка - вигрузка
                </div>
                <div
                  style={{
                    color: "var(--black-500, #262626)",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    // "@media (max-width: 991px)": {
                    //   whiteSpace: "initial",
                    // },
                    font: "500 14px/18px Mulish, sans-serif ",
                  }}
                >
                  2000 грн
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  backgroundColor: "var(--black-200, #C4C4C4)",
                  display: "flex",
                  marginTop: "5px",
                  height: "1px",
                  flexDirection: "column",
                  // "@media (max-width: 991px)": {
                  //   maxWidth: "100%",
                  // },
                }}
              />
              <div
                style={{
                  justifyContent: "space-between",
                  alignSelf: "stretch",
                  display: "flex",
                  marginTop: "5px",
                  gap: "20px",
                  // "@media (max-width: 991px)": {
                  //   maxWidth: "100%",
                  //   flexWrap: "wrap",
                  // },
                }}
              >
                <div
                  style={{
                    color: "var(--black-500, #262626)",
                    textAlign: "center",
                    font: "300 14px/18px Mulish, sans-serif ",
                  }}
                >
                  Послуги експедитора
                </div>
                <div
                  style={{
                    color: "var(--black-500, #262626)",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    // "@media (max-width: 991px)": {
                    //   whiteSpace: "initial",
                    // },
                    font: "500 14px/18px Mulish, sans-serif ",
                  }}
                >
                  2000 грн
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  backgroundColor: "var(--black-200, #C4C4C4)",
                  display: "flex",
                  marginTop: "5px",
                  height: "1px",
                  flexDirection: "column",
                  // "@media (max-width: 991px)": {
                  //   maxWidth: "100%",
                  // },
                }}
              />
              <div
                style={{
                  justifyContent: "space-between",
                  alignSelf: "stretch",
                  display: "flex",
                  marginTop: "5px",
                  gap: "20px",
                  // "@media (max-width: 991px)": {
                  //   maxWidth: "100%",
                  //   flexWrap: "wrap",
                  // },
                }}
              >
                <div
                  style={{
                    color: "var(--black-500, #262626)",
                    textAlign: "center",
                    font: "300 14px/18px Mulish, sans-serif ",
                  }}
                >
                  Послуги грузчиків
                </div>
                <div
                  style={{
                    color: "var(--black-500, #262626)",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    // "@media (max-width: 991px)": {
                    //   whiteSpace: "initial",
                    // },
                    font: "500 14px/18px Mulish, sans-serif ",
                  }}
                >
                  2000 грн
                </div>
              </div>
              <div
                style={{
                  justifyContent: "space-between",
                  alignSelf: "stretch",
                  display: "flex",
                  marginTop: "5px",
                  gap: "20px",
                  // "@media (max-width: 991px)": {
                  //   maxWidth: "100%",
                  //   flexWrap: "wrap",
                  // },
                }}
              >
                <div
                  style={{
                    color: "var(--black-500, #262626)",
                    textAlign: "center",
                    font: "300 14px/18px Mulish, sans-serif ",
                  }}
                >
                  2 грузчиків
                </div>
                <div
                  style={{
                    color: "var(--black-500, #262626)",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    // "@media (max-width: 991px)": {
                    //   whiteSpace: "initial",
                    // },
                    font: "500 14px/18px Mulish, sans-serif ",
                  }}
                >
                  200 грн/год
                </div>
              </div>
              <div
                style={{
                  justifyContent: "space-between",
                  alignSelf: "stretch",
                  display: "flex",
                  marginTop: "5px",
                  gap: "20px",
                  // "@media (max-width: 991px)": {
                  //   maxWidth: "100%",
                  //   flexWrap: "wrap",
                  // },
                }}
              >
                <div
                  style={{
                    color: "var(--black-500, #262626)",
                    textAlign: "center",
                    font: "300 14px/18px Mulish, sans-serif ",
                  }}
                >
                  Зайнятість
                </div>
                <div
                  style={{
                    color: "var(--black-500, #262626)",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    // "@media (max-width: 991px)": {
                    //   whiteSpace: "initial",
                    // },
                    font: "500 14px/18px Mulish, sans-serif ",
                  }}
                >
                  2 години
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  backgroundColor: "var(--black-200, #C4C4C4)",
                  display: "flex",
                  marginTop: "5px",
                  height: "1px",
                  flexDirection: "column",
                  // "@media (max-width: 991px)": {
                  //   maxWidth: "100%",
                  // },
                }}
              />
              <div
                style={{
                  color: "var(--black-600, #171717)",
                  textAlign: "center",
                  alignSelf: "start",
                  marginTop: "15px",
                  whiteSpace: "nowrap",
                  // "@media (max-width: 991px)": {
                  //   whiteSpace: "initial",
                  // },
                  font: "700 16px/20px Mulish, sans-serif ",
                }}
              >
                Повна ціна:
              </div>
              <div
                style={{
                  color: "var(--purple-600, #665CD1)",
                  textAlign: "center",
                  alignSelf: "start",
                  whiteSpace: "nowrap",
                  // "@media (max-width: 991px)": {
                  //   whiteSpace: "initial",
                  // },
                  font: "700 24px/30px Mulish, sans-serif ",
                }}
              >
                32 000 грн
              </div>
              <div
                style={{
                  color: "var(--black-100, #EBEBEB)",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  // "@media (max-width: 991px)": {
                  //   whiteSpace: "initial",
                  // },
                  justifyContent: "center",
                  borderRadius: "35px",
                  boxShadow: "0px 5px 8px 0px rgba(77, 76, 76, 0.40)",
                  backgroundColor: "var(--black-600, #171717)",
                  alignSelf: "center",
                  marginTop: "15px",
                  width: "115px",
                  maxWidth: "100%",
                  padding: "10px 15px",
                  font: "700 16px/20px Mulish, sans-serif ",
                }}
              >
                Оформити
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          alignItems: "start",
          backgroundColor: "var(--bg, #FEFEFE)",
          display: "flex",
          marginTop: "15px",
          width: "100%",
          flexDirection: "column",
          // "@media (max-width: 991px)": {
          //   maxWidth: "100%",
          //   padding: "0 20px",
          // },
          padding: "15px 50px",
        }}
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/59a95531-1e27-4b17-8ed0-67f34a056d0f?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
          style={{
            aspectRatio: "4.71",
            objectFit: "contain",
            objectPosition: "center",
            width: "113px",
            overflow: "hidden",
            maxWidth: "100%",
          }}
        />
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
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7341a61d-3a06-4c49-a73c-6264f7114566?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
                        style={{
                          aspectRatio: "1",
                          objectFit: "contain",
                          objectPosition: "center",
                          width: "20px",
                          fill: "var(--black-600, #171717)",
                          overflow: "hidden",
                          maxWidth: "100%",
                        }}
                      />
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
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/96280f1c-2db7-49f5-928b-6ff643db1450?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
                        style={{
                          aspectRatio: "1",
                          objectFit: "contain",
                          objectPosition: "center",
                          width: "20px",
                          fill: "var(--black-600, #171717)",
                          overflow: "hidden",
                          maxWidth: "100%",
                        }}
                      />
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
                            alignSelf: "stretch",
                            display: "flex",
                            marginTop: "10px",
                            justifyContent: "space-between",
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
                            Київ-03188
                          </div>
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
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/165af61d-5534-4887-ab09-cf061ed11bc1?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
                          style={{
                            aspectRatio: "8.5",
                            objectFit: "contain",
                            objectPosition: "center",
                            width: "170px",
                            justifyContent: "center",
                            alignItems: "center",
                            overflow: "hidden",
                            marginTop: "10px",
                          }}
                        />
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aaf4bded-f169-4bd7-ae29-23dd5cc75f18?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaf4bded-f169-4bd7-ae29-23dd5cc75f18?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaf4bded-f169-4bd7-ae29-23dd5cc75f18?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaf4bded-f169-4bd7-ae29-23dd5cc75f18?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaf4bded-f169-4bd7-ae29-23dd5cc75f18?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaf4bded-f169-4bd7-ae29-23dd5cc75f18?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaf4bded-f169-4bd7-ae29-23dd5cc75f18?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aaf4bded-f169-4bd7-ae29-23dd5cc75f18?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
                          style={{
                            aspectRatio: "8.5",
                            objectFit: "contain",
                            objectPosition: "center",
                            width: "170px",
                            justifyContent: "center",
                            alignItems: "center",
                            overflow: "hidden",
                            marginTop: "10px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      lineHeight: "normal",
                      width: "27%",
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
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/41c58f51-aeb6-433f-b5aa-b4db24caa62c?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
                        style={{
                          aspectRatio: "1",
                          objectFit: "contain",
                          objectPosition: "center",
                          width: "20px",
                          fill: "var(--black-600, #171717)",
                          overflow: "hidden",
                          maxWidth: "100%",
                        }}
                      />
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
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/406c6cd3-a5b9-4b71-b35a-aea4b75fd644?apiKey=ee58232a01b242d2a13bbbde4b7b89e4&"
                        style={{
                          aspectRatio: "1",
                          objectFit: "contain",
                          objectPosition: "center",
                          width: "20px",
                          fill: "var(--black-600, #171717)",
                          overflow: "hidden",
                          maxWidth: "100%",
                        }}
                      />
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
                            whiteSpace: "nowrap",
                            // "@media (max-width: 991px)": {
                            //   whiteSpace: "initial",
                            // },
                            font: "700 14px/18px Mulish, sans-serif ",
                          }}
                        >
                          Документи
                        </div>
                        <div
                          style={{
                            borderRadius: "1px",
                            backgroundColor: "var(--purple-600, #665CD1)",
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
                  Встанови безкоштовний додаток на смартфон
                </div>
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
            marginTop: "10px",
            // "@media (max-width: 991px)": {
            //   maxWidth: "100%",
            // },
            font: "700 11px/14px Mulish, sans-serif ",
          }}
        >
          ©ТОВ «Діджітал інвест адвайзор», 2021-2023
        </div>
      </div>
    </div>
  );
}
