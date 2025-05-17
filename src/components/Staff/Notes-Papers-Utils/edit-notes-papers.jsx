import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
// import EditOptionsAll from "./edit-options-all";
import { Button } from "@/components/ui/button";
import { Edit, Loader, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useGetClass } from "@/Hooks/use-class";
import SelectField from "@/components/Utils/Form-Fields/select-field";
import { useForm } from "react-hook-form";
import { useGetSubjectsByClass } from "@/Hooks/use-subject";
import InputField from "@/components/Utils/input-field";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditNotesPapersSchema } from "@/Zod Schema/Staff/secondary-schema";
import {
  useGetTestPaperByClass,
} from "@/Hooks/use-test-paper";

const EditNotesPapers = ({ data, mutation, defaultValues }) => {
  // console.log(data.class_id);

  const [classID, setClassID] = useState(data.class_id);
  const [open, setOpen] = useState(false);

  const schema = EditNotesPapersSchema(data);

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
    },
    resolver: zodResolver(schema),
  });

  // useEffect(() => {
  //   if (classID !== data.class_id) {
  //     setValue("subject_id", "");
  //     if (!!data.test_id) {
  //       setValue("test_id", "");
  //     }
  //   }
  // }, [classID]);

  const { data: classData, isLoading: classLoading } = useGetClass(open);
  const { data: subjectData, isLoading: subjectLoading } =
    useGetSubjectsByClass(classID, open);

  // const { data: testsData, isLoading: testLoading } = useGetTestPaperByClass(
  //   { id: classID },
  //   !!data.test_id && open
  // );

  const setClassValue = (val) => {
    setClassID(val);
  };
  //   const mutation = useUpdateNotes();

  const onSubmit = (formdata) => {
    console.log(formdata);
    mutation.mutate(formdata);
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      setOpen(false);
    }
  }, [mutation.isSuccess]);
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
            <span>Edit Notes: {data.title}</span>
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
          {/* {!!data.test_id && (
            <div>
              <SelectField
                control={control}
                name={"test_id"}
                placeholder={"Tests"}
                selectItems={testsData?.data}
                label={"Tests"}
                error={errors.test_id}
                isLoading={testLoading}
              />
            </div>
          )} */}
        </form>

        <DialogFooter>
          <Button form={"edit-notes"} disabled={mutation.isPending}>
            {mutation.isPending ? (
              <Loader className="animate-spin" />
            ) : (
              "Apply Changes"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditNotesPapers;
