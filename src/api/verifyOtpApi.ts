import axios from '../axios/axiosInstance';

interface OtpPayload {
  email: string;
  otp: string;
}

interface OtpResponse {
  status: boolean;
  message: string;
  data?: any;
  token:string
}

const verifyOtp = async ({ email, otp }: OtpPayload): Promise<OtpResponse> => {
  const response = await axios.post(`/users/verify-otp?email=${email}&otp=${otp}`);
  return response.data;
};

export default verifyOtp;
