import ResultTable from "@/components/Staff/Result/result-table";
import { Button } from "@/components/ui/button";
import SelectField from "@/components/Utils/Form-Fields/select-field";
import { useGetClass } from "@/Hooks/use-class";
import { useGetResult } from "@/Hooks/use-result";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Result = () => {
  const { data, isLoading } = useGetClass();
  const [query, setQuery] = useState(null);
  // const {
  //   data: resultData,
  //   isLoading: resultLoading,
  //   isSuccess: resultSuccess,
  // } = useGetResult();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    setQuery(data);
  };

  // useEffect(() => {
  //   if (resultSuccess) {
  //     console.log(resultData?.data);
  //   }
  // }, [resultSuccess, resultSuccess]);

  return (
    <div>
      <div className="mt-5 pl-5">
        <h6 className="text-4xl font-semibold gradient-title-custom">
          Results
        </h6>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between items-center mt-5 md:w-[80%] mx-auto gap-4">
          <div className="w-full">
            <SelectField
              control={control}
              name={"class_id"}
              label={"Class"}
              placeholder={"Class"}
              selectItems={data?.data}
              error={errors.class_id}
              isLoading={isLoading}
            />
          </div>
          <div className="w-full">
            <SelectField
              control={control}
              name={"session"}
              error={errors.session}
              label={"Session"}
              placeholder={"Session"}
              selectItems={[
                { id: "25", name: "Session 25" },
                { id: "24", name: "Session 24" },
                { id: "23", name: "Session 23" },
              ]}
            />
          </div>
          <div>
            <Button className="mt-5">Submit</Button>
          </div>
        </div>
      </form>
      <div>
        <ResultTable query={query} />
      </div>
    </div>
  );
};

export default Result;
