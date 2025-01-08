import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axiosConfig";

export default function () {
  return useQuery({
    queryKey: ["class"],
    queryFn: async () => {
      const resp = await axiosInstance.get("/class/s/all");
      return resp.data;
    },
  });
}
