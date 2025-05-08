// components/form/FormButton.tsx
import React from "react";
import { ClipLoader } from "react-spinners";

interface FormButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  className?: string; 
}

const FormButton: React.FC<FormButtonProps> = ({
  text,
  onClick,
  type = "submit",
  loading = false,
  className,
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={loading}
    className={` ${className}  `}
  >
    {loading ? <ClipLoader color="#fff" size={20} /> : text}
  </button>
);

export default FormButton;
