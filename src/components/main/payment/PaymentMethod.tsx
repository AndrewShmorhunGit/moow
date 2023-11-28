export function PaymentMethod() {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          alignSelf: "stretch",
          color: "var(--purple-600, #665CD1)",
          margin: "20px 0px 0 0",
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
          margin: "15px 0px 0 0",
          padding: "11px 10px 11px 11px",
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
                width: "19px",
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

          margin: "15px 0px 0 0",
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
          margin: "15px 0px 0 0",
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
  );
}
