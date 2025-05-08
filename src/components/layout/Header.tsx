import { useNavigate } from "react-router-dom";
import FormButton from "../form/FormButton";

const Header = () => {

  const navigate = useNavigate();
  const logout = ()=>{
      localStorage.removeItem("token");
      navigate("/")
  }  

    return (
      <header className="bg-gray-800 text-white p-4 shadow-md">
        <div className="flex justify-between">
        <h1 className="text-xl font-bold">Admin Panel</h1>
      <FormButton text="logout" className="bg-red-500 w-[100px] rounded-full" onClick={logout}  />
      </div>
      </header>
    );
  };
  
  export default Header;
  