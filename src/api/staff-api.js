import { toast } from "react-toastify";
import { axiosInstance } from "../config/axiosConfig";

class staffApi {
  _httpRequest = async (method, url, params, optional = null) => {
    try {
      switch (method) {
        case "GET":
          // console.log(params?.toString());
          return await axiosInstance.get(`${url}/?${params?.toString()}`);

        case "POST":
          return await axiosInstance.post(
            url,
            !params ? null : { ...params },
            !optional ? null : { ...optional }
          );
        case "PUT":
          return await axiosInstance.put(url, !params ? null : { ...params });
        case "DELETE":
          return await axiosInstance.delete(
            url,
            !params ? null : { ...params }
          );
        default:
          throw new Error("Invalid method");
      }
    } catch (error) {
      console.error(error);
      if (error.message === "Network Error") {
        toast.error(error.message);
      }
      throw error;
    }
  };

  postJost = async (url, params = null, optional = null) => {
    const data = await this._httpRequest("POST", url, params, optional);
    // console.log(data);
    return data;
  };

  getJobs = async (url, params = null, optional = null) => {
    const data = await this._httpRequest("GET", url, params, optional);
    // console.log(data);
    return data;
  };

  applyJob = async (url, params = null, optional = null) => {
    const data = await this._httpRequest("POST", url, params, optional);
    return data;
  };

  getRequest = async (url, params = null, optional = null) => {
    const queries = new URLSearchParams({ ...params });
    const data = await this._httpRequest("GET", url, queries, optional);
    // console.log(data);
    return data;
  };

  // getSlugRequest = async (url, params = null, optional = null) => {
  //   const data = await this._httpRequest
  // }

  postRequest = async (url, params = null, optional = null) => {
    console.log("called");
    
    const data = await this._httpRequest("POST", url, params, optional);
    // console.log(data);
    return data;
  };

  putRequest = async (url, params = null, optional = null) => {
    const data = await this._httpRequest("PUT", url, params, optional);
    // console.log(data);
    return data;
  };

  deleteRequest = async (url, params = null, optional = null) => {
    // console.log(params);
    const data = await this._httpRequest("DELETE", url, params, optional);
    // console.log(data);
    return data;
  };
}

export default new staffApi();
