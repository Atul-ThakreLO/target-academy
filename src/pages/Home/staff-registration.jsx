import RegistrationCard from "@/components/Home/Staff-Registration/registration-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Target } from "lucide-react";
import React from "react";
import { useLocation, useParams } from "react-router-dom";

const StaffRegistration = () => {
  const { name, token, job_id  } = useParams();
  return (
    <ScrollArea className="w-full h-screen">
      <main className="w-4/5 mx-auto h-full">
        <div className="flex justify-between items-center sticky top-0 bg-background py-5">
          <div className="logo flex items-center text-foreground font-semibold">
            <h1 className="text-4xl">Target</h1>
            <Target size={40} className="-mt-5" />
          </div>
          <p className="font-medium text-2xl">Staff Registraion: {name}</p>
        </div>
        <div className="mt-10">
          <p className="font-medium text-center text-3xl">
            Complete Yor Registration
          </p>
          <div>
            <RegistrationCard job_id={job_id} />
          </div>
        </div>
      </main>
    </ScrollArea>
  );
};

export default StaffRegistration;
