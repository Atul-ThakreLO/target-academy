import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axiosConfig";

export default function () {
  return useQuery({
    queryKey: ["school"],
    queryFn: async () => {
      const resp = await axiosInstance.get("/school/s/all");
      return resp.data;
    },
  });
}
