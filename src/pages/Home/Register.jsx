import React, { useEffect, useState } from "react";
import Form from "@/components/Home/Registration/Form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import OTP from "@/components/Home/Registration/OTP";
import useSendOTP from "@/Hooks/Registration/useSendOTP";
import useVerifyOTP from "@/Hooks/Registration/useVerifyOTP";
import { useSelector } from "react-redux";
import StudentInfo from "@/components/Home/Registration/StudentInfo";
import { Button } from "@/components/ui/button";
import useSendStudent from "@/Hooks/Registration/useSendStudent";
import { Loader2, SaveAll } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Register = () => {
  const [regData, setRegData] = useState({});
  const [step, setStep] = useState("EMAIL"); // Track registration steps

  const [isLoading, setIsLoading] = useState(false);

  const sendMutation = useSendOTP();
  const verifyMutation = useVerifyOTP();
  const sendStudentMutation = useSendStudent();
  const { student } = useSelector((state) => state.formData);

  const handleSendOTP = (e, data) => {
    e.target.disabled = true;
    setIsLoading(true);
    console.log(student);

    sendMutation.mutate(data, {
      onSuccess: () => {
        setIsLoading(false);
        e.target.disabled = false;
        setRegData((prev) => ({ ...prev, student: data }));
        setStep("OTP");
      },
      onError: (error) => {
        setIsLoading(false);
        e.target.disabled = false;
        console.log(error);
      },
    });
  };

  const handleVerifyOTP = (e, otp) => {
    e.target.disabled = true;
    setIsLoading(true);
    console.log("regData during OTP verification:", regData);

    verifyMutation.mutate(otp, {
      onSuccess: () => {
        setIsLoading(false);
        e.target.disabled = false;
        setStep("STUDENT_INFO");
      },
      onError: (error) => {
        setIsLoading(false);
        e.target.disabled = false;
        console.log(error.response?.data);
      },
    });
  };

  const handleStudentInfo = (e, info, subjects) => {
    console.log(subjects);

    e.target.disabled = true;
    setRegData((prev) => ({
      ...prev,
      info,
      subjects,
    }));
    setStep("COMPLETE");
  };

  const handleSave = (e) => {
    e.preventDefault();
    const avatar = new FormData(e.currentTarget);
    e.target.disabled = true;
    avatar.append("student", JSON.stringify(regData.student));
    avatar.append("info", JSON.stringify(regData.info));
    avatar.append("subjects", JSON.stringify(regData.subjects));
    setIsLoading(true);
    console.log("Final Registration Data:", regData);
    sendStudentMutation.mutate(avatar, {
      onSuccess: () => {
        setIsLoading(false);
        e.target.disabled = false;
        // setStep("STUDENT_INFO");
      },
      onError: (error) => {
        setIsLoading(false);
        e.target.disabled = false;
        console.log(error.response);
      },
    });
    // Add any save logic here (e.g., sending regData to the server)
  };

  return (
    <div className="h-[100vh] w-[100%] flex justify-center items-center">
      {step === "EMAIL" && <Form func={handleSendOTP} state={isLoading} />}
      {step === "OTP" && <OTP func={handleVerifyOTP} state={isLoading} />}
      {step === "STUDENT_INFO" && <StudentInfo func={handleStudentInfo} />}
      {step === "COMPLETE" && (
        <>
          <Card className="w-[500px]">
            <CardHeader className="mb-5 flex flex-col gap-2 items-center">
              <CardTitle>Verification</CardTitle>
              <CardDescription>
                Create your profile to get started.
              </CardDescription>
            </CardHeader>
            <CardContent className="mb-5">
              <div className="flex flex-col gap-2 items-center">
                <h1>Save your Info To register</h1>
                <p>
                  You have to Pay as per subject and class selected <br /> so
                  please ensure that the info you filled is correct
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <form onSubmit={handleSave}>
                <Label
                  htmlFor="avatar"
                  className="flex justify-center cursor-pointer"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden relative">
                    <img
                      src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
                      alt="profile"
                    />
                    <p className="absolute bottom-10">Choose Photo</p>
                  </div>
                </Label>
                <Input
                  id="avatar"
                  name="avatar"
                  type="file"
                  placeholder="Choose Photo"
                  className="mb-6 hidden"
                />
                <Button className="w-full">
                  {!isLoading ? (
                    <SaveAll className="mr-2 h-4 w-4" /> + "Save"
                  ) : (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                </Button>
              </form>
            </CardFooter>
          </Card>
        </>
      )}
    </div>
  );
};

export default Register;
