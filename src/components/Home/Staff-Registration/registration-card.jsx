import { Separator } from "@/components/ui/separator";
import React from "react";
import InputField from "@/components/Utils/input-field";
import SelectField from "@/components/Utils/Form-Fields/select-field";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema } from "@/Zod Schema/Staff/registration.-schema";
import { Button } from "@/components/ui/button";
import { useStaffRegistration } from "@/Hooks/use-staff";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FormStaff from "./Forms/form-staff";

const RegistrationCard = ({ job_id }) => {
  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registrationSchema),
  });

  const mutation = useStaffRegistration();

  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate({ ...data, job_id });
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
