import React, { useState } from "react";
import { Loader2, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCreateAssignment } from "@/Hooks/use-assignment";
import { useForm } from "react-hook-form";
import SelectField from "@/components/Utils/Form-Fields/select-field";
import InputField from "@/components/Utils/input-field";
import { useGetClass } from "@/Hooks/use-class";
import { useGetSubjectsByClass } from "@/Hooks/use-subject";
import { useGetBatchByClass } from "@/Hooks/use-batch";

const AddAssignments = () => {
  const [classId, setClassId] = useState("");
  const { data: classData, isLoading: classLoading } = useGetClass();
  const { data: subjectData, isLoading: subjectLoading } =
    useGetSubjectsByClass(classId);
  const { data: batchData, isLoading: batchLoading } =
    useGetBatchByClass(classId);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const mutation = useCreateAssignment();

  const onSubmit = (data) => {
    const { file, ...odata } = data;
    console.log(file[0], odata);
    mutation.mutate({ file: file[0], ...odata });
  };

  return (
    <div className="mt-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] justify-between items-center px-2 md:px-12">
          <div className="">
            <InputField
              label={"Title"}
              type={"text"}
              id={"title"}
              name={"title"}
              register={register}
              error={errors.title}
            />
          </div>
          <div className="">
            <InputField
              label={"Content File"}
              type={"file"}
              id={"file"}
              name={"file"}
              accept=".pdf"
              register={register}
              error={errors.file}
            />
          </div>
          <div>
            <SelectField
              control={control}
              name={"class_id"}
              placeholder={"Class"}
              selectItems={classData?.data}
              label={"Class"}
              error={errors.class_id}
              isLoading={classLoading}
              setValue={setClassId}
            />
          </div>
          <div>
            <SelectField
              control={control}
              name={"subjects_id"}
              placeholder={"Subject"}
              selectItems={subjectData?.data}
              label={"Subject"}
              error={errors.subjects_id}
              isLoading={subjectLoading}
            />
          </div>
          <div>
            <SelectField
              control={control}
              name={"batch_id"}
              placeholder={"Batch"}
              selectItems={batchData?.data}
              label={"Batch"}
              error={errors.batch_id}
              isLoading={batchLoading}
            />
          </div>
          <Button disabled={mutation.isPending}>
            {mutation.isPending ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Add Assigments"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddAssignments;
