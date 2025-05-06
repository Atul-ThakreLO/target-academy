import React, { useEffect, useState } from "react";
import SchoolCard, { SchoolCardSkeleton } from "./school-card";
import { Button } from "@/components/ui/button";
import { Loader, Minus, Plus } from "lucide-react";
import { useAddSchool, useGetSchool } from "@/Hooks/use-school";
import DataNotFound from "@/components/Utils/Assets/data-not-found";
import { useForm } from "react-hook-form";
import InputField from "@/components/Utils/input-field";
import { zodResolver } from "@hookform/resolvers/zod";
import { SchoolSchema } from "@/Zod Schema/Staff/secondary-schema";
import { useSelector } from "react-redux";

const School = () => {
  const [add, setAdd] = useState(false);
  const { data, isLoading, isFetched, refetch } = useGetSchool();
  const mutation = useAddSchool();
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SchoolSchema),
  });
  const schoolsArray = [
    "/School/school-1.png",
    "/School/school-2.png",
    "/School/school-3.png",
    "/School/school-4.png",
  ];

  useEffect(() => {
    if (mutation.isSuccess) {
      setAdd(false);
      setValue("name", "");
    }
  }, [mutation.isSuccess]);

  // useEffect(() => {
  //   console.log(data?.data);
  // }, [isLoading]);

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  const { staff } = useSelector((state) => state.authStaff);

  return (
    <>
      <div className="flex items-center justify-between">
        <h6 className="text-3xl font-semibold gradient-title-custom">
          Schools
        </h6>
        {/* <p className="text-gray-500 mt-1">Add or Provide Notes</p> */}
        {!staff.OfficeStaffInfo.isAdmin ? (
          ""
        ) : add ? (
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
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 mt-10">
        {isLoading ? (
          Array.from({ length: 4 }, (_, i) => <SchoolCardSkeleton key={i} />)
        ) : data?.data?.length > 0 ? (
          data?.data?.map((school, index) => (
            <SchoolCard
              key={index}
              data={school}
              refetch={refetch}
              img={schoolsArray[Math.floor(Math.random() * 4)]}
            />
          ))
        ) : (
          <DataNotFound />
        )}
        {/* {schools.map((school, index) => (
          <SchoolCard
            key={index}
            name={school}
            img={schoolsArray[Math.floor(Math.random() * 4)]}
          />
        ))} */}
      </div>
    </>
  );
};

export default School;
