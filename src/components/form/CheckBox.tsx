import React from "react";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => (
  <div className="mb-4 flex items-center">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="mr-2"
    />
    <label>{label}</label>
  </div>
);

export default CheckBox;
