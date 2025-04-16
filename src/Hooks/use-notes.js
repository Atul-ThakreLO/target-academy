import secondaryApi from "@/api/secondary-api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export const useAddNotes = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) =>
      secondaryApi.postRequest("/staff/notes", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    onSuccess: (data) => {
      console.log(data);
      toast.success("Added successfully");
      queryClient.invalidateQueries(["notes"]);
    },
  });
};

export const useGetNotes = () => {
  const { data } = useSelector((state) => state.notesFilterData);
  return useQuery({
    queryKey: ["notes"],
    queryFn: () => secondaryApi.getRequest("/staff/notes-All", data),
    // refetchInterval: 1000,
  });
};

export const useUpdateNotes = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => secondaryApi.putRequest("/staff/notes", data),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["notes"]);
      toast.success("Updated Successfully");
    },
  });
};

export const useDeleteNotes = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => {
      console.log("called");
      return secondaryApi.deleteRequest(`/staff/notes/${data}`);
    },
    onSuccess: (data) => {
      toast.success("Notes Deleted");
      queryClient.invalidateQueries(["notes"]);
    },
  });
};

export const useDeleteManyNotes = () => {
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

export const useProvideNotes = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) =>
      secondaryApi.postRequest("/staff/notes/many/provide", data),
    onSuccess: (data) => {
      console.log(data.data);
      toast.success("Notes Provided");
      queryClient.invalidateQueries(["provide", "notes"]);
    },
  });
};

export const useGetProvidedNotes = () => {
  const { data } = useSelector((state) => state.providednotesFilterData);
  return useQuery({
    queryKey: ["provide", "notes"],
    queryFn: () => secondaryApi.getRequest("/staff/notes/many/provide", data),
  });
};

export const useEditProvideNotes = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) =>
      secondaryApi.putRequest("/staff/notes/many/provide", data),
    onSuccess: (data) => {
      console.log(data.data);
      toast.success("Notes Provided");
      queryClient.invalidateQueries(["provide", "notes"]);
    },
  });
};

export const useUnprovideNotes = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) =>
      secondaryApi.deleteRequest(`/staff/notes/many/provide/${data}`),
    onSuccess: (data) => {
      toast.success("Unprovided Successfully");
      queryClient.invalidateQueries(["provide", "notes"]);
    },
  });
};

export const useUnProvideManyNotes = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) =>
      secondaryApi.postRequest("/staff/provide/notes-delete/many", data),
    onSuccess: (data) => {
      toast.success("Selected Notes are Unprovided");
      queryClient.invalidateQueries(["provide", "notes"]);
    },
  });
};

// export const useActive = () => {
//   return useMutation({
//     mutationFn: (data) =>
//       secondaryApi.putRequest("/satff/notes/active/status", data),
//     onSuccess: (data) => {
//       toast.success("status changed");
//     },
//   });
// };
export const useGetNotesForStudent = (batchID, subjectID) => {
  const { student } = useSelector((state) => state.authStudent);
  return useQuery({
    queryKey: ["notes", "student", student.id],
    queryFn: () =>
      secondaryApi.getRequest("/student/api/v1/notes", {
        batch_id: batchID,
        subject_id: subjectID,
      }),
  });
};
