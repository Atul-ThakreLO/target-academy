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
import React from "react";

const Results = () => {
  return (
    <div className="w-full md:w-[80%] mx-auto pt-10 pb-96 p-2">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2 grid grid-cols-[repeat(auto-fill,_minmax(100px,_1fr))] gap-4 ">
          <Button variant="outline">Class 12th</Button>
          <Button variant="outline">Class 11th</Button>
          <Button variant="outline">Class 10th</Button>
          <Button variant="outline">Class 9th</Button>
          <Button variant="outline">Class 8th</Button>
        </div>
        <div className="w-full md:w-1/2">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Choose Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Year</SelectLabel>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
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
            <ResultCard />
            <ResultCard />
            <ResultCard />
          </div>
          <h6 className="text-4xl font-semibold text-center">...and More</h6>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,_minmax(190px,_1fr))] gap-1 md:gap-4 mt-20">
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
        </div>
      </div>
    </div>
  );
};

export default Results;
