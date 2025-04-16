import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api_methods from "../api/secondary-api";
import { toast } from "react-toastify";

export const useGetClass = (enable = true) => {
  return useQuery({
    queryKey: ["class"],
    queryFn: () => api_methods.getRequest("/class/s/all"),
    enabled: enable
  });
};

export const useAddClass = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => api_methods.postRequest("/class", data),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["class"]);
      toast.success("Class Created");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
};

export const useDeleteClass = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => api_methods.deleteRequest(`/class/${data}`),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["class"]);
      toast.success("Class Created");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
};
