import EmailPassword from "@/components/Home/Registration/email-password";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState } from "react";
import Progress from "./progress";
import { useRegisterContext } from "../context/register-context-provider";
import VerifyOtp from "./verify-otp";
import StudentDetails from "./student-details";
import ProfilePicture from "./profile-picture";
import { Loader2 } from "lucide-react";

const StudentRegister = () => {
  const { stage, setStage, stageStatus, setStageStatus } = useRegisterContext();
  const [isPrev, setIsPrev] = useState(true);
  // const [count, setCount] = useState(0);
  const [mutationState, setMutationState] = useState({
    isPending: false,
    isError: false,
    error: null,
    isSuccess: false,
    isZodError: false
  });

  const buttonText = ["Send OTP", "Verify OTP", "Save & Next", "Submit"];
  const cardTitle = ["Registration", "Verify OTP", "Personal Details", "Profile Picture"]
  const cardDescription = ["Email and Password creation", "Check Your Email for OTP", "Fill your Personal Details", "Select Your Profile Picture"]

  const handleMutationState = (state) => {
    setMutationState(state);
  };

  const getForm = () => {
    switch (stage) {
      case 0:
        return <EmailPassword onSubmitMutations={handleMutationState} />;
      case 1:
        return <VerifyOtp onSubmitMutations={handleMutationState} />;
      case 2:
        return <StudentDetails onSubmitMutations={handleMutationState} />;
      case 3:
        return <ProfilePicture onSubmitMutations={handleMutationState} />;
    }
  };


// Removed Previous for while
  // const handlePrevious = () => {
  //   if (stage !== 0) {
  //     if (isPrev) {
  //       // setCount((prev) => prev - 1);
  //       setStage((prev) => prev - 1);
  //       setIsPrev(false);
  //       setTimeout(() => {
  //         setIsPrev(true);
  //       }, 1000);
  //     }
  //   }
  // };


  return (
    <div className="flex flex-col justify-center items-center w-full h-full p-10">
      <div className="flex w-[80%] justify-center items-center gap-4 mt-4 mb-20 sticky top-0">
        <Progress />
      </div>
      <div>
        <Card className="w-[500px]">
          <CardHeader>
            <CardTitle>{cardTitle[stage]}</CardTitle>
            <CardDescription>{cardDescription[stage]}</CardDescription>
          </CardHeader>
          <CardContent>{getForm()}</CardContent>
          <CardFooter className="grid grid-cols-2 justify-between">
            {/* <span
              data-enabled={!isPrev}
              className="data-[enabled=true]:cursor-not-allowed select-none"
            >
              {stage !== 0 && (
                <Button
                  type="button"
                  variant="outline"
                  disabled={!isPrev}
                  onClick={handlePrevious}
                >
                  Previous {stage}
                </Button>
              )}
            </span> */}
            <span
              data-enabled={mutationState.isPending || mutationState.isZodError}
              className="data-[enabled=true]:cursor-not-allowed select-none justify-self-end"
            >
              <Button
                type="submit"
                form={`form-${stage + 1}`}
                disabled={mutationState.isPending || mutationState.isZodError}
              >
                {mutationState.isPending ? <Loader2 className="animate-spin"/> : buttonText[stage]}
              </Button>
            </span>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default StudentRegister;
