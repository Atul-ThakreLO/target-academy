import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";
import React from "react";

const ActiveToogle = ({data}) => {
  return (
    <Button variant="ghost" className="p-0">
      <ShieldCheck />
    </Button>
  );
};

export default ActiveToogle;
