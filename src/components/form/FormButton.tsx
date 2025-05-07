import React from "react";

interface FormButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const FormButton: React.FC<FormButtonProps> = ({
  text,
  onClick,
  type = "submit",
}) => (
  <button
    type={type}
    onClick={onClick}
      className="w-full bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700 transition"
  >
    {text}
  </button>
);

export default FormButton;
