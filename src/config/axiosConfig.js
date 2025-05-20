import axios from "axios";
import { toast } from "react-toastify";

export const axiosInstance = axios.create({
  baseURL: "http://13.200.144.33/",
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  // async (config) => {
  //   const check = await checkConnection();
  //   console.log(check);

  //   if (check) {
  //     return config;
  //   }
  //   throw new Error("Network Error Can't reach server");
  // },
  (config) => config,
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    toast.error(error.response.data.message);
    console.log(error);
    throw error;
  }
);
