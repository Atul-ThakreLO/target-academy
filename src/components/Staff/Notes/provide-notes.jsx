import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import SelectField from "@/components/Utils/Form-Fields/select-field";
import { useGetClass } from "@/Hooks/use-class";
import { useGetSubjectsByClass } from "@/Hooks/use-subject";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ProvideNotes = () => {
  const [classID, setClassID] = useState("");
  const { data: ClassData, isLoading: ClassLoading } = useGetClass();
  const { data: SubjectData, isLoading: SubjectLoading } =
    useGetSubjectsByClass(classID);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    // resolver: zodResolver(NotesSchema),
    defaultValues: {
      class_id: "",
    },
  });

  const setClassValue = (val) => {
    setClassID(val);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="px-12 mt-10 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-between items-center"
      >
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
          <Label>Notes</Label>
        </div>
        <div>
          <Label>Batch</Label>
        </div>
        <div>
          <Button>Provide</Button>
        </div>
      </form>
    </div>
  );
};

export default ProvideNotes;
