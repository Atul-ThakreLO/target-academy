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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Mail } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  setStudent,
  setInfo,
  setSubjects,
} from "@/Redux/slices/Student/formData.Slice";

const Form = ({ func, state }) => {
  const [formData, setFormData] = React.useState({});

  const dispatch = useDispatch();
  const { student } = useSelector((select) => select.formData);

  function handleForm(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const obj = Object.fromEntries(data.entries());
    delete obj["confirm_password"];
    dispatch(setStudent(obj));
    if(student) {
      func(e, obj)
    }
  }


  // React.useEffect(
  //   (e) => {
  //     const timeout = setTimeout(() => {
  //       if (fromData.entries !== " ") {
  //         // console.log(fromData);
  //         console.log(student);
  //         console.log(info);
  //       }
  //     }, 1000);

  //     return () => clearTimeout(timeout);
  //   },
  //   [fromData]
  // );

  return (
    <div>
      <Card className="w-[500px]">
        <CardHeader className="mb-5">
          <CardTitle>Create profile</CardTitle>
          <CardDescription>Create your profile to get started.</CardDescription>
        </CardHeader>
        <CardContent className="mb-5">
          <form onSubmit={handleForm}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5 mb-5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="name"
                  name="email"
                  type="email"
                  placeholder="Emter your email"
                />
              </div>
              <div className="flex flex-col space-y-1.5 mb-5">
                <Label htmlFor="password">Create Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create Password"
                  name="password"
                />
              </div>
              <div className="flex flex-col space-y-1.5 mb-5">
                <Label htmlFor="confirm_password">Confirm Password</Label>
                <Input
                  id="confirm_password"
                  type="password"
                  placeholder="Confirm Password"
                  name="confirm_password"
                />
              </div>
            </div>
            <Button className="w-full">
              {state ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Mail />
              )}{" "}
              Get OTP
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Form;
