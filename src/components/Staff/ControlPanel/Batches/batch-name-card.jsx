import { useBatchDelete, useBatchUpdate } from "@/Hooks/use-batch";
import React, { useState } from "react";
import EditForm from "./edit-form";
import { Button } from "@/components/ui/button";
import { CircleCheckBig, CircleOff, Edit, Loader, Trash } from "lucide-react";

const BatchNameCard = ({ data }) => {
  const [edit, setEdit] = useState(false);

  const removeMutation = useBatchDelete();
  const updateStatus = useBatchUpdate();

  const handleDelete = (id) => {
    removeMutation.mutate(id);
    console.log(id);
  };

  const handleStatus = (id, status) => {
    updateStatus.mutate({ id, isActive: status });
  };
  return (
    <div>
      {data?.map((batch) => (
        <li>
          <div className="border pl-4 pr-2 py-2 flex justify-between items-center rounded-lg mt-3">
            {edit ? (
              <EditForm data={batch} setEdit={setEdit} />
            ) : (
              <>
                <span>{batch.name}</span>
                <div>
                  <Button variant="outline" onClick={() => setEdit(true)}>
                    <Edit />
                  </Button>
                  {batch.isActive ? (
                    <Button
                      variant="outline"
                      onClick={() => handleStatus(batch.id, false)}
                      disabled={updateStatus.isPending}
                    >
                      {updateStatus.isPending ? (
                        <Loader className="animate-spin" />
                      ) : (
                        <CircleCheckBig />
                      )}
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      onClick={() => handleStatus(batch.id, true)}
                      disabled={updateStatus.isPending}
                    >
                      {updateStatus.isPending ? (
                        <Loader className="animate-spin" />
                      ) : (
                        <CircleOff />
                      )}
                    </Button>
                  )}

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
    </div>
  );
};

export default BatchNameCard;
