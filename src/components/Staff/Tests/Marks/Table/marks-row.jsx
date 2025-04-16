import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TableCell, TableRow } from "@/components/ui/table";
import {
  useAddMarksByTest,
  useDeleteMarks,
  useEditMarks,
} from "@/Hooks/use-marks";
import { Edit, Loader, Save, Trash, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const MarksRow = ({ student, testId }) => {
  const [editMarks, setEditMarks] = useState(false);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      marks: student.TestPaperStudents[0]?.marks || "",
      // student_id: "",
      test_paper_id: testId,
    },
  });
  const mutation = useAddMarksByTest();
  const handleSaveMarks = (data) => {
    mutation.mutate(data);
    console.log(data);
  };

  const editMutation = useEditMarks();
  const handleEditMarks = (data) => {
    editMutation.mutate(data);
    console.log(data);
  };

  useEffect(() => {
    if (editMutation.isSuccess) {
      setEditMarks(false);
    }
  }, [editMutation.isPending, editMutation.isSuccess]);

  const deleteMutation = useDeleteMarks();
  const handleDeleteMarks = (id) => {
    deleteMutation.mutate(id);
    console.log("delete", id);
  };

  return (
    <>
      <TableRow>
        <TableCell className="text-nowrap">
          {student.StudentInfo.student_name}
        </TableCell>
        {student.TestPaperStudents[0]?.marks ? (
          editMarks ? (
            <>
              <TableCell>
                <form
                  id={`edit-${student.id}`}
                  onSubmit={handleSubmit(handleEditMarks)}
                >
                  <Input
                    type="number"
                    {...register("marks")}
                    className="w-24"
                  />
                  <Input
                    type="hidden"
                    {...register("student_id")}
                    value={student.id}
                  />
                  <Input
                    type="hidden"
                    {...register("id")}
                    value={student.TestPaperStudents[0]?.id}
                  />
                </form>
              </TableCell>
              <TableCell className="text-right">{"null"}</TableCell>
              <TableCell>
                <div className="flex">
                  <Button
                    form={`edit-${student.id}`}
                    disabled={editMutation.isPending}
                  >
                    {editMutation.isPending ? (
                      <Loader className="animate-spin" />
                    ) : (
                      <>
                        <Save /> Save
                      </>
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    type="button"
                    className="rounded-full"
                    onClick={() => setEditMarks(false)}
                  >
                    <X />
                  </Button>
                </div>
              </TableCell>
            </>
          ) : (
            <>
              <TableCell className="text-right">
                {student.TestPaperStudents[0]?.marks}
              </TableCell>
              <TableCell className="text-right">null</TableCell>
              <TableCell>
                <div className="flex gap-2 border px-2 rounded-xl w-max">
                  <Button
                    variant="ghost"
                    type="button"
                    className="p-0"
                    onClick={(e) => {
                      e.preventDefault();
                      setEditMarks(true);
                    }}
                  >
                    <Edit />
                  </Button>
                  <Button
                    variant="ghost"
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDeleteMarks(student.TestPaperStudents[0]?.id);
                    }}
                  >
                    {deleteMutation.isPending ? (
                      <Loader className="animate-spin" />
                    ) : (
                      <Trash />
                    )}
                  </Button>
                </div>
              </TableCell>
            </>
          )
        ) : (
          <>
            <TableCell>
              <form id={student.id} onSubmit={handleSubmit(handleSaveMarks)}>
                <Input type="number" {...register("marks")} className="w-24" />
                <Input
                  type="hidden"
                  {...register("student_id")}
                  value={student.id}
                />
              </form>
            </TableCell>
            <TableCell className="text-right">{"null"}</TableCell>
            <TableCell>
              <Button form={student.id} disabled={mutation.isPending}>
                {mutation.isPending ? (
                  <Loader className="animate-spin" />
                ) : (
                  <>
                    <Save /> Save
                  </>
                )}
              </Button>
            </TableCell>
          </>
        )}
      </TableRow>
    </>
  );
};

export default MarksRow;
