import ProvideNotes from "@/components/Staff/Notes/provide-notes";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import Tabs from "@/components/Utils/Tabs/tabs";
import AddNotesPapers from "@/components/Staff/Notes-Papers-Utils/add-note-papers";
import NotesProvided from "@/components/Staff/Notes/Table-provided/notes-provided";
import NotesAll from "@/components/Staff/Notes/Table-All/notes-all";
import { useAddNotes } from "@/Hooks/use-notes";

const NotesStaff = () => {
  const [add, setAdd] = useState(false);
  const [provide, setProvide] = useState(false);
  const [tableTab, setTableTab] = useState("All");

  const mutation = useAddNotes();

  const updateTab = (value) => {
    setTableTab(value);
  };

  return (
    <div>
      <div className="mt-5 pl-5">
        <h6 className="text-4xl font-semibold gradient-title-custom">Notes</h6>
        <p className="text-gray-500 mt-3">Add or Provide Notes</p>
      </div>
      <div>
        <div className="mt-5 flex gap-4 justify-end">
          <Button
            variant="outline"
            type="button"
            className={`${add ? "border-red-500 text-red-500" : ""}`}
            onClick={() => setAdd((prev) => !prev)}
          >
            {add ? (
              <>
                Cancel
                <Minus />
              </>
            ) : (
              <>
                <Plus /> Add Notes to database
              </>
            )}
          </Button>
          {/* <Button
            variant="outline"
            type="button"
            className={`${provide ? "border-red-500 text-red-500" : ""} `}
            onClick={() => setProvide((prev) => !prev)}
          >
            {provide ? (
              <>
                Cancel
                <Minus />
              </>
            ) : (
              <>
                <Plus /> Provide Notes
              </>
            )}
          </Button> */}
        </div>
        <div className="mt-5">
          <div
            className={`${
              add ? "duration-500" : "h-0 duration-300"
            } overflow-hidden border-b`}
          >
            <AddNotesPapers type={"notes"} add={add} mutation={mutation} />
          </div>
          {/* <div
            className={`${
              provide ? "duration-500" : "h-0 duration-300"
            } overflow-hidden border-b`}
          >
            <ProvideNotes />
          </div> */}
        </div>
      </div>
      <div className="mt-5">
        <h6 className="text-xl">List of Notes</h6>
        <div className="mt-5 flex justify-center">
          <Tabs tab_1={"All"} tab_2={"Provided"} value={updateTab} />
        </div>
        {tableTab === "All" ? (
              <NotesAll />
        ) : (
              <NotesProvided />
        )}
      </div>
    </div>
  );
};

export default NotesStaff;
{
  /* <div className="flex gap-2 items-center border rounded-lg px-3 py-1">
          <Filter size={18} />
          <span className="">Filter Students</span>
        </div> */
}
