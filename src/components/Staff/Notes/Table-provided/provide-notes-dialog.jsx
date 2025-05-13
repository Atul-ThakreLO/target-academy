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
import { useProvideNotes } from "@/Hooks/use-notes";
import { setSelectedID } from "@/Redux/slices/secondary/notes/notes-id-slice";
// import { setSelectedID } from "@/Redux/slices/secondary/notes/table-row-ids";
import { Loader } from "lucide-react";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const ProvideNotesDialog = ({ name = "batch_id" }) => {
  const { data, isLoading } = useGetBatchAll();
  const { selectedIDs } = useSelector((state) => state.notesSelectedID);
  const mutation = useProvideNotes();
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      // note_id: [...selectedIDs],
      batch_id: "",
    },
  });

  const onSubmit = (data) => {
    console.log({ note_id: [...selectedIDs], ...data });

    mutation.mutate({ note_id: [...selectedIDs], ...data });
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      dispatch(setSelectedID([]));
    }
  }, [mutation.isPending, mutation.isSuccess]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Provide</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Notes</DialogTitle>
          <DialogDescription>Provide Notes to the batch</DialogDescription>
        </DialogHeader>
        <div>
          <form id="provide-notes" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name={name}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger id={name}>
                    <SelectValue placeholder="Select Batch" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Batch</SelectLabel>
                      {isLoading
                        ? "Loading"
                        : data?.data.map((batch, index) => (
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
            {mutation.isPending ? (
              <Loader className="animate-spin" />
            ) : (
              "Provide"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProvideNotesDialog;
