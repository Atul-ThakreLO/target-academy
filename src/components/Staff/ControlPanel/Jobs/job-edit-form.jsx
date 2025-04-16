import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SelectField from "@/components/Utils/Form-Fields/select-field";
import TextareaField from "@/components/Utils/Form-Fields/textarea-field";
import InputField from "@/components/Utils/input-field";
import { useUpdateJob } from "@/Hooks/use-job";
import { jobPostingSchema } from "@/Zod Schema/Staff/job-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit, Loader, Save } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";

const JobEditForm = ({ defalut }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: defalut.title,
      role: defalut.role,
      description: defalut.description,
      qualification: defalut.qualification,
      salary: defalut.salary,
      experience: defalut.experience,
    },
    resolver: zodResolver(jobPostingSchema),
  });

  const mutation = useUpdateJob();

  const onSubmit = (data) => {
    mutation.mutate({ id: defalut.id, ...data });
    console.log(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Edit /> Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit</DialogTitle>
          <DialogDescription>
            Make changes to Job here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form
          id="job-edit"
          onSubmit={handleSubmit(onSubmit)}
          className={`overflow-hidden border-b mt-5 px-2`}
        >
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] items-start gap-4">
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
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
            <div className="">
              <TextareaField
                label={"Description"}
                id={"description"}
                name={"description"}
                register={register}
                error={errors.description}
                className="w-full border-2 rounded-lg p-2"
                classNameLabel={"text-end"}
                rows={4}
              />
            </div>
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
          </div>
        </form>
        <DialogFooter>
          <Button
            type="submit"
            form={"job-edit"}
            //    disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <Loader className="animate-spin" />
            ) : (
              <>
                <Save /> Save Changes
              </>
            )}
            {/* <Save /> Save Changes */}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default JobEditForm;
