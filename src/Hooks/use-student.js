import { useMutation, useQuery } from "@tanstack/react-query";
import studentApi from "../api/student-api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useRegisterContext } from "@/components/Home/context/register-context-provider";
import { updateStatus } from "@/components/Home/Registration/updateStatus";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuth,
  setStudentId,
} from "@/Redux/slices/Student/auth-status-slice";

export const useGetStudentById = (id = 1) => {
  const { student_id } = useSelector((state) => state.authStudent);
  return useQuery({
    queryKey: ["student", student_id],
    queryFn: () =>
      studentApi.getStudent("/student"),
    retry: 2,
  });
};

export const useStudentLogin = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  return useMutation({
    mutationFn: (data) => studentApi.loginStudent("/student/l/login", data),
    onSuccess: (data) => {
      dispatch(setAuth(true));
      dispatch(setStudentId(data.data?.response.student_id));
      toast.success("Login Success", {
        onOpen: () => {
          navigate("/student");
        },
      });
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
          navigate("/login");
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
