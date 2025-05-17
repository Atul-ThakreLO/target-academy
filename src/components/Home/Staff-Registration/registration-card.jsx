import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema } from "@/Zod Schema/Staff/registration.-schema";
import { useStaffRegistration } from "@/Hooks/use-staff";
import FormStaff from "./Forms/form-staff";

const RegistrationCard = ({ token, email }) => {
  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: email,
    },
    resolver: zodResolver(registrationSchema),
  });

  const mutation = useStaffRegistration(token);

  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate(data);
  };

  const handleChange = (e) => {
    setValue("avatar", e.target.files?.[0]);
  };

  return (
    <div className="border rounded-xl p-5 flex gap-3 mx-auto my-10 max-w-[600px]">
      <FormStaff
        mutation={mutation}
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        control={control}
        handleChange={handleChange}
      />
    </div>
  );
};

export default RegistrationCard;
