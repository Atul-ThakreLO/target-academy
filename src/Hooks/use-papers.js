import secondaryApi from "@/api/secondary-api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export const useAddPaper = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) =>
      secondaryApi.postRequest("/staff/paper", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    onSuccess: (data) => {
      console.log(data);
      toast.success("Added successfully");
      queryClient.invalidateQueries(["papers"]);
    },
  });
};

export const useGetPapers = () => {
  const { data } = useSelector((state) => state.papersFilterData);
  return useQuery({
    queryKey: ["papers"],
    queryFn: () => secondaryApi.getRequest("/staff/paper-All", data),
    // refetchInterval: 1000,
  });
};

export const useUpdatePaper = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => secondaryApi.putRequest("/staff/paper", data),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["papers"]);
      toast.success("Updated Successfully");
    },
  });
};

export const useDeletePaper = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => {
      console.log("called");
      return secondaryApi.deleteRequest(`/staff/paper/${data}`);
    },
    onSuccess: (data) => {
      toast.success("paper Deleted");
      queryClient.invalidateQueries(["papers"]);
    },
  });
};

export const useDeleteManyPaper = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) =>
      secondaryApi.postRequest("/staff/paper-delete/many", data),
    onSuccess: (data) => {
      toast.success("Selected paper Deleted");
      queryClient.invalidateQueries(["papers"]);
    },
  });
};

export const useProvidepaper = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) =>
      secondaryApi.postRequest("/staff/paper/many/provide", data),
    onSuccess: (data) => {
      console.log(data.data);
      toast.success("paper Provided");
      queryClient.invalidateQueries(["provide", "paper"]);
    },
  });
};

export const useGetProvidedpaper = () => {
  const { data } = useSelector((state) => state.providedpaperFilterData);
  return useQuery({
    queryKey: ["provide", "paper"],
    queryFn: () => secondaryApi.getRequest("/staff/paper/many/provide", data),
  });
};

export const useEditProvidepaper = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) =>
      secondaryApi.putRequest("/staff/paper/many/provide", data),
    onSuccess: (data) => {
      console.log(data.data);
      toast.success("paper Provided");
      queryClient.invalidateQueries(["provide", "paper"]);
    },
  });
};

export const useUnprovidepaper = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) =>
      secondaryApi.deleteRequest(`/staff/paper/many/provide/${data}`),
    onSuccess: (data) => {
      toast.success("Unprovided Successfully");
      queryClient.invalidateQueries(["provide", "paper"]);
    },
  });
};

export const useUnProvideManypaper = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) =>
      secondaryApi.postRequest("/staff/provide/paper-delete/many", data),
    onSuccess: (data) => {
      toast.success("Selected paper are Unprovided");
      queryClient.invalidateQueries(["provide", "paper"]);
    },
  });
};

export const useGetPapersForStudent = (classID, subjectID, session) => {
  const { student } = useSelector((state) => state.authStudent);
  return useQuery({
    queryKey: ["papers", "student", student.id],
    queryFn: () =>
      secondaryApi.getRequest("/student/api/v1/papers", {
        class_id: classID,
        subject_id: subjectID,
        session: session
      }),
  });
};

// export const useActive = () => {
//   return useMutation({
//     mutationFn: (data) =>
//       secondaryApi.putRequest("/satff/paper/active/status", data),
//     onSuccess: (data) => {
//       toast.success("status changed");
//     },
//   });
// };
