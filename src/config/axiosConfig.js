import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: true,
});


axiosInstance.interceptors.response.use((response) => response, (error) => {
  console.error(error);
  throw error;
})