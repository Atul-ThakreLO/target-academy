import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api_methods from "../api/secondary-api";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export const useGetMarks = (data) => {
  return useQuery({
    queryKey: ["marks", data.id],
    queryFn: () => api_methods.getRequest("/staff/marks", data),
    enabled: !!data.batchId,
  });
};

export const useAddMarksByTest = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => api_methods.postRequest("/staff/marks", data),
    onSuccess: () => {
      queryClient.invalidateQueries(["marks", id]);
      toast.success("Marks Added");
    },
  });
};

export const useEditMarks = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => api_methods.putRequest("/staff/marks", data),
    onSuccess: () => {
      toast.success("Marks Edited");
      queryClient.invalidateQueries(["marks"]);
    },
  });
};

export const useDeleteMarks = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => api_methods.deleteRequest(`/staff/marks/${data}`),
    onSuccess: () => {
      toast.success("Marks Deleted");
      queryClient.invalidateQueries(["marks"]);
    },
  });
};

export const useGetMarksForStudent = () => {
  const { student } = useSelector((state) => state.authStudent);
  return useQuery({
    queryKey: ["marks", "student", student.id],
    queryFn: () => api_methods.getRequest("/student/api/v1/marks"),
  });
};
