import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SelectField from "@/components/Utils/Form-Fields/select-field";
import InputField from "@/components/Utils/input-field";
import { useApplyJob } from "@/Hooks/use-job";
import {
  setIsApplied,
  setIsLoading,
} from "@/Redux/slices/staff/job-apply-slice";
import { jobApplySchema, resumeSchema } from "@/Zod Schema/Staff/job-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ZodError } from "zod";

const CareerForm = (id) => {
  const [file, setFile] = useState();
  const [resumeError, setResumeError] = useState(null);
  // const [isApplied, setIsApplied] = useState(false);

  const dispatch = useDispatch();
  const { isApplied } = useSelector((state) => state.jobApply);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(jobApplySchema),
  });

  const mutation = useApplyJob();

  const formFields = [
    {
      label: "Name",
      type: "text",
      id: "name",
      name: "name",
      error: errors.name,
    },
    {
      label: "Email",
      type: "email",
      id: "email",
      name: "email",
      error: errors.email,
    },
    {
      label: "Phone",
      type: "number",
      id: "phone",
      name: "phone",
      error: errors.phone,
    },
  ];

  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate({ job_id: id.id, ...data });
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      dispatch(setIsApplied(true));
      dispatch(setIsLoading(false));
    }
    if (mutation.isPending) {
      dispatch(setIsLoading(true));
    }
  }, [mutation.isSuccess, mutation.isPending]);

  const handleChange = (e) => {
    // console.log(URL.createObjectURL(e.target.files[0]));
    console.log(e.target.files?.[0]);
    try {
      const resp = resumeSchema.parse({
        resume: e.target.files?.[0],
      });
      setValue("resume", e.target.files?.[0]);
      console.log(resp);
      setResumeError(null);
    } catch (error) {
      //   console.log(error);
      if (error instanceof ZodError) {
        setResumeError(error.errors[0].message);
        error.errors.forEach((error) => {
          console.log(error);
        });
      }
    }
  };

  return (
    <>
      {isApplied ? (
        <div className="gird place-items-center mt-5">
          <CheckCircle className="text-green-500" size={80} />
        </div>
      ) : (
        <form id="career" onSubmit={handleSubmit(onSubmit)}>
          {formFields.map((field, index) => (
            <InputField
              key={index}
              label={field.label}
              type={field.type}
              id={field.id}
              name={field.name}
              register={register}
              error={field.error}
            />
          ))}
          <div className="mt-2">
            <Label htmlFor="resume">Select Your Resume</Label>
            <Input
              type="file"
              // {...register("resume")}
              name="resume"
              id="resume"
              className="mt-1"
              // placeholder="Select file"
              onChange={handleChange}
            />
          </div>

          {errors.resume && (
            <p className="text-red-500">{errors?.resume?.message}</p>
          )}
          {resumeError && <p className="text-red-500">{resumeError}</p>}
        </form>
      )}
    </>
  );
};

export default CareerForm;
