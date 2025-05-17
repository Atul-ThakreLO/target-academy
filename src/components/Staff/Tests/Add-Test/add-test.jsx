import { Button } from "@/components/ui/button";
import SelectField from "@/components/Utils/Form-Fields/select-field";
import InputField from "@/components/Utils/input-field";
import { useGetBatchByClass } from "@/Hooks/use-batch";
import { useGetClass } from "@/Hooks/use-class";
import { useGetSubjectsByClass } from "@/Hooks/use-subject";
import { useAddTestPaper } from "@/Hooks/use-test-paper";
import { Loader, Minus, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const AddTest = () => {
  const [add, setAdd] = useState(false);
  const [classID, setClassID] = useState("");

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      class_id: "",
      subject_id: "",
      batch_id: "",
    },
  });

  const { data: ClassData, isLoading: ClassLoading } = useGetClass(add);
  const { data: SubjectData, isLoading: SubjectLoading } =
    useGetSubjectsByClass(classID);
  const { data: BatchData, isLoading: BatchLoading } =
    useGetBatchByClass(classID);

  const setClassValue = (val) => {
    setClassID(val);
  };

  const mutation = useAddTestPaper();

  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate(data);
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      reset();
    }
  }, [mutation.isSuccess, mutation.isPending]);

  return (
    <div>
      <div className="flex justify-end items-center mb-5                                    ">
        <Button
          variant="outline"
          type="button"
          className={`${add ? "border-red-500 text-red-500" : ""}`}
          onClick={() => setAdd((prev) => !prev)}
        >
          {add ? (
            <>
              Cancel
              <Minus />
            </>
          ) : (
            <>
              <Plus /> Add New
            </>
          )}
        </Button>
      </div>
      <div
        className={`${
          add ? "h-full duration-500" : "h-0 duration-300"
        } overflow-hidden border-b`}
      >
        <form
          className="mb-10 gap-4 grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] justify-between items-center px-2 md:px-12"
          onSubmit={handleSubmit(onSubmit)}
        >
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
          <div>
            <SelectField
              control={control}
              name={"class_id"}
              placeholder={"Select Class"}
              selectItems={ClassData?.data}
              label={"Class"}
              error={errors.class_id}
              isLoading={ClassLoading}
              setValue={setClassValue}
            />
          </div>
          <div>
            <SelectField
              control={control}
              name={"subject_id"}
              placeholder={"Select Subject"}
              selectItems={SubjectData?.data}
              label={"Subject"}
              error={errors.subject_id}
              isLoading={SubjectLoading}
            />
          </div>
          <div>
            <SelectField
              control={control}
              name={"batch_id"}
              placeholder={"Select Batch"}
              selectItems={BatchData?.data}
              label={"Batch"}
              error={errors.batch_id}
              isLoading={BatchLoading}
            />
          </div>
          <Button disabled={mutation.isPending} className="mt-3">
            {mutation.isPending ? <Loader className="animate-spin" /> : "Add"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddTest;
