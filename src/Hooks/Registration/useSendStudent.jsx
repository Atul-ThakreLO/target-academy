import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../config/axiosConfig";

export default function useSendStudent() {
  return useMutation({
    mutationKey: "sendOTP",
    mutationFn: async (data) => {
      const resp = await axiosInstance.post("/student", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return resp.data;
    },
  });
}
