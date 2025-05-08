import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TextInput from '../components/form/TextInput';
import FormButton from '../components/form/FormButton';
import verifyOtp from '../api/verifyOtpApi';
import { toast } from 'react-toastify';
const OtpVerification = () => {
    const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { message, email } = location.state || {};

  const [otp , setOtp] = useState("");

 const   handleChange   = (e:React.ChangeEvent<HTMLInputElement>)=>{
        
      setOtp(e.target.value)
       
 }
 const onclick = async () => {
    if (!otp.trim()) {
        toast.error("Please enter the OTP code.")
      return;
    }
  
    setLoading(true);
    try {
      const response = await verifyOtp({ email,otp });
      
  
      if (response.status) {
        toast.success(response.message);
        localStorage.setItem("token", response.token);
        navigate('/admin'); // or your success page
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error("OTP verification failed:", error);
      console.log(otp)
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };
  

  // If no state, redirect to login
  useEffect(() => {
    if (!message) {
      navigate('/');
    }
  }, [message, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow max-w-md w-full text-center">
        <h2 className="text-2xl font-semibold mb-4">OTP Verification</h2>
        <p>{message}</p>
        <TextInput
            label=""
            name="otp"
            value={otp}
            onChange={handleChange}
            placeholder="otp"
            type="text"
             className="w-full pl-10 p-3 border rounded focus:ring focus:ring-indigo-300"
          />
           <FormButton onClick={onclick} text="Login" loading={loading} className="w-full bg-indigo-600" />
      </div>
    </div>
  );
};

export default OtpVerification;
