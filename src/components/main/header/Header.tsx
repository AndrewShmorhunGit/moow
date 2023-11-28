import { UserButton } from "@clerk/nextjs";
import "./Header.scss";

export function Header() {
  return (
    <div
      style={{
        justifyContent: "center",
        backgroundColor: "var(--bg, #FEFEFE)",
        display: "flex",
        width: "100%",
        flexDirection: "column",
        padding: "10px 20px",
      }}
    >
      <div
        className="header-container"
        // style={{
        //   display: "flex",
        //   gap: "20px",
        //   justifyContent: "space-between",
        //   margin: "0 10px",
        // }}
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
        <div className="header-center">
          <button className="primary-button">Категорії</button>
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
          <div className="secondary-button">Створити оголошення</div>
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
            <UserButton afterSignOutUrl="/" />

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
  );
}
