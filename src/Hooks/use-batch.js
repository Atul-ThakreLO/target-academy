import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api_methods from "../api/secondary-api";
import { toast } from "react-toastify";

export const useAddBatch = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => api_methods.postRequest("/staff/batch", data),
    onSuccess: (data) => {
      toast.success("Batch Added");
      queryClient.invalidateQueries(["batch", data.data.class_id]);
      queryClient.invalidateQueries(["batch", "class"]);
    },
  });
};

export const useGetBatchByClass = (id, open = true) => {
  return useQuery({
    queryKey: ["batch", id],
    queryFn: () => api_methods.getRequest("/batch/by/class", { class_id: id }),
    enabled: !!id && open,
  });
};

export const useGetClassBatch = () => {
  return useQuery({
    queryKey: ["batch", "class"],
    queryFn: () => api_methods.getRequest("/batches/group/class"),
  });
};

export const useGetBatchAll = () => {
  return useQuery({
    queryKey: ["batch", "class"],
    queryFn: () => api_methods.getRequest("/batch/s/all"),
  });
};

export const useBatchDelete = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => api_methods.deleteRequest(`/staff/batch/${data}`),
    onSuccess: (data) => {
      toast.success("Batch Removed");
      queryClient.invalidateQueries(["Batch", data.data.class_id]);
      console.log(data.data.class_id);
    },
  });
};

export const useBatchUpdate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => api_methods.putRequest("/staff/batch", data),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["batch", "class"]);
      toast.success("Edited successful");
    },
  });
};


