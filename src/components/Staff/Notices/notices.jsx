import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import NoticeBoard from "./Notice-Board/notice-board";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const Notices = () => {
  const [add, setAdd] = useState(false);
  return (
    <>
      <h6 className="text-3xl font-semibold gradient-title-custom">Notices</h6>
      <div className="flex gap-5 mt-10">
        <div className="w-1/2">
          <NoticeBoard />
        </div>
        <div className="w-1/2 flex flex-col justify-between">
          <div>
            <Label>Title</Label>
            <Input />
          </div>
          <div>
            <Label>Content</Label>
            <textarea className="border-2 w-full rounded-xl p-2" rows={5} />
          </div>
          <div className="flex gap-10 justify-around ">
            <div className="flex items-center gap-2"> 
              <Checkbox />
              <Label>Is Important</Label>
            </div>
            <div className="flex items-center gap-2">
              <Label>Expiry Date:</Label>
              <input type="date" />
            </div>
          </div>
          <div className="w-full flex justify-center">
            <Button className="w-4/5">Submit</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notices;

/* <div className="flex items-center justify-between">
        <h6 className="text-3xl font-semibold gradient-title-custom">
          Notices
        </h6>
        {/* <p className="text-gray-500 mt-1">Add or Provide Notes</p> 
        {add ? (
          <Button
            variant="outline"
            onClick={() => setAdd((prev) => !prev)}
            className="border-red-500 text-red-500"
          >
            <Minus /> Cancel
          </Button>
        ) : (
          <Button variant="outline" onClick={() => setAdd((prev) => !prev)}>
            <Plus /> Add New
          </Button>
        )}
      </div> */
