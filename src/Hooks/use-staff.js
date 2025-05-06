import staffApi from "@/api/staff-api";
import { setStaff } from "@/Redux/slices/staff/auth-staff-slice";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useStaffRegistration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data) =>
      staffApi.postRequest("/admin/staff", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    onSuccess: (data) => {
      dispatch(setStaff(data.data.staffResp));
      toast.success("Registered Succeessfully");
      navigate("/staff");
    },
  });
};

export const useStaffLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data) => staffApi.postRequest("/staff/login", data),
    onSuccess: (data) => {
      dispatch(setStaff(data.data));
      toast.success("Loged in Succeessfully");
      navigate("/staff");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
};

export const useStaffLogOut = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: () => staffApi.postRequest("/staff/logout"),
    onSuccess: () => {
      navigate("/staff/login");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
};

export const useGetStaff = () => {
  const { staff } = useSelector((state) => state.authStaff);
  return useQuery({
    queryKey: ["staff", staff?.id],
    queryFn: () => staffApi.getRequest("/admin/staff"),
    refetchOnWindowFocus: false,
  });
};

export const useGetAllStaff = (data) => {
  return useQuery({
    queryKey: ["staff", "all"],
    queryFn: () => staffApi.getRequest("/admin/staffs/all", data),
  });
};

export const useUpdateStaff = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => staffApi.putRequest("/admin/staff", data),
    onSuccess: (data) => {
      toast.success("Updated Succeessfully");
      console.log(data.data.office_staff_id);
      queryClient.invalidateQueries(["staff", data.data.office_staff_id]);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
};

export const useUpdateStaffDP = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) =>
      staffApi.postRequest(`/staff/update/profile-picture/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    onSuccess: (data) => {
      console.log(data.data);
      queryClient.invalidateQueries(["staff", data.data.id]);
    },
  });
};

export const useGetDashboard = () => {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: () => staffApi.getRequest("/staff/api/v1/get/dashboard"),
  });
};

export const useActiveInActive = (field, params) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) =>
      staffApi.postJost(`/staff/api/v1/control-panel/${field}`, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries([...params]);
      toast.success(`${field} status changed`);
    },
  });
};
