import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { Label } from "@/components/ui/label";
import { SheetClose } from "@/components/ui/sheet";
import nickName from "@/components/Utils/nick-name";
import { useUpdateStaffDP } from "@/Hooks/use-staff";
import { useUpdateStudentDP } from "@/Hooks/use-student";
import { Edit, Loader2, Trash, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const EditDpDialog = ({ defaultData }) => {
  const [src, setSrc] = useState(defaultData?.StudentInfo?.avtar_url);
  // const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);

  const { register, handleSubmit, setValue } = useForm();

  const mutation = useUpdateStudentDP(defaultData.id);

  const handleFile = (e) => {
    setValue("avatar", e.target?.files?.[0]);
    setSrc(URL.createObjectURL(e.target?.files?.[0]));
  };

  const handleClear = () => {
    setValue("avatar", null);
    setSrc(defaultData?.StudentInfo?.avtar_url);
  };

  const handleRemove = () => {
    setValue("avatar", null);
    setSrc("");
  };

  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate(data);
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      setOpen(false);
      setSrc(defaultData?.StudentInfo?.avtar_url)
    }
  }, [mutation.isSuccess, mutation.isPending, defaultData]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="p-2 h-6">
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
        {/* <EditDialog defaultValue={data} /> */}
        <div>
          <div className="relative w-max mx-auto">
            <Avatar className="h-44 w-44 ">
              <AvatarImage src={src} alt={defaultData?.StudentInfo?.name} className=" object-cover object-center" />
              <AvatarFallback>
                {nickName(defaultData?.StudentInfo?.name)}
              </AvatarFallback>
            </Avatar>
            <div
              className={`absolute top-2 right-2 bg-background rounded-full ${
                src === defaultData?.StudentInfo?.avtar_url ? "hidden" : ""
              }`}
            >
              <Button
                variant="ghost"
                type="button"
                className="p-2 h-6"
                onClick={handleClear}
              >
                <X />
              </Button>
            </div>
          </div>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-3 items-end">
              <div>
                <Label htmlFor="avatar">Select New</Label>
                <Input
                  type="file"
                  id="avatar"
                  name="avatar"
                  // {...register("avatar")}
                  accept="image/*"
                  onChange={handleFile}
                />
              </div>
              <div>
                <Button type="button" variant="outline" onClick={handleRemove}>
                  <Trash /> Remove Profile
                </Button>
              </div>
            </div>
            <div className="mt-3 flex justify-end gap-2">
              <SheetClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </SheetClose>
              <Button
                disabled={
                  src === defaultData?.StudentInfo?.avtar_url ||
                  mutation.isPending
                }
              >
                {mutation.isPending ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Save Changes"
                )}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditDpDialog;
