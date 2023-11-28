"use client";
import "./DateInput.scss";

type DateInputProps = {
  label: string;
  date: string;
  onDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const DateInput: React.FC<DateInputProps> = ({
  label,
  date,
  onDateChange,
}) => {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="date-input-container">
      <label htmlFor="date" className="date-input-label">
        {label}
      </label>
      <div className="date-input-wrapper">
        <div className="date-input-field">
          <input
            id="date"
            name="date"
            min={today}
            onChange={onDateChange}
            value={date}
            className="date-input"
            type="date"
          />
          <div className="underline"></div>
        </div>
      </div>
    </div>
  );
};
