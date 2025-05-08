import axios from '../axios/axiosInstance';

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
    status: boolean;
    status_code:number,
    message:string,
    data: any[];
  }

 const loginUser = async (payload: LoginPayload): Promise<LoginResponse> => {
    try {
        const response = await axios.post<LoginResponse>('/users/login', payload,);
    return response.data;
    } catch (error:any) {
        console.log(error.message)
    }
    throw Error;
  };
export default loginUser;
