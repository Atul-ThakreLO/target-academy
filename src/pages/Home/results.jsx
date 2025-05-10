import ResultCard from "@/components/Home/Results/result-card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetClass } from "@/Hooks/use-class";
import { useGetHomeResult } from "@/Hooks/use-result";
import { useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import ResultCardSckeleton from "../../components/Loaders/Home/result-card-sckeleton";
import ButtonLoader from "../../components/Loaders/Home/button-loader";

const Results = () => {
  const { data, isLoading, isSuccess } = useGetClass();
  // const [session, setSession] = useState("25");
  const [toppers, setToppers] = useState([]);
  const [others, setOthers] = useState([]);
  const [sessions, setSesssions] = useState([]);
  const [session, setSession] = useState(
    new Date().getFullYear().toString().slice(2)
  );
  const [classVal, setClass] = useState(undefined);
  const {
    data: resultData,
    isLoading: resultLoading,
    isFetched,
  } = useGetHomeResult({
    id: classVal,
    session,
  });

  function getFiveYears() {
    const currentYear = new Date().getFullYear().toString().slice(2);
    for (let i = 0; i < 5; i++) {
      setSesssions((prev) => [...prev, currentYear - i]);
    }
  }

  useMemo(() => {
    getFiveYears();
  }, [new Date().getFullYear()]);

  const queryClient = useQueryClient();

  const handleClass = (value) => {
    setClass(value);
  };

  useEffect(() => {
    if (isSuccess) {
      setClass(data?.data?.[0]?.id);
    }
  }, [isLoading, isSuccess]);

  useEffect(() => {
    queryClient.invalidateQueries(["results", "home", classVal, session]);
  }, [classVal, session]);

  useEffect(() => {
    if (isFetched) {
      // const [topper1, ...others] = resultData.data;
      // console.log(topper1);
      setToppers(resultData.data.slice(0, 1));
      setOthers(resultData.data.slice(1));
    }
  }, [resultLoading, isFetched, classVal, resultData?.data]);

  return (
    <div className="w-full md:w-[80%] mx-auto pt-10 pb-96 p-2">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2 grid grid-cols-[repeat(auto-fill,_minmax(100px,_1fr))] gap-4 ">
          {isLoading
            ? Array.from({ length: 3 }, (_, i) => <ButtonLoader />)
            : data?.data.map((c, index) => (
                <Button
                  variant="outline"
                  key={index}
                  onClick={() => handleClass(c.id)}
                  className={`${
                    classVal === c.id
                      ? "bg-foreground text-background hover:bg-foreground hover:text-background"
                      : ""
                  }`}
                >
                  {c.name}
                </Button>
              ))}
        </div>
        <div className="w-full md:w-1/2">
          <Select onValueChange={setSession}>
            <SelectTrigger>
              <SelectValue placeholder={"20" + session} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Year</SelectLabel>
                {sessions.map((session) => (
                  <SelectItem key={session} value={session}>
                    {"20" + session}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="border rounded-xl shadow-lg mt-10 p-2 md:p-5">
        <div className="mt-10">
          <h5 className="text-4xl font-semibold text-center">
            🎉| Toppers |🎉
          </h5>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] md:grid-cols-3 p-4 md:p-10 md:mx-20  gap-4 md:gap-10 bg-background border my-16 rounded-xl">
            {/* <ResultCard />
            <ResultCard />
             */}
            {resultLoading || isLoading
              ? // <Loader2 className="animate-spin" />
                Array.from({ length: 3 }, (_, i) => <ResultCardSckeleton />)
              : // <ResultCardSckeleton />
                toppers.map((topper) => (
                  <ResultCard key={topper?.id} data={topper} />
                ))}
          </div>
          <h6 className="text-4xl font-semibold text-center">...and More</h6>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,_minmax(190px,_1fr))] gap-1 md:gap-4 mt-20">
          {resultLoading || isLoading
            ? Array.from({ length: 3 }, (_, i) => <ResultCardSckeleton />)
            : // < />
              others?.map((result) => (
                <ResultCard key={result.id} data={result} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
