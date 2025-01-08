import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

const PaymentCustom = ({ customPlanValue, isActive, subjects }) => {
  const [plan, setPlan] = React.useState(2000);
  const [subjectWisePlan, setSubjectWisePlan] = React.useState(1);
  
  function handlePlanAmount(e) {
    if (e.target.value === "increase" && plan < 5000) {
      setPlan(plan + 500);
    } else if (e.target.value === "decrease" && plan > 1000) {
      setPlan(plan - 500);
    }
  }

  useEffect(() => {
    customPlanValue(plan);
    setSubjectWisePlan(Math.floor(plan / subjects.length));
  }, [plan]);

  return (
    <div
      className="lg:px-3 xl:px-12 md:px-0 pb-7 duration-700"
      style={{
        opacity: isActive != "custom" ? 0.3 : 1,
        pointerEvents: isActive != "custom" ? "none" : "all",
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <p className="text-4xl mb-8">Custom Plan</p>
        <div className="border rounded-lg w-full text-xl flex justify-between items-center overflow-hidden shadow-lg">
          <span className="border-r">
            <Button
              type="button"
              variant="outline"
              className="px-8 rounded-none border-none text-xl"
              value="decrease"
              onClick={handlePlanAmount}
            >
              -
            </Button>
          </span>
          <span>₹ {plan}</span>
          <span className="border-l">
            <Button
              type="button"
              variant="outline"
              className="px-8 rounded-none border-none text-xl"
              value="increase"
              onClick={handlePlanAmount}
            >
              +
            </Button>
          </span>
        </div>
        <div className="w-full border rounded-lg shadow-xl pb-0">
          <p className="text-xl text-center my-5">Subject wise Distribution</p>
          <ScrollArea className="h-40">
            <Table className="w-full selection:not-sr-only">
              <TableHeader>
                <TableRow className=" border-none">
                  <TableHead className="text-center">sr.No</TableHead>
                  <TableHead className="text-center">Subjects</TableHead>
                  <TableHead className="text-center">Fees</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-center border-none w-full">
                {subjects.map((subject, index) => {
                  return (
                    <TableRow key={index} className=" border-none">
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{subject.subject.subject_name}</TableCell>
                      <TableCell>{subjectWisePlan}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </ScrollArea>
          <p className="text-center text-muted-foreground mb-1">scroll</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentCustom;
