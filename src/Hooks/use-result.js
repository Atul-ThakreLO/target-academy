import { useMutation, useQuery } from "@tanstack/react-query";
import api_methods from "@/api/secondary-api";
import { toast } from "react-toastify";

export const useAddStudentResult = (refetch) => {
  return useMutation({
    mutationFn: (data) => api_methods.postRequest("/staff/api/v1/result", data),
    onSuccess: () => {
      toast.success("Added");
      refetch();
    },
  });
};

export const useGetStudents = (data) => {
  return useQuery({
    queryKey: ["result", data?.class_id, data?.session],
    queryFn: () =>
      api_methods.getRequest("/staff/api/v1/result/get/students", data),
    enabled: !!data,
    refetchOnWindowFocus: false,
  });
};

export const useGetResult = () => {
  return useQuery({
    queryKey: ["results"],
    queryFn: () => api_methods.getRequest("/staff/api/v1/result"),
  });
};

export const useGetHomeResult = (data) => {
  console.log(!!data.id);
  return useQuery({
    queryKey: ["results", "home", data.id, data.session],
    queryFn: () => api_methods.getRequest("home/api/v1/result", data),
    enabled: !!data.id
  });
};

export const useUpdateResult = (refetch) => {
  return useMutation({
    mutationFn: (data) => api_methods.putRequest("/staff/api/v1/result", data),
    onSuccess: () => {
      toast.success("Updated result");
      refetch();
    },
  });
};

export const useDeleteResult = (refetch) => {
  return useMutation({
    mutationFn: (data) =>
      api_methods.deleteRequest(`/staff/api/v1/result/${data}`),
    onSuccess: () => {
      toast.success("Deleted Success");
      refetch();
    },
  });
};

export const useDeleteManyResult = (refetch) => {
  return useMutation({
    mutationFn: (data) =>
      api_methods.postRequest("/staff/api/v1/result/delete/many", data),
    onSuccess: () => {
      toast.success("Deleted Success");
      refetch();
    },
  });
};
