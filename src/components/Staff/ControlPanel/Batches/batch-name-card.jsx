import { useBatchDelete, useBatchUpdate } from "@/Hooks/use-batch";
import React, { useState } from "react";
import EditForm from "./edit-form";
import { Button } from "@/components/ui/button";
import {
  CircleCheckBig,
  CircleOff,
  Edit,
  Loader,
  Loader2,
  Trash,
} from "lucide-react";
import { useActiveInActive } from "@/Hooks/use-staff";

const BatchNameCard = ({ data, classID }) => {
  const [edit, setEdit] = useState(null);

  const removeMutation = useBatchDelete();
  // const updateStatus = useBatchUpdate();
  const statusMutation = useActiveInActive("batches", ["batch", classID]);

  const handleDelete = (id) => {
    removeMutation.mutate(id);
  };

  const handleStatus = (batch) => {
    statusMutation.mutate({ id: batch.id, status: !batch.isActive });
  };
  return (
    <>
      {data?.map((batch, i) => (
        <li>
          {statusMutation.isPending || removeMutation.isPending ? (
            <div className="absolute h-full w-full top-0 left-0 grid place-items-center bg-muted/30">
              <Loader2 className="animate-spin" />
            </div>
          ) : (
            ""
          )}
          <div className="border pl-4 pr-2 py-2 flex justify-between items-center rounded-lg mt-3">
            {edit === batch.id ? (
              <EditForm data={batch} setEdit={setEdit} />
            ) : (
              <>
                <span>{batch.name}</span>
                <div>
                  <Button variant="outline" onClick={() => setEdit(batch.id)}>
                    <Edit />
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => handleStatus(batch)}
                    className="group"
                    disabled={statusMutation.isPending}
                  >
                    {batch.isActive ? <CircleOff /> : <CircleCheckBig />}
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => handleDelete(batch.id)}
                  >
                    <Trash />
                  </Button>
                </div>
              </>
            )}
          </div>
        </li>
      ))}
    </>
  );
};

export default BatchNameCard;
