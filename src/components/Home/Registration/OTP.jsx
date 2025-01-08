import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Loader2, Mail } from "lucide-react";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import otpSlice from "../../../Redux/slices/Student/otp.slice";
import { useDispatch, useSelector } from "react-redux";
import { setOTPData } from "../../../Redux/slices/Student/otp.slice";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const OTP = ({ func, state }) => {
  const { student } = useSelector((state) => state.formData);

  const [otp, setOtp] = React.useState({});
  const handleOtpChange = (value) => {
    setOtp({ email: student.email, otp: value });
  };
  return (
    <div>
      <Card className="w-[500px]">
        <CardHeader className="mb-5">
          <CardTitle>OTP Verify</CardTitle>
          <CardDescription>
            Complete verification to get started.
          </CardDescription>
        </CardHeader>
        <CardContent className="mb-5">
          <InputOTP
            maxLength={6}
            pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
            onChange={handleOtpChange}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            className="w-full"
            onClick={(e) => {
              func(e, otp);
            }}
          >
            {state ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Mail />
            )}{" "}
            submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default OTP;
