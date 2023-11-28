import "./OrderItem.scss";

export default function OrderItem({
  title,
  price,
}: {
  title: string;
  price: string;
}) {
  return (
    <div className="column">
      <div className="outer-div">
        <div className="inner-div">{title}</div>
        <div className="inner-div-nowrap">{price} грн</div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          backgroundColor: "var(--black-200, #C4C4C4)",
          display: "flex",
          // marginTop: "15px",
          height: "1px",
          flexDirection: "column",
        }}
      />
    </div>
  );
}
