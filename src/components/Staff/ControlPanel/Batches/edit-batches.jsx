import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import InputField from "@/components/Utils/input-field";
import { useAddBatch, useGetBatchByClass } from "@/Hooks/use-batch";
import { Edit, Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import BatchNameCard from "./batch-name-card";

const EditBatches = ({ id }) => {
  const [open, setOpen] = useState(false);
  const {
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const { data, isLoading, isFetched } = useGetBatchByClass(id, open);
  const addMutation = useAddBatch();

  const onSubmit = (data) => {
    // console.log({ ...data, class_id: id });
    addMutation.mutate({ ...data, class_id: id });
  };

  useEffect(() => {
    if (addMutation.isSuccess) {
      reset();
      //   setOpen(false)
    }
  }, [addMutation.isSuccess]);

  // useEffect(() => {
  //   console.log(data?.data);
  // }, [isLoading, isFetched]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Edit /> Edit Batches
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Batches:</DialogTitle>
          <DialogDescription>Make Your Chganges and Save</DialogDescription>
        </DialogHeader>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-end justify-between gap-2"
          >
            <InputField
              type={"text"}
              label={"Name"}
              name={"name"}
              register={register}
              id={"name"}
              error={errors.name}
            />
            <InputField
              type={"text"}
              label={"Session"}
              name={"session"}
              register={register}
              id={"session"}
              error={errors.session}
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
              {isLoading ? (
                "Loading"
              ) : data?.data.length > 0 ? (
                <BatchNameCard data={data?.data} classID={id} />
              ) : (
                <p className="font-medium text-lg mt-3">
                  Batches Are not added Yet____
                </p>
              )}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditBatches;
