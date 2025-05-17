import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api_methods from "@/api/secondary-api";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export const useCreateAssignment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) =>
      await api_methods.postRequest("/staff/api/v1/assignment", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["assignments"]);
      toast.success("Assignment Created");
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
};

export const useGetAssignments = () => {
  const { data } = useSelector((state) => state.assignmentFilterData);
  return useQuery({
    queryKey: ["assignments"],
    queryFn: async () =>
      await api_methods.getRequest("/staff/api/v1/assignment/s/all", data),
    // refetchOnWindowFocus: false,
  });
};

export const useGetRecentAssignments = (limit = 5) => {
  return useQuery({
    queryKey: ["assignments", limit],
    queryFn: async () =>
      await api_methods.getRequest("/staff/api/v1/recent/assignment", {
        limit,
      }),
  });
};

export const useGetAssignmentStudents = (data, open) => {
  return useQuery({
    queryKey: ["assihnment", "completed"],
    queryFn: async () =>
      await api_methods.getRequest(
        "/staff/api/v1/assignment/student/compltion",
        data
      ),
    enabled: open,
  });
};

export const useUpdateAssignmentData = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      await api_methods.putRequest("/staff/api/v1/assignment", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["assignments"]);
      toast.success("Updated");
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
};

export const useDeleteAssignment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      await api_methods.deleteRequest(`/staff/api/v1/assignment/${data}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["assignments"]);
      toast.success("Delete");
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
};

export const useGetAssignmentsForStudent = (id, subjectID) => {
  const { student } = useSelector((state) => state.authStudent);
  return useQuery({
    queryKey: ["assignments", "student", "id", student.id],
    queryFn: async () =>
      await api_methods.getRequest("/student/api/v1/assignments", {
        batchID: id,
        subjectID,
      }),
  });
};

export const useSubmitAssignment = () => {
  const { student } = useSelector((state) => state.authStudent);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) =>
      await api_methods.postRequest("/student/api/v1/assignments", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    onSuccess: (data) => {
      toast.success("Submited");
      queryClient.invalidateQueries([
        "assignments",
        "student",
        "id",
        student.id,
      ]);
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
};

export const useUnSubmitAssignment = () => {
  const { student } = useSelector((state) => state.authStudent);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      await api_methods.deleteRequest(`/student/api/v1/assignments/${data}`);
    },
    onSuccess: (data) => {
      toast.success("UnSubmited");
      queryClient.invalidateQueries([
        "assignments",
        "student",
        "id",
        student.id,
      ]);
    },
    onError: (error) => {
      // toast.error(error.response.data.message);
    },
  });
};
