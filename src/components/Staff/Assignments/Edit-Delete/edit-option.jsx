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
import InputField from "@/components/Utils/input-field";
import { useUpdateAssignmentData } from "@/Hooks/use-assignment";
import { useGetBatchByClass } from "@/Hooks/use-batch";
import { useGetClass } from "@/Hooks/use-class";
import { useGetSubjectsByClass } from "@/Hooks/use-subject";
import { EditAssignmentSchema } from "@/Zod Schema/Staff/secondary-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit, Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const EditOption = ({ data, editMutation }) => {
  const [classID, setClassID] = useState(data?.class_id);
  const [open, setOpen] = useState(false);
  

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: data.title,
      id: data.id,
      class_id: data.class_id,
      subject_id: data.subject_id,
      batch_id: data.batch_id,
    },
    resolver: zodResolver(EditAssignmentSchema),
  });

  const { data: classData, isLoading: classLoading } = useGetClass(open);
  const { data: subjectData, isLoading: subjectLoading } =
    useGetSubjectsByClass(classID, open);
  const { data: batchData, batchLoading } = useGetBatchByClass(classID, open);

  useEffect(() => {
    if (classID !== data.class_id) {
      setValue("subject_id", "");
      setValue("batch_id", "");
    }
  }, [classID]);

  const setClassValue = (val) => {
    setClassID(val);
  };

  const onSubmit = (formdata) => {
    console.log(formdata);
    editMutation.mutate(formdata);
  };

  useEffect(() => {
    if (editMutation.isSuccess) {
      setOpen(false);
    }
  }, [editMutation.isSuccess]);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="p-2">
          <Edit />
        </Button>
      </DialogTrigger>
      {/* <EditOptionsAll data={data} className="hover:bg-muted" /> */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span>Edit Assignmen: {data.title}</span>
          </DialogTitle>
          <DialogDescription>
            <b>Note: </b>Please Reselect The subject if the class was changed
          </DialogDescription>
        </DialogHeader>
        <form id="edit-notes" onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register("id")} hidden />
          <div>
            <InputField
              label={"title"}
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
              placeholder={"Class"}
              selectItems={classData?.data}
              label={"Class"}
              error={errors.class_id}
              setValue={setClassValue}
              isLoading={classLoading}
            />
          </div>
          <div>
            <SelectField
              control={control}
              name={"subject_id"}
              placeholder={"Subjects"}
              selectItems={subjectData?.data}
              label={"Subject"}
              error={errors.subject_id}
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
        </form>

        <DialogFooter>
          <Button form={"edit-notes"} disabled={editMutation.isPending}>
            {editMutation.isPending ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Apply Changes"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditOption;
