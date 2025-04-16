import FormStaff from "@/components/Home/Staff-Registration/Forms/form-staff";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useUpdateStaff } from "@/Hooks/use-staff";
import { Edit } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const EditDialog = ({ defaultValue }) => {
  const [open, setOpen] = useState(false);
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: defaultValue?.email,
      name: defaultValue?.OfficeStaffInfo.name,
      mobile: defaultValue?.OfficeStaffInfo.mobile,
      role: defaultValue?.OfficeStaffInfo.role,
      subjects: defaultValue?.OfficeStaffInfo.subjects,
      qualification: defaultValue?.OfficeStaffInfo.qualification,
    },
  });

  const mutation = useUpdateStaff();

  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate({ ...data, id: defaultValue.id });
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      setOpen(false);
    }
  }, [mutation.isSuccess, mutation.isPending]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="py-1 px-4 h-6">
          <Edit size={15} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[70vh] z-10">
          <FormStaff
            mutation={mutation}
            onSubmit={onSubmit}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            control={control}
            edit
          />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default EditDialog;
