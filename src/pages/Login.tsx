import { useState } from "react";
import { LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page refresh

    // Simulate login authentication (Replace with actual logic)
    if (email === "admin@gmail.com" && password === "admin") {
      console.log("Login Successful!");
      navigate("/admin"); // Redirect to the admin dashboard
    } else {
      alert("Invalid email or password"); // Show error if login fails
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Admin Login</h2>
        <form className="mt-6 space-y-4" onSubmit={handleLogin}>
          <div className="relative">
            <UserIcon className="w-5 h-5 absolute left-3 top-3 text-gray-500" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 p-3 border rounded focus:ring focus:ring-indigo-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <LockClosedIcon className="w-5 h-5 absolute left-3 top-3 text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 p-3 border rounded focus:ring focus:ring-indigo-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700 transition"
          >
            Login
          </button>
        <p className="mt-4 text-center text-sm">
          Don't have an account? <Link to="/signup" className="text-indigo-600">Sign up</Link>
        </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
