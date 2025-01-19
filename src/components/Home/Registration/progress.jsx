import React, { useEffect } from "react";
import { useRegisterContext } from "../context/register-context-provider";
import { Separator } from "@/components/ui/separator";
import { Circle, CircleCheck, CircleX } from "lucide-react";

const Progress = () => {
  const {
    formData,
    stage,
    setStage,
    stageStatus,
    setStageStatus,
    updateStatus
  } = useRegisterContext();
  const stages = [1, 2, 3, 4];

  const getIcon = (index) => {
    const status = stageStatus[index];

    if (status === "success") {
      return <CircleCheck className="text-green-500" />;
    } else if (status === "error") {
      return <CircleX className="text-red-600" />;
    } else if (index === stage) {
      return <Circle className="text-orange-300" />;
    } else {
      return <Circle className="text-gray-500" />;
    }
  };

  const getLine = (index) => {
    const status = stageStatus[index];
    if (status === "success") {
      return <Separator className="w-[calc(10vw-22px)] h-1 bg-green-500" />;
    } else if (status === "error") {
      return <Separator className="w-[calc(10vw-22px)] h-1 bg-red-600" />;
    } else if (index === stage) {
      return <Separator className="w-[calc(10vw-22px)] h-1 bg-orange-300" />;
    } else {
      return <Separator className="w-[calc(10vw-22px)] h-1 bg-gray-500" />;
    }
  };
  return (
    <>
      {stages.map((_, index, array) => {
        return (
          <div key={index} className="flex justify-center items-center gap-4">
            {index !== 0 && getLine(index)}
            {getIcon(index)}
          </div>
        );
      })}
    </>
  );
};

export default Progress;
