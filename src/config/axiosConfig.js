import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
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
    console.error(error);
    throw error;
  }
);
