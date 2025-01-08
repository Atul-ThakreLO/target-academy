import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axiosConfig";

export default function (id) {
  return useQuery({
    queryKey: ["subjects"],
    queryFn: async () => {
      console.log(id);

      const resp = await axiosInstance.get("/subject/by/class", {
        params: {
          class_id: id,
        },
      });
      return resp.data;
    },
  });
}
