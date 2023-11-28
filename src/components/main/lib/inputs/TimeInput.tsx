import React from "react";
import "./Input.scss";

type TimeInputProps = {
  id: string;
  label: string;
  value: string;
  onTimeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TimeInput: React.FC<TimeInputProps> = ({
  id,
  label,
  value,
  onTimeChange,
}) => {
  return (
    <div className="input-container">
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <input
        type="time"
        id={id}
        onChange={onTimeChange}
        value={value}
        className="input-field"
      />
    </div>
  );
};
