import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import BatchCard from "./batch-card";
import BatchCarousel from "./batch-carousel";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Batches = () => {
  const [add, setAdd] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between">
        <h6 className="text-3xl font-semibold gradient-title-custom">
          Batches
        </h6>
        {/* <p className="text-gray-500 mt-1">Add or Provide Notes</p> */}
      </div>
      <BatchCarousel />
    </>
  );
};

export default Batches;
