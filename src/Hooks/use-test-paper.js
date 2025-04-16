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

export const useGetTestPapers = () => {
  const { data } = useSelector((state) => state.testsFilterData);
  return useQuery({
    queryKey: ["test-paper"],
    queryFn: () => api_methods.getRequest("/staff/test-papers/all", data),
  });
};

export const useGetRecentTestPapers = (limit = 5) => {
  return useQuery({
    queryKey: ["test-paper", limit],
    queryFn: () =>
      api_methods.getRequest("/staff/api/v1/recent/test-papers", { limit }),
  });
};

export const useGetTestPaperByClass = (id, enable) => {
  console.log(enable);
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
