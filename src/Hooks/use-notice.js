import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api_methods from "@/api/secondary-api";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export const useCreateNotice = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => api_methods.postRequest("/staff/api/v1/notice", data),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["notices"]);
      toast.success("Notice Created");
    },
  });
};

export const useGetNotices = () => {
  return useQuery({
    queryKey: ["notices"],
    queryFn: () => api_methods.getRequest("/staff/api/v1/notice"),
  });
};

export const useEditNotice = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => api_methods.putRequest("/staff/api/v1/notice", data),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["notices"]);
      toast.success("Notice Edited");
    },
  });
};

export const useDeleteNotice = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) =>
      api_methods.deleteRequest(`/staff/api/v1/notice/${data}`),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["notices"]);
      toast.success("Notice Edited");
    },
  });
};

export const useGetNoticeForStudent = () => {
  const { student } = useSelector((state) => state.authStudent);
  return useQuery({
    queryKey: ["notice", "student", student.id],
    queryFn: () => api_methods.getRequest("/student/api/v1/notice"),
  });
};
