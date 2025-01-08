import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../config/axiosConfig";

export default function useVerifyOTP() {
  return useMutation({
    mutationKey: "sendOTP",
    mutationFn: async (data) => {
      const resp = await axiosInstance.post("/student/o/verify-otp", data);
      return resp;
    },
  });
}
