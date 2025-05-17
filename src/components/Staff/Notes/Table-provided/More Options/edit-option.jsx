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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetBatchAll } from "@/Hooks/use-batch";
import { useEditProvideNotes } from "@/Hooks/use-notes";
import { Edit, Loader } from "lucide-react";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const EditOption = ({ name = "batch_id", data }) => {
  const { data: batchData, isLoading } = useGetBatchAll();
  const mutation = useEditProvideNotes();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      note_id: data.note_id,
      batch_id: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    // mutation.mutate(data);
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="Ghost" className="p-2">
          <Edit />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit</DialogTitle>
          <DialogDescription>Edit Batch for provided Notes</DialogDescription>
        </DialogHeader>
        <div>
          <form id="provide-notes" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name={name}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  defaultValue={data.batch_id}
                >
                  <SelectTrigger id={name}>
                    <SelectValue placeholder="Select Batch" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Batch</SelectLabel>
                      {isLoading
                        ? "Loading"
                        : batchData?.data.map((batch, index) => (
                            <SelectItem value={batch.id} key={index}>
                              <div>
                                <span>{batch.name}</span>
                                <span className="ml-28">
                                  {batch.class.name}
                                </span>
                              </div>
                            </SelectItem>
                          ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </form>
        </div>
        <DialogFooter>
          <Button form="provide-notes" disabled={mutation.isPending}>
            {mutation.isPending ? <Loader className="animate-spin" /> : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditOption;
