import React from "react";
import DeleteNotes from "./More Options/delete-notes";
import EditNotesPapers from "../../Notes-Papers-Utils/edit-notes-papers";
import { useUpdateNotes } from "@/Hooks/use-notes";
import { Separator } from "@/components/ui/separator";

const EditDeleteButtons = ({ data }) => {
  const editMutation = useUpdateNotes();

  return (
    <div className="flex gap-2 border px-2 rounded-xl">
      <EditNotesPapers data={data} mutation={editMutation} />
      <div>
        <Separator orientation="vertical" />
      </div>
      {/* <ActiveToogle data={data} /> */}
      <DeleteNotes data={data} />
    </div>
  );
};

export default EditDeleteButtons;
