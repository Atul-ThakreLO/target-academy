import api_methods from "@/api/secondary-api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export const useAddTestPaper = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => api_methods.postRequest("/staff/test-paper", data),
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(["test-paper"]);
      toast.success("Test Added");
    },
  });
};

export const useUpdateTestPaper = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => api_methods.putRequest("/staff/test-paper", data),
    onSuccess: (data) => {
      toast.success("Update test Papers");
      queryClient.invalidateQueries(["test-paper"]);
    },
  });
};

export const useDeleteTestPaper = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) =>
      api_methods.deleteRequest(`/staff/test-paper/${data}`),
    onSuccess: (data) => {
      toast.success("Test and Paper Deleted");
      queryClient.invalidateQueries(["test-paper"]);
    },
  });
};

export const useAddUpdateTotalMarks = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) =>
      api_methods.postRequest("/staff/api/v1/total-marks", data),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["test-paper"]);
      toast.success("Total Marks Updated");
    },
  });
};

export const useGetTestPapers = () => {
  const { data } = useSelector((state) => state.testsFilterData);
  return useQuery({
    queryKey: ["test-paper"],
    queryFn: () => api_methods.getRequest("/staff/test-papers/all", data),
  });
};

export const useDeleteManyTests = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) =>
      secondaryApi.postRequest("/staff/notes-delete/many", data),
    onSuccess: (data) => {
      toast.success("Selected Notes Deleted");
      queryClient.invalidateQueries(["notes"]);
    },
  });
};

export const useGetRecentTestPapers = (limit = 8) => {
  return useQuery({
    queryKey: ["test-paper", limit],
    queryFn: () =>
      api_methods.getRequest("/staff/api/v1/recent/test-papers", { limit }),
  });
};

export const useGetTestPaperByClass = (id, enable) => {
  // console.log(enable);
  return useQuery({
    queryKey: ["test-paper", id, "class"],
    queryFn: () => api_methods.getRequest("/staff/test-paper/by/class", id),
    enabled: enable,
  });
};

export const useGetTestPapersByID = (id) => {
  return useQuery({
    queryKey: ["test-paper", id],
    queryFn: () => api_methods.getRequest("/staff/test-paper", id),
  });
};
