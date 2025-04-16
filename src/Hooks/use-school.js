import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api_methods from "../api/secondary-api";
import { toast } from "react-toastify";

export const useGetSchool = (enable = true) => {
  return useQuery({
    queryKey: ["school"],
    queryFn: () => api_methods.getRequest("/school/s/all"),
    enabled: enable,
  });
};

export const useAddSchool = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => api_methods.postRequest("/school", data),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["school"]);
      toast.success("School Created");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
};

export const useEditSchool = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => api_methods.putRequest("/school", data),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["school"]);
      toast.success("School Created");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
};

export const useDeleteSchool = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => api_methods.deleteRequest(`/school/${data}`),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["school"]);
      toast.success("School Created");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
};
