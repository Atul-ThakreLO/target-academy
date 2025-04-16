import { Button } from "@/components/ui/button";
import { Loader, Minus, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import JobCard from "./job-card";
import SelectField from "@/components/Utils/Form-Fields/select-field";
import { useForm } from "react-hook-form";
import InputField from "@/components/Utils/input-field";
import TextareaField from "@/components/Utils/Form-Fields/textarea-field";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobPostingSchema } from "@/Zod Schema/Staff/job-schema";
import { useGetJobs, usePostJob } from "@/Hooks/use-job";
import { toast } from "react-toastify";
import DataNotFound from "@/components/Utils/Assets/data-not-found";

const Job = () => {
  const [add, setAdd] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      role: "",
      description: "",
      qualification: "",
      salary: "",
      experience: "",
    },
    resolver: zodResolver(jobPostingSchema),
  });

  const mutation = usePostJob();
  const { data, isFetched, isLoading, error, isError } = useGetJobs();

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  useEffect(() => {
    if (isError) {
      toast.error(error?.response?.data?.message);
    }
  }, [isError]);

  useEffect(() => {
    if (mutation.isSuccess) {
      setAdd(false);
    }
  }, [mutation.isSuccess]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h6 className="text-3xl font-semibold gradient-title-custom">
          Jobs Section
        </h6>
        {/* <p className="text-gray-500 mt-1">Add or Provide Notes</p> */}
        {add ? (
          <Button
            variant="outline"
            onClick={() => setAdd((prev) => !prev)}
            className="border-red-500 text-red-500"
          >
            <Minus /> Cancel
          </Button>
        ) : (
          <Button variant="outline" onClick={() => setAdd((prev) => !prev)}>
            <Plus /> Add New
          </Button>
        )}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${
          add ? "h-full" : "h-0"
        } duration-300 overflow-hidden border-b mt-5 px-2`}
      >
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] justify-between items-start gap-4">
          <div className="">
            <InputField
              label={"Job Title"}
              type={"text"}
              id={"job_title"}
              name={"title"}
              register={register}
              error={errors.title}
            />
          </div>
          <div className="">
            <SelectField
              control={control}
              name={"role"}
              placeholder={"Role"}
              selectItems={["TEACHER", "MANAGEMENT"]}
              label={"Select Role"}
              error={errors.role}
            />
          </div>
          <div className="">
            <InputField
              label={"Qualification"}
              type={"text"}
              id={"qualification"}
              name={"qualification"}
              register={register}
              error={errors.qualification}
            />
          </div>
          <div className="">
            <InputField
              label={"Experience"}
              type={"text"}
              id={"experience"}
              name={"experience"}
              register={register}
              error={errors.experience}
            />
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] mt-5">
          <div className="">
            <TextareaField
              label={"Description"}
              id={"description"}
              name={"description"}
              register={register}
              error={errors.description}
              className="w-full border-2 rounded-lg p-2 bg-background"
              classNameLabel={"text-end"}
              rows={4}
            />
          </div>
          <div className="h-full flex justify-between px-2 md:px-4 items-end pb-3">
            <div className="">
              <InputField
                label={"Salary Upto"}
                type={"text"}
                id={"salary"}
                name={"salary"}
                register={register}
                error={errors.salary}
              />
            </div>
            <Button type="submit" disabled={mutation.isPending}>
              {mutation.isPending ? (
                <Loader className="animate-spin" />
              ) : (
                <>
                  <Plus /> Add New
                </>
              )}
            </Button>
          </div>
        </div>
      </form>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-6 mt-10">
        {isLoading ? (
          <Loader className="animate-spin" />
        ) : data?.data.length > 0 ? (
          data?.data?.map((job, index) => <JobCard key={index} data={job} />)
        ) : (
          <DataNotFound
            text={"Jobs Are Not listed Yet Click On Add Button To Add"}
          />
        )}
      </div>
      {/* <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-6">
        <JobAppliedCard />
        <JobAppliedCard />
        <JobAppliedCard />
      </div> */}
    </div>
  );
};

export default Job;
