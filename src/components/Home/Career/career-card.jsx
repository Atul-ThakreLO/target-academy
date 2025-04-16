import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link, Loader } from "lucide-react";
import React from "react";
import CareerForm from "./career-form";
import { useDispatch, useSelector } from "react-redux";
import { setIsApplied } from "@/Redux/slices/staff/job-apply-slice";

const CareerCard = ({ data }) => {
  const { isApplied, isLoading } = useSelector((state) => state.jobApply);
  const dispatch = useDispatch();
  const handleDialog = () => {
    dispatch(setIsApplied(false));
  };
  return (
    <Card className="max-w-[700px] mx-auto mt-5">
      <CardHeader>
        <h3 className="text-3xl font-semibold">{data.title}</h3>
      </CardHeader>
      <CardContent>
        <div className="      ">
          <span className="bg-green-300 rounded-full px-2 text-sm">
            {data.role}
          </span>
          <p>{data.description}</p>
          <div>
            <p>
              <b>Qualification:</b> {data.qualification}
            </p>
            <p>
              <b>Expreriance:</b> {data.experience}
            </p>
            <p>
              <b>Expected Salary:</b> {data.salary}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="w-full flex-row justify-end">
        <Dialog onOpenChange={handleDialog}>
          <DialogTrigger asChild>
            <Button className="w-max">
              Apply Now <Link />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Job Apply</DialogTitle>
              <DialogDescription>{data.description}</DialogDescription>
            </DialogHeader>
            <CareerForm id={data.id} />
            <DialogFooter>
              {!isApplied && (
                <Button form={"career"} disabled={isLoading}>
                  {isLoading ? <Loader className="animate-spin" /> : "Apply"}
                </Button>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export const CareerCardSckeleton = () => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-[700px] mx-auto mt-5 animate-pulse">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-3xl font-semibold p-6 bg-muted w-1/2"></h3>
      </div>
      <div className="p-6 pt-0">
        <div className="      ">
          <span className="rounded-full p-3 text-sm bg-muted inline-block w-3/12"></span>
          <p className="p-3 bg-muted"></p>
          <div>
            <p className="p-3 bg-muted mt-1 w-1/2"></p>
            <p className="p-3 bg-muted mt-1 w-1/2"></p>
            <p className="p-3 bg-muted mt-1 w-1/2"></p>
          </div>
        </div>
      </div>
      <div className="flex items-center p-6 pt-0 w-full flex-row justify-end">
        <div className="p-4 bg-muted w-36"></div>
      </div>
    </div>
  );
};

export default CareerCard;
