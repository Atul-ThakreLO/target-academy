import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../config/axiosConfig";

export default function useSendOTP() {
  return useMutation({
    mutationKey: "sendOTP",
    mutationFn: async (data) => {
      const resp = await axiosInstance.post("/student/o/send-otp", {
        email: data.email,
      });
      return resp;
    },
  });
}
