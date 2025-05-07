import React, { useState } from "react";
import { LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import FormButton from "../components/form/FormButton";
import TextInput from "../components/form/TextInput";
import { Link } from "react-router-dom";


const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
     <div className="flex flex-col w-full items-center justify-center">
     <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-black">Admin Login</h2>

        {/* Username */}
        <div className="relative">
        <UserIcon className="w-5 h-5 absolute left-3 top-3 text-gray-500" />
          <TextInput
            label=""
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Email"
            type="text"
             className="w-full pl-10 p-3 border rounded focus:ring focus:ring-indigo-300"
          />
        </div>

        {/* Password */}
        <div className="relative">
        <LockClosedIcon className="w-5 h-5 absolute left-3 top-3 text-gray-500" />
          <TextInput
            label=""
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="password"
            type="password"
             className="w-full pl-10 p-3 border rounded focus:ring focus:ring-indigo-300"
          />
        </div>

        {/* Submit Button */}
        <FormButton text="Login" />
        <p className="mt-4 text-center text-sm">
          Don't have an account? <Link to="#" className="text-indigo-600">Sign up</Link>
        </p>
      </form>
     </div>
    </div>
  );
};

export default LoginForm;
