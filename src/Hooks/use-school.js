import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axiosConfig";

export const useGetSchool = () => {
  return useQuery({
    queryKey: ["school"],
    queryFn: async () => {
      const resp = await axiosInstance.get("/school/s/all");
      return resp.data;
    },
  });
};
