import { Button } from "@/components/ui/button";
import { TransitionLink } from "@/components/Utils/transition-link";
import React from "react";

const NotVerified = () => {
  return (
    <main className="h-screen w-full bg-background grid place-items-center p-6">
      <div className="flex flex-col items-center justify-center">
        <img src="/no-access.png" alt="no access" className="h-44"/>
        <p className="text-4xl md:text-5xl font-medium mt-5 text-center">Your are not verified</p>
        <p className="text-xl md:text-2xl mt-10">The admin has not verified you yet </p>
        <p className="text-lg md:text-xl mt-2">OR</p>
        <p className="text-xl md:text-2xl mt-2">Your access has been revoked by admin</p>

        <Button className="mt-10">
          <TransitionLink href={"/staff"}>Try Again</TransitionLink>
        </Button>
      </div>
    </main>
  );
};

export default NotVerified;
