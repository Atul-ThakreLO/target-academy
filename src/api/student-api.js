import { toast } from "react-toastify";
import { axiosInstance } from "../config/axiosConfig";

class studentApi {
  _httpRequest = async (method, url, params, optional = null) => {
    try {
      switch (method) {
        case "GET":
          return await axiosInstance.get(url, !params ? null : { ...params });

        case "POST":
          return await axiosInstance.post(
            url,
            !params ? null : { ...params },
            !optional ? null : { ...optional }
          );
        case "PUT":
          return ({ data } = await axiosInstance.put(
            url,
            !params ? null : { ...params }
          ));
        case "DELETE":
          return ({ data } = await axiosInstance.delete(
            url,
            !params ? null : { ...params }
          ));
        default:
          throw new Error("Invalid method");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message)
      throw error;
    }
  };

  getStudent = async (url, params = null) => {
    const data = await this._httpRequest("GET", url, params);
    console.log(data);

    return data;
  };

  loginStudent = async (url, params = null) => {
    const data = await this._httpRequest("POST", url, params);
    console.log(data);
    return data;
  };

  validateStudentToken = async (url, params = null) => {
    const data = await this._httpRequest("GET", url, params);
    console.log(data);
    return data;
  };

  logoutStudent = async (url, params = null) => {
    const data = await this._httpRequest("POST", url, params);
    console.log(data);
    return data;
  };

  sendOTP = async (url, params = null) => {
    const data = await this._httpRequest("POST", url, params);
    console.log(data);
    return data;
  };

  verifyOTP = async (url, params = null) => {
    const data = await this._httpRequest("POST", url, params);
    console.log(data);
    return data;
  };

  createStudent = async (url, params = null, optional = null) => {
    const data = await this._httpRequest("POST", url, params, optional);
    console.log(data);
    return data;
  };
}

export default new studentApi();
