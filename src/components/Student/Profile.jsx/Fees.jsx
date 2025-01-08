import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Fence } from "lucide-react";
import React from "react";
import PaymentCards from "./payment-cards";
import PaymentCustom from "./payment-custom";
import { Separator } from "@/components/ui/separator";

const Fees = ({ subjects }) => {
  const [cardplan, setCardPlan] = React.useState(2000);
  const [customplan, setCustomPlan] = React.useState(2000);
  const [planType, setPlanType] = React.useState("custom");

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
  }

  function handleChange(e) {
    setPlanType(e.target.id);
  }

  function handleCustomPlan(plan) {
    setCustomPlan(plan);
  }

  function handleCardPlan(plan) {
    setCardPlan(plan);
  }

  return (
    <div className="grid grid-cols-2 gap-y-20 gap-x-4">
      <div className="">
        <div className="grid grid-rows-3">
          <div className="px-[0.45rem] py-3 relative grid-after-before before:bg-border">
            <div className="border-l-2 border-r-2 p-3 mt-2">
              <div className="border rounded-xl bg-card-custom shadow-md shadow-black/20 p-5">
                <p className="text-3xl">Total Fess:</p>
                <p className="text-5xl ml-20 font-semibold">₹ 25000</p>
              </div>
            </div>
          </div>
          <div className="px-[0.45rem] py-3 relative grid-after-before before:bg-border">
            <div className="border-l-2 border-r-2 p-3 mt-2">
              <div className="border rounded-xl bg-card-custom shadow-md shadow-black/20 p-5">
                <p className="text-3xl">Fess Remaining:</p>
                <p className="text-5xl ml-20 font-semibold">₹ 25000</p>
              </div>
            </div>
          </div>
          <div className="px-[0.45rem] py-3 relative grid-after-before before:bg-border">
            <div className="border-l-2 border-r-2 p-3 mt-2">
              <div className="border rounded-xl bg-card-custom shadow-md shadow-black/20 p-5">
                <p className="text-3xl">Last Fees Paid:</p>
                <p className="text-5xl ml-20 font-semibold">₹ 25000</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="h-full rounded-xl border-2 bg-card-custom border-muted-foreground/10 shadow-lg shadow-black/20 p-5">
          <p className="pr-2 flex items-center  w-max">
            <div className="bg-foreground text-background p-3 rounded-full">
              <Fence size={20} />
            </div>
            <div className="p-2">Your Transactions</div>
          </p>
          <div className="mx-12 pl-2 py-2 lg:text-2xl">
            <Table className="">
              <TableCaption>A list of your recent Transactions</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">sr.No</TableHead>
                  <TableHead className="text-center">Subjects</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-center">
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>Subject1</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>Subject2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3</TableCell>
                  <TableCell>Subject3</TableCell>
                </TableRow>
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={1} className="text-center">
                    Total
                  </TableCell>
                  <TableCell className="text-center">3</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </div>
        {/* <Separator className="w-[90%] h-[0.1rem] bg-gray-300  ml-auto" /> */}
      </div>

      <div className="bg-card-custom w-full shadow-lg h-full col-span-2 rounded-xl p-5">
        <div>
          <form onSubmit={handleSubmit} onChange={handleChange}>
            <div className="grid grid-cols-12 grid-flow-row auto-rows-min relative gap-y-5">
              <div className="lg:col-span-6 col-span-12">
                <Label htmlFor="card" className="">
                  <PaymentCards
                    cardPlanValue={handleCardPlan}
                    isActive={planType}
                    subjects={subjects}
                  />
                </Label>
                <Input
                  className="accent-foreground scale-75"
                  type="radio"
                  name="select-plan"
                  id="card"
                  value={cardplan}
                />
              </div>
              <Separator
                orientation={"vertical"}
                className="h-[80%] top-10 relative left-[57%] before:content-['OR'] before:absolute before:top-[50%] before:-translate-x-[50%] before:-translate-y-[50%] before:bg-background before:text-3xl"
              />
              <div className="lg:col-span-5 col-span-12">
                <Label htmlFor="custom">
                  <PaymentCustom
                    customPlanValue={handleCustomPlan}
                    isActive={planType}
                    subjects={subjects}
                  />
                </Label>
                <Input
                  className="accent-foreground scale-75"
                  type="radio"
                  name="select-plan"
                  id="custom"
                  value={customplan}
                  defaultChecked
                />
              </div>
              <div className="col-span-12 ">
                <Separator />
                <div className="flex justify-between px-5 gap-4 mt-5">
                  <p className="w-3/5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quos voluptate placeat sunt sequi commodi vitae quam
                  </p>
                  <Button type="submit" className="w-48 mx-auto text-2xl py-6">
                    Pay
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Fees;
