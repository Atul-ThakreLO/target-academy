import { axiosInstance } from "@/config/axiosConfig";
import { toast } from "react-toastify";

class api_methods {
  _httpRequest = async (method, url, params, optional) => {
    try {
      switch (method) {
        case "GET": {
          return await axiosInstance.get(
            `${url}/?${params?.toString()}`,
            optional
          );
        }
        case "POST": {
          return await axiosInstance.post(
            url,
            !params ? null : { ...params },
            !optional ? null : { ...optional }
          );
        }
        case "PUT": {
          return await axiosInstance.put(
            url,
            !params ? null : { ...params },
            !optional ? null : { ...optional }
          );
        }
        case "DELETE": {
          return await axiosInstance.delete(
            url,
            !params ? null : { ...params },
            !optional ? null : { ...optional }
          );
        }
      }
    } catch (error) {
      // console.error(error);
      if (error.message === "Network Error") {
        toast.error(error.message);
      }
      throw error;
    }
  };

  async getRequest(url, params = null, optional = null) {
    const queries = new URLSearchParams({ ...params });
    const data = this._httpRequest("GET", url, queries, optional);
    return data;
  }

  async postRequest(url, params = null, optional = null) {
    const data = this._httpRequest("POST", url, params, optional);
    return data;
  }

  async putRequest(url, params = null, optional = null) {
    const data = this._httpRequest("PUT", url, params, optional);
    return data;
  }

  async deleteRequest(url, params = null, optional = null) {
    const data = this._httpRequest("DELETE", url, params, optional);
    return data;
  }
}

export default new api_methods();
