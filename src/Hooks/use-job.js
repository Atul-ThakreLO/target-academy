import staffApi from "@/api/staff-api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const usePostJob = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => staffApi.postJost("/admin/job/", data),
    onSuccess: (data) => {
      toast.success("Job Created Successfully");
      queryClient.invalidateQueries({ queryKey: ["Jobs"] });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
};

export const useGetJobs = () => {
  return useQuery({
    queryKey: ["Jobs"],
    queryFn: () => staffApi.getJobs("/admin/job/s/all"),
  });
};

export const useApplyJob = () => {
  return useMutation({
    mutationFn: (data) =>
      staffApi.applyJob("/job/apply", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

export const useGetJobApplications = (id, state) => {
  return useQuery({
    queryKey: ["application", id],
    queryFn: () => staffApi.getRequest("/job/all-applications", { id }),
    enabled: state,
  });
};

export const useUpdateJob = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => staffApi.putRequest("/admin/job/", data),
    onSuccess: () => {
      toast.success("Updated Successfully");
      queryClient.invalidateQueries(["Jobs"]);
    },
    onError: (err) => {
      toast.error(err.response?.data?.message);
    },
  });
};

export const useDeleteJob = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => staffApi.deleteRequest(`/admin/job/${data}`),
    onSuccess: () => {
      toast.success("Deleted Successfully");
      queryClient.invalidateQueries(["Jobs"]);
    },
    onError: (err) => {
      toast.error(err.response?.data?.message);
    },
  });
};

export const useAcceptJobLetter = () => {
  return useMutation({
    mutationFn: (data) => staffApi.postRequest("/admin/accept/job", data),
    onSuccess: () => {
      toast.success("Accepted Successfully");
    },
    onError: (err) => {
      toast.error(err.response?.data?.message);
    },
  });
};

