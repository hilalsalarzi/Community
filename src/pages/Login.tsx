import React, { useState } from "react";
import { LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import FormButton from "../components/form/FormButton";
import TextInput from "../components/form/TextInput";
import { Link } from "react-router-dom";
import loginUser from "../api/loginApi";
import { useNavigate } from 'react-router-dom';


const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!formData.email || !formData.password) {
      alert("Please fill in both email and password");
      return;
    }
    
    try {
      const user = await loginUser(formData);
      if (user?.status) {
        navigate("/verify-otp",{
          state: { message: user.message , email: formData.email},
        });
      }
    } catch (error) {
      console.error("Login failed:", error);
    }finally {
      setLoading(false); // Hide loader after response
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
     <div className="flex flex-col w-full items-center justify-center">
     <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-black">Admin Login</h2>

        {/* email */}
        <div className="relative">
        <UserIcon className="w-5 h-5 absolute left-3 top-3 text-gray-500" />
          <TextInput
            label=""
            name="email"
            value={formData.email}
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
        <FormButton text="Login" loading={loading} className={`w-full bg-indigo-600 text-white p-3 rounded transition flex items-center justify-center  ${
      loading ? "opacity-70 cursor-not-allowed" : "hover:bg-indigo-700"
    }`} />
        <p className="mt-4 text-center text-sm">
          Don't have an account? <Link to="#" className="text-indigo-600">Sign up</Link>
        </p>
      </form>
     </div>
    </div>
  );
};

export default LoginForm;
