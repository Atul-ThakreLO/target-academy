import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import InputField from "@/components/Utils/input-field";
import { useEditNotice } from "@/Hooks/use-notice";
import { CalendarIcon, Edit, Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { Controller, useForm } from "react-hook-form";

const EditNotice = ({ data }) => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: data.id,
      title: data.title,
      content: data.content,
      isHighlighted: data.isHighlighted,
      expiry_date: data.expiry_date,
      isEdited: true,
    },
  });

  const mutation = useEditNotice();

  const onSubmit = (data) => {
    mutation.mutate(data);
    console.log(data);
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      setOpen(false);
    }
  }, [mutation.isPending, mutation.isSuccess]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="px-2">
          <Edit size={17} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Notice</DialogTitle>
          <DialogDescription>Make changes and click save</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="w-full flex flex-col justify-between">
            <div>
              <InputField
                label={"Title"}
                type={"text"}
                id={"title"}
                name={"title"}
                register={register}
                error={errors.title}
              />
            </div>
            <div className="mt-3">
              <Label htmlFor="content">Content</Label>
              <textarea
                {...register("content")}
                id="content"
                className="border-2 w-full rounded-xl p-2"
                rows={5}
              />
            </div>
            <div className=" my-3">
              <div className="flex items-center gap-2">
                <Controller
                  control={control}
                  name={"isHighlighted"}
                  render={({ field }) => (
                    <Checkbox
                      id="isHighlighted"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
                <Label htmlFor="isHighlighted">Is Important</Label>
              </div>
              <div className="flex items-center gap-2">
                <Label>Expiry Date:</Label>
                <Controller
                  control={control}
                  name={"expiry_date"}
                  render={({ field }) => (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={`w-[240px] pl-3 text-left font-normal ${
                            !field.value && "text-muted-foreground"
                          }`}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  )}
                />
              </div>
            </div>
            <div className="w-full flex justify-center">
              <Button className="w-4/5">
                {mutation.isPending ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditNotice;
