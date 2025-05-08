import { isAuthenticated } from "../../hooks/auth"; 
import { Navigate, useLocation } from "react-router-dom";
import Layout from "../layout/Layout";
import LoginForm from "../../pages/Login"; 

const LoginRedirect = () => {
  const location = useLocation();

  if (isAuthenticated()) {
    return <Layout />;
  }

  if (location.pathname === "/login") {
    return <LoginForm />;
  }

  return <Navigate to="/login" />;
};

export default LoginRedirect;
