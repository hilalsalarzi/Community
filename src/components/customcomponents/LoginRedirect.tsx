import { isAuthenticated } from "../../hooks/auth"; 
import { Navigate } from "react-router-dom";
import Layout from "../layout/Layout";

const LoginRedirect = () => {
    return isAuthenticated() ? <Layout /> : <Navigate to="/login" replace/>
  };
  
  export default LoginRedirect;