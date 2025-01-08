import { axiosInstance } from "../config/axiosConfig";

class studentApi {
  _httpRequest = async (method, url, params) => {
    try {
      switch (method) {
        case "GET":
          return await axiosInstance.get(
            url,
            !params ? null : { ...params }
          );
          
        case "POST":
          return await axiosInstance.post(url, !params ? null : { ...params });
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
  }

  logoutStudent = async (url, params = null) => {
    const data = await this._httpRequest("POST", url, params);
    console.log(data);
    return data;
  };
}

export default new studentApi();
