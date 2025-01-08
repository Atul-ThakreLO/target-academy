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
import { TransitionNavLink } from "@/components/Utils/transition-link";
import { useStudentLogin } from "@/Hooks/use-studnt";

const Login = () => {
  const mutation = useStudentLogin();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    mutation.mutate(data);
  }

  return (
    <>
      <div className="h-[100vh] w-[100%] flex justify-center items-center">
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Password"
                    autoComplete={"password"}
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <Button type="submit">Login</Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p>Don't Have Account?</p>
            <TransitionNavLink href="/register">
              <Button variant="outline">Register</Button>
            </TransitionNavLink>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Login;
