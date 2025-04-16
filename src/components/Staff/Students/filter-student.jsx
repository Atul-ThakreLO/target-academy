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
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SelectField from "@/components/Utils/Form-Fields/select-field";
import { useGetBatchByClass } from "@/Hooks/use-batch";
import { useGetClass } from "@/Hooks/use-class";
import { useGetSchool } from "@/Hooks/use-school";
import { Filter, Loader2, RefreshCcwDot } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FilterStudent = ({ isRefetching, setFilterData }) => {
  const [classID, setClassID] = useState(null);
  const { data: classData, isLoading: classLoading } = useGetClass();
  const { data: schoolData, isLoading: schoolLoading } = useGetSchool();
  const { data: batchData, isLoading: batchLoading } =
    useGetBatchByClass(classID);
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

  const onSubmit = (data) => {
    const keys = Object.keys(data);
    keys.forEach((key) => {
      if (data[key] === "") delete data[key];
    });
    console.log(data);
    setFilterData(data);
  };

  const handleReset = () => {
    reset();
    setClassID(null);
    setFilterData(null);
  };

  return (
    <Dialog
    // open={open} onOpenChange={setOpen}
    >
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
            Apply Filter to get specific Notes
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
          <div>
            <SelectField
              control={control}
              name={"school_id"}
              placeholder={"School"}
              selectItems={schoolData?.data}
              label={"School"}
              error={errors.school_id}
              isLoading={schoolLoading}
            />
          </div>
          {classID && (
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
              <Loader2 className="animate-spin" />
            ) : (
              "Apply Filter"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FilterStudent;
