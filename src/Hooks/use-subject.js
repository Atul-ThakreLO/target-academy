import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axiosConfig";

export const useGetSubjects = (id) => {
  return useQuery({
    queryKey: ["subjects", id],
    queryFn: async () => {
      console.log(id);
      const resp = await axiosInstance.get("/subject/by/class", {
        params: {
          class_id: id,
        },
      });
      return resp.data;
    },
    enabled: !!id,
  });
}