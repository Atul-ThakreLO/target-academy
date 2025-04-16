import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axiosConfig";
import api_methods from "../api/secondary-api";
import { toast } from "react-toastify";

export const useAddSubjects = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => api_methods.postRequest("/subject", data),
    onSuccess: (data) => {
      toast.success("Subject Added");
      queryClient.invalidateQueries(["subjects", data.data.class_id]);
      queryClient.invalidateQueries(["subjects", "class"]);
      console.log(data.data.class_id);
    },
  });
};

export const useGetSubjectsByClass = (id, open = true) => {
  return useQuery({
    queryKey: ["subjects", id],
    queryFn: () =>
      api_methods.getRequest("/subject/by/class", { class_id: id }),
    enabled: !!id && open,
  });
};

export const useGetSubjectsAll = () => {
  return useQuery({
    queryKey: ["subjects", "class"],
    queryFn: () => api_methods.getRequest("/subjects/group/class"),
  });
};

export const useSubjectDelete = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => api_methods.deleteRequest(`/subject/${data}`),
    onSuccess: (data) => {
      toast.success("Subject Removed");
      queryClient.invalidateQueries(["subjects", data.data.class_id]);
      console.log(data.data.class_id);
    },
  });
};
