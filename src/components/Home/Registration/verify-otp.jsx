import React, { useEffect, useState } from "react";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Controller, useForm } from "react-hook-form";
import { useVerifyOTP } from "@/Hooks/use-student";
import { useRegisterContext } from "../context/register-context-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { otpSchema } from "./register-zod-schema";

const VerifyOtp = ({ onSubmitMutations }) => {
  //   const [value, setValue] = useState();
  const { formData } = useRegisterContext();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      otp: "",
    },
    resolver: zodResolver(otpSchema),
  });

  const mutation = useVerifyOTP();

  const onSubmit = (data) => {
    mutation.mutate({ email: formData.student.email, otp: data.otp });
  };

  useEffect(() => {
    onSubmitMutations({
      isPending: mutation.isPending,
      isError: mutation.isError,
      error: mutation.error,
      isSuccess: mutation.isSuccess,
    });

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

  return (
    <form id="form-2" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="otp"
        render={({ field }) => (
          <InputOTP
            maxLength={6}
            {...field}
            pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        )}
      />
      {errors.otp && <p className="text-red-500">{errors.otp.message}</p>}
      {/* <button type="submit">submit</button> */}
    </form>
  );
};

export default VerifyOtp;
