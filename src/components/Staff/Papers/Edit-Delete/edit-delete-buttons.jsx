import React from "react";
import EditNotesPapers from "../../Notes-Papers-Utils/edit-notes-papers";
import { useDeletePaper, useUpdatePaper } from "@/Hooks/use-papers";
import DeleteNotesPapers from "../../Notes-Papers-Utils/delete-notes-papers";

const EditDeleteButtons = ({ data }) => {
  const editMutation = useUpdatePaper();
  const deleteMutation = useDeletePaper();
  return (
    <div className="flex gap-2 border px-2 rounded-xl">
      {/* <EditNotes data={data} /> */}
      <EditNotesPapers data={data} mutation={editMutation} />
      {/* <ActiveToogle data={data} /> */}
      {/* <DeleteNotes data={data} /> */}
      <DeleteNotesPapers data={data} mutation={deleteMutation} />
    </div>
  );
};

export default EditDeleteButtons;
