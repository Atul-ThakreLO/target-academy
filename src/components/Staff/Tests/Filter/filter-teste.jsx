import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import SelectField from "@/components/Utils/Form-Fields/select-field";
import { useGetBatchByClass } from "@/Hooks/use-batch";
import { useGetClass } from "@/Hooks/use-class";
import { useGetSubjectsByClass } from "@/Hooks/use-subject";
import { setNotesFilterData } from "@/Redux/slices/secondary/notes/notes-filter-data-slice";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { useQueryClient } from "@tanstack/react-query";
import { Filter, Loader, RefreshCcwDot } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const FilterTests = ({ open, setOpen, isRefetching, provided, setFilterData }) => {
  const [classID, setClassID] = useState(null);
  const { data: classData, isLoading: classLoading } = useGetClass();
  const { data: batchData, isLoading: batchLoading } = useGetBatchByClass(
    classID,
    provided
  );
  const { data: subjectData, isLoading: subjectLoading } =
    useGetSubjectsByClass(classID);
  const {
    control,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset,
  } = useForm({
    defaultValues: {
      class_id: "",
      subject_id: "",
      batch_id: "",
    },
  });

  const setClassValue = (val) => {
    setClassID(val);
  };

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const keys = Object.keys(data);
    keys.forEach((key) => {
      if (data[key] === "") delete data[key];
    });
    console.log(data);
    dispatch(setFilterData(data));
  };

  const handleReset = () => {
    reset();
    setClassID(null);
    dispatch(setFilterData(null));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" type="button">
          <Filter size={18} />
          <span className="">Filter Notes</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Filter</DialogTitle>
          <DialogDescription>
            Apply Filter to get specific Test Papers
          </DialogDescription>
        </DialogHeader>
        <form id="filter-notes" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <SelectField
              control={control}
              name={"class_id"}
              placeholder={"Class"}
              selectItems={classData?.data}
              label={"Class"}
              error={errors.class_id}
              setValue={setClassValue}
              isLoading={classLoading}
            />
          </div>
          {classID && (
            <div>
              <SelectField
                control={control}
                name={"subject_id"}
                placeholder={"Subjects"}
                selectItems={subjectData?.data}
                label={"Subject"}
                error={errors.subject_id}
                isLoading={subjectLoading}
              />
            </div>
          )}
          {classID && provided && (
            <div>
              <SelectField
                control={control}
                name={"batch_id"}
                placeholder={"Batches"}
                selectItems={batchData?.data}
                label={"Batches"}
                error={errors.batch_id}
                isLoading={batchLoading}
              />
            </div>
          )}
        </form>
        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={handleReset}
            disabled={isRefetching}
          >
            <RefreshCcwDot />
            Clear Filter
          </Button>
          <Button type="submit" form="filter-notes" disabled={isRefetching}>
            {isRefetching ? (
              <Loader className="animate-spin" />
            ) : (
              "Apply Filter"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FilterTests;
