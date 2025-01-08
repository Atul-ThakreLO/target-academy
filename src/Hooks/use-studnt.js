import { useMutation, useQuery } from "@tanstack/react-query";
import studentApi from "../api/student-api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useGetStudentById = (id = 1) => {
  return useQuery({
    queryKey: ["student", id],
    queryFn: () =>
      studentApi.getStudent("/student/0c95be1b-cb5e-4774-9322-3b3d15cba7c7"),
    onSuccess: (data) => {
      console.log(data);
    },
    retry: 2,
  });
};

const useStudentLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data) => studentApi.loginStudent("/student/l/login", data),
    onSuccess: (data) => {
      toast.success("Login Success", {
        onOpen: () => {
          navigate("/student");
        },
      });
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
};

const useStudentLogout = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: () => studentApi.logoutStudent("/student/l/logout"),
    onSuccess: (data) => {
      toast.success("Logout Success", {
        onOpen: () => {
          navigate("/login");
        },
      });
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
};

export { useGetStudentById, useStudentLogin, useStudentLogout };
