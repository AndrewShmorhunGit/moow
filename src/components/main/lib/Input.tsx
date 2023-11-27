export function Input({
  type = "name",
  id,
  label,
  placeholder,
}: {
  type: string;
  id: string;
  label: string;
  placeholder?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        lineHeight: "normal",
        // width: "50%",
        marginLeft: "0px",
        // "@media (max-width: 991px)": {
        //   width: "100%",
        //   marginLeft: 0,
        // },
      }}
    >
      <label
        htmlFor={id}
        style={{
          width: "8rem",
          color: "var(--black-400, #5A5A5A)",
          font: "500 14px/18px Mulish, sans-serif ",
        }}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        style={{
          outline: "none",
          border: "none",
          color: "var(--black-500, #262626)",

          marginTop: "5px",
          font: "500 16px/20px Mulish, sans-serif ",
        }}
        required
      />
    </div>
  );
}
