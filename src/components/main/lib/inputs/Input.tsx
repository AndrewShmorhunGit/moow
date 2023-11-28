"use client";
import "./Input.scss";

type InputProps = {
  type: string;
  id: string;
  label: string;
  value?: string | number;
  placeholder?: string;
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({
  type,
  id,
  label,
  value,
  placeholder,
  onInputChange,
}) => {
  return (
    <div className="input-container">
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onInputChange}
        placeholder={placeholder}
        className="input-field"
        required
      />
    </div>
  );
};
