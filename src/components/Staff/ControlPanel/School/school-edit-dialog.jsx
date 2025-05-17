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
import InputField from "@/components/Utils/input-field";
import { useEditSchool } from "@/Hooks/use-school";
import { SchoolSchema } from "@/Zod Schema/Staff/secondary-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit, Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const SchoolEditDialog = ({ data }) => {
  const [open, setOpen] = useState(false);
  const mutation = useEditSchool();

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SchoolSchema),
  });

  useEffect(() => {
    if (mutation.isSuccess) {
      setOpen(false);
    }
  }, [mutation.isPending, mutation.isSuccess]);

  useEffect(() => {
    setValue("name", data.name);
  }, [data]);

  const onSubmit = (name) => {
    mutation.mutate({ ...name, id: data.id });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button variant="ghost" className="py-1 px-3 h-5">
          <Edit />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form id="school-edit" onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label={"Name"}
            type={"text"}
            id={"name"}
            name={"name"}
            register={register}
            error={errors.name}
          />
        </form>
        <DialogFooter>
          <Button form="school-edit">
            {mutation.isPending ? (
              <Loader className="animate-spin" />
            ) : (
              "Save Changes"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SchoolEditDialog;
