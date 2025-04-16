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
import { TransitionNavLink } from "@/components/Utils/transition-link";
import { useStudentLogin } from "@/Hooks/use-student";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputField from "@/components/Utils/input-field";
import { Loader2 } from "lucide-react";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email cannot be Empty" })
    .email({ message: "Invalid Email" }),
  password: z.string().min(1, { message: "Password cannot be empty" }),
});

const Login = () => {
  const mutation = useStudentLogin();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const data = Object.fromEntries(formData.entries());
  //   console.log(data);
  //   mutation.mutate(data);
  // }

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <div className="h-[100vh] w-[100%] flex justify-center items-center">
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Login to your account by email and passowrd
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} id="login">
              <div className="grid w-full items-center gap-4">
                <InputField
                  label={"Email"}
                  type={"text"}
                  id={"email"}
                  name={"email"}
                  register={register}
                  error={errors.email}
                />
                <InputField
                  label={"Password"}
                  type={"password"}
                  id={"password"}
                  name={"password"}
                  register={register}
                  error={errors.password}
                  autoComplete={"password"}
                />
              </div>
              <div className="mt-4 flex justify-end"></div>
            </form>
          </CardContent>
          <CardFooter className="flex-col">
            <p className="w-full">Don't Have Account?</p>
            <div className="flex justify-between w-full mt-2">
              <TransitionNavLink href="/register">
                <Button variant="outline">Register</Button>
              </TransitionNavLink>
              <span
                data-enabled={mutation.isPending}
                className="data-[enabled=true]:cursor-not-allowed select-none justify-self-end"
              >
                <Button
                  type="submit"
                  form="login"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    "Login"
                  )}
                </Button>
              </span>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Login;
