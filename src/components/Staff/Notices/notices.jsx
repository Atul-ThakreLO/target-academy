import { Button } from "@/components/ui/button";
import { CalendarIcon, Loader2, Minus, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import NoticeBoard from "./Notice-Board/notice-board";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Controller, useForm } from "react-hook-form";
import InputField from "@/components/Utils/input-field";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useCreateNotice } from "@/Hooks/use-notice";

const Notices = () => {
  const [add, setAdd] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      content: "",
      isHighlighted: false,
      expiry_date: "",
    },
  });

  const mutation = useCreateNotice();

  const onSubmit = (data) => {
    mutation.mutate(data);
    console.log(data);
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      reset();
    }
  }, [mutation.isPending, mutation.isSuccess]);

  return (
    <>
      <h6 className="text-3xl font-semibold gradient-title-custom">Notices</h6>
      <div className="flex flex-col md:flex-row gap-5 mt-10">
        <div className="md:w-1/2">
          <NoticeBoard />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="md:w-3/4">
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
            <div className="flex flex-col-reverse md:flex-row gap-2 md:gap-10 md:justify-around justify-start items-center my-5 md:my-3">
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
      </div>
    </>
  );
};

export default Notices;

/* <div className="flex items-center justify-between">
        <h6 className="text-3xl font-semibold gradient-title-custom">
          Notices
        </h6>
        {/* <p className="text-gray-500 mt-1">Add or Provide Notes</p> 
        {add ? (
          <Button
            variant="outline"
            onClick={() => setAdd((prev) => !prev)}
            className="border-red-500 text-red-500"
          >
            <Minus /> Cancel
          </Button>
        ) : (
          <Button variant="outline" onClick={() => setAdd((prev) => !prev)}>
            <Plus /> Add New
          </Button>
        )}
      </div> */
