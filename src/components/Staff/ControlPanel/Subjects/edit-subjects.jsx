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
import { useActiveInActive } from "@/Hooks/use-staff";
import {
  useAddSubjects,
  useGetSubjectsByClass,
  useSubjectDelete,
} from "@/Hooks/use-subject";
import {
  CircleCheckBig,
  CircleOff,
  Edit,
  Loader,
  Loader2,
  Trash,
} from "lucide-react";
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

  const statusMutation = useActiveInActive("subjects", ["subjects", id]);
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
  const handleStatus = (subject) => {
    statusMutation.mutate({ id: subject.id, status: !subject.isActive });
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
        <div className="relative">
          {statusMutation.isPending || removeMutation.isPending ? (
            <div className="absolute h-full w-full top-0 left-0 grid place-items-center bg-muted/30">
              <Loader2 className="animate-spin" />
            </div>
          ) : (
            ""
          )}
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
                      <div className={`border ${subject.isActive ? "border-l-4 border-l-green-400" : "border-l-4 border-l-red-500"} px-4 py-2 flex justify-between items-center rounded-lg mt-3`}>
                        {subject.name}
                        <div className="border rounded-md">
                          <Button
                            variant="ghost"
                            onClick={() => handleDelete(subject.id)}
                          >
                            <Trash />
                          </Button>
                          <Button
                            variant="ghost"
                            onClick={() => handleStatus(subject)}
                            className="group"
                            disabled={statusMutation.isPending}
                          >
                            {subject.isActive ? (
                              <CircleOff />
                            ) : (
                              <CircleCheckBig />
                            )}
                          </Button>
                        </div>
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
