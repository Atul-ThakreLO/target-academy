import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader, Minus, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import ClassCard, { ClassCardSkeleton } from "./class-card";
import { useAddClass, useGetClass } from "@/Hooks/use-class";
import InputField from "@/components/Utils/input-field";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClassSchema, SchoolSchema } from "@/Zod Schema/Staff/secondary-schema";

const Classes = () => {
  const [add, setAdd] = useState(false);
  const { data, isLoading, isFetched, error, isError } = useGetClass();
  const mutation = useAddClass();

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ClassSchema),
  });

  useEffect(() => {
    if (mutation.isSuccess) {
      setAdd(false);
      setValue("name", "");
    }
  }, [mutation.isSuccess]);

  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h6 className="text-3xl font-semibold gradient-title-custom">
          Classes
        </h6>
        {/* <p className="text-gray-500 mt-1">Add or Provide Notes</p> */}
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
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`flex justify-between items-center ${
          add ? "h-24" : "h-0"
        } duration-300 overflow-hidden border-b mt-5 px-2`}
      >
        <div className="">
          <InputField
            label={"Name"}
            type={"text"}
            id={"name"}
            name={"name"}
            register={register}
            error={errors.name}
          />
        </div>
        <div>
          <Button disabled={mutation.isPending}>
            {mutation.isPending ? (
              <Loader className="animate-spin" />
            ) : (
              <>
                <Plus /> Add New
              </>
            )}
          </Button>
        </div>
      </form>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-6 mx-auto mt-10">
        {isLoading
          ? Array.from({ length: 5 }, (_, i) => <ClassCardSkeleton />)
          : data?.data?.map((data) => <ClassCard data={data} />)}
        {/* <ClassCard name={"9th"} />
        <ClassCard name={"10th"} />
        <ClassCard name={"11th"} />
        <ClassCard name={"12th"} /> */}
      </div>
    </>
  );
};

export default Classes;
