import axios, { AxiosError, type AxiosInstance,  } from 'axios';

const axiosInstance:AxiosInstance = axios.create({
       baseURL:'https://api.athops.edu.pk/api',
       headers:{
        'Content-Type': 'application/json',
       }
});

axiosInstance.interceptors.request.use((config)=>{
                 const token = localStorage.getItem("token");
                 if (token && config.headers){
                     config.headers.Authorization = `Bearer ${token}`
                 }
                 return config;

},(error:AxiosError)=>(Promise.reject(error))
);

export default axiosInstance;