import { isAuthenticated } from "../../hooks/auth"; 
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace/>
};

export default ProtectedRoute;