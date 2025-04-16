import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SelectField from "@/components/Utils/Form-Fields/select-field";
import InputField from "@/components/Utils/input-field";
import {
  useAddSubjects,
  useGetSubjectsAll,
  useGetSubjectsByClass,
  useSubjectDelete,
} from "@/Hooks/use-subject";
import { Edit, Loader, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const EditSubjects = ({ id }) => {
  const [open, setOpen] = useState(false);
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const { data, isLoading, isFetched } = useGetSubjectsByClass(id, open);
  const removeMutation = useSubjectDelete();
  const addMutation = useAddSubjects();

  const onSubmit = (data) => {
    // console.log({ ...data, class_id: id });
    addMutation.mutate({ ...data, class_id: id });
  };

  const handleDelete = (id) => {
    removeMutation.mutate(id);
    console.log(id);
  };

  useEffect(() => {
    if (addMutation.isSuccess) {
      setValue("name", "");
    //   setOpen(false)
    }
  }, [addMutation.isSuccess]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Edit />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Subjects:</DialogTitle>
          <DialogDescription>Make Your Chganges and Save</DialogDescription>
        </DialogHeader>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-end justify-between"
          >
            <InputField
              type={"text"}
              label={"Add New Subjects"}
              name={"name"}
              register={register}
              id={"name"}
              error={errors.name}
            />
            <Button disabled={addMutation.isPending}>
              {addMutation.isPending ? (
                <Loader className="animate-spin" />
              ) : (
                "Add"
              )}
            </Button>
          </form>
          <div>
            <ul>
              {isLoading
                ? "Loading"
                : data?.data?.map((subject) => (
                    <li>
                      <div className="border px-4 py-2 flex justify-between items-center rounded-lg mt-3">
                        {subject.name}
                        <Button
                          variant="outline"
                          onClick={() => handleDelete(subject.id)}
                        >
                          <Trash /> Remove
                        </Button>
                      </div>
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditSubjects;
