import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import studentApi from "../api/student-api";
import api_methods from "../api/secondary-api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useRegisterContext } from "@/components/Home/context/register-context-provider";
import { updateStatus } from "@/components/Home/Registration/updateStatus";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuth,
  setStudentId,
} from "@/Redux/slices/Student/auth-status-slice";
import { setStudent } from "@/Redux/slices/Student/auth-student-slice";

export const useGetStudentById = (id = 1) => {
  const { student } = useSelector((state) => state.authStudent);
  return useQuery({
    queryKey: ["student", student?.id],
    queryFn: () => studentApi.getStudent("/student"),
    retry: 2,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const useGetStudents = (data) => {
  const { staff } = useSelector((state) => state.authStaff);
  return useQuery({
    queryKey: ["student", "all", staff.id],
    queryFn: () => api_methods.getRequest("/student/api/v1/all", data),
    retry: 2,
  });
};

export const useStudentLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: (data) => studentApi.loginStudent("/student/l/login", data),
    onSuccess: (data) => {
      dispatch(setStudent(data.data));
      navigate("/student");
      toast.success("Login Success");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
};

export const useStudentLogout = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: () => studentApi.logoutStudent("/student/l/logout"),
    onSuccess: (data) => {
      toast.success("Logout Success", {
        onOpen: () => {
          navigate("/student/login");
        },
      });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
};

export const useSendOTP = () => {
  const { setStage, formData, stage, setStageStatus } = useRegisterContext();
  return useMutation({
    mutationFn: (data) => {
      return studentApi.sendOTP("/student/o/send-otp", data);
    },
    onSuccess: (data) => {
      updateStatus(formData, stage, setStageStatus);
      setStage(1);
    },
    onError: (error) => {
      updateStatus(formData, stage, setStageStatus);
      toast.error(error?.response?.data);
    },
  });
};

export const useVerifyOTP = () => {
  const { setStage, stage, setStageStatus } = useRegisterContext();
  return useMutation({
    mutationFn: (data) => studentApi.verifyOTP("/student/o/verify-otp", data),
    onSuccess: (data) => {
      if (data.data.message === "verified") {
        updateStatus(data.data.message, stage, setStageStatus);
      }
      setStage(2);
    },
    onError: (error) => {
      updateStatus("error", stage, setStageStatus);
      toast.error(error?.response?.data?.message);
    },
  });
};

export const useRegisterStudent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { formData, setStage, stage, setStageStatus } = useRegisterContext();
  return useMutation({
    mutationFn: (data) =>
      studentApi.createStudent("/student", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    onSuccess: (data) => {
      updateStatus("success", stage, setStageStatus);
      setStage(3);
      dispatch(setAuth(true));
      navigate("/student");
    },
    onError: (error) => {
      updateStatus(formData, stage, setStageStatus);
      toast.error(error?.response?.data.message);
    },
  });
};

export const useUpdateStudent = () => {
  return useMutation({
    mutationFn: (data) => api_methods.putRequest("/student", data),
    onSuccess: (data) => {
      toast.success("updated sucessfully");
    },
  });
};

export const useUpdateStudentDP = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) =>
      api_methods.postRequest(
        `/student/v1/api/update/profile-picture/${id}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["student", data.data.id]);
    },
  });
};
