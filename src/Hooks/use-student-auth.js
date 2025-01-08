import { setAuth } from "@/Redux/slices/Student/auth-status-slice";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import studentApi from "../api/student-api";

const useStudentAuth = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.authStudent);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["student", "auth", "status"],
    queryFn: async () => {
      console.log("Checking token");
      const data = await studentApi.validateStudentToken("/student/auth");
      if (data?.data.message === "Token verified") {
        console.log("Token verified");
        dispatch(setAuth(true));
      }
      return data;
    },
    enabled: !isAuthenticated,
    retry: 2,
  });

  return { isAuthenticated, isLoading, isError };
};

export default useStudentAuth;
