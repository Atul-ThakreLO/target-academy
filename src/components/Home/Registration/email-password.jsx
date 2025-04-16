import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRegisterContext } from "../context/register-context-provider";
import { updateStatus } from "./updateStatus";
import { useSendOTP } from "@/Hooks/use-student";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailPassSchema } from "./register-zod-schema";
import InputField from "@/components/Utils/input-field";

// const { formData, stage, setStageStatus } = useRegisterContext();
const EmailPassword = ({ onSubmitMutations }) => {
  // ----------------------------------States
  // const [isZodError, setIsZodError] = useState(false);

  // -----------------------------------context
  const {
    formData,
    setFormData,
    stage,
    setStage,
    stageStatus,
    setStageStatus,
  } = useRegisterContext();

  // -----------------------------------useForm
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      ...formData.student,
      confirm_password: "",
    },
    resolver: zodResolver(emailPassSchema),
  });

  // ---------------------------------onSubmit
  const mutation = useSendOTP();

  const onSubmit = (student) => {
    delete student.confirm_password;
    mutation.mutate(student);
    setFormData((prev) => ({ ...prev, student }));
  };

  // if (isValid) {
  //   setIsZodError(true);
  // }

  // -------------------------------onSubmitMutations

  useEffect(() => {
    onSubmitMutations({
      isPending: mutation.isPending,
      isError: mutation.isError,
      error: mutation.error,
      isSuccess: mutation.isSuccess,
    });
    if (mutation.isError) {
      setFormData({});
    }
    return () => {
      onSubmitMutations({
        isPending: false,
        isError: false,
        error: null,
        isSuccess: false,
      });
    };
  }, [
    mutation.isPending,
    mutation.isError,
    mutation.error,
    mutation.isSuccess,
  ]);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      updateStatus(formData, stage, setStageStatus);
    }
  }, [errors]);
  //   useEffect(() => {
  //     if (!!formData.student) {
  //       setStage(1);
  //       updateStatus(formData, stage, setStageStatus);
  //     }
  //   }, [formData]);

  return (
    <form
      id="form-1"
      onSubmit={handleSubmit(onSubmit)}
      encType="multipart/form-data"
    >
      <InputField
        label={"Email"}
        type={"text"}
        id={"email"}
        name={"email"}
        register={register}
        error={errors.email}
      />
      <InputField
        label={"Password"}
        type={"password"}
        id={"newPassword"}
        name={"password"}
        register={register}
        error={errors.password}
        autoComplete={"new password"}
      />
      <InputField
        label={"Confirm Password"}
        type={"password"}
        id={"confirmPassword"}
        name={"confirm_password"}
        register={register}
        error={errors.confirm_password}
        autoComplete={"confirm password"}
      />
    </form>
  );
};

export default EmailPassword;
