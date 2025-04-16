import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { TableCell, TableRow } from "@/components/ui/table";
import InputField from "@/components/Utils/input-field";
import { useAddStudentResult, useDeleteResult } from "@/Hooks/use-result";
import { Edit, Loader2, Trash, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import EditMarks from "./edit-marks";

const MarksRow = ({ student, refetch, toogleSelect, selectedIDs }) => {
  const [totalVal, setToatalVal] = useState(null);
  const [edit, setEdit] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mutation = useAddStudentResult(refetch);
  const deleteMutation = useDeleteResult(refetch);
  const onSubmit = (data) => {
    const mData = student.StudentSubjects.map((subject) => ({
      subject: subject.subject.name,
      marks: data[`marks-${subject.subject.name}`],
    }));
    console.log(mData);

    mutation.mutate({
      student_id: student.id,
      marks: mData,
      total_percent: parseFloat(totalVal),
    });
  };

  const handleDelete = () => {
    deleteMutation.mutate(student.Result[0].id);
    // console.log(student.Result[0].id);
  };

  return (
    <TableRow>
      {edit ? (
        <EditMarks student={student} setEdit={setEdit} refetch={refetch} />
      ) : student.Result.length > 0 ? (
        <>
          <TableCell>
            <Checkbox
              checked={selectedIDs.includes(student.Result[0].id)}
              onCheckedChange={() => toogleSelect(student.Result[0].id)}
            />
          </TableCell>
          <TableCell className="text-nowrap">{student.StudentInfo.student_name}</TableCell>
          <TableCell>
            <div className="flex gap-3 p-2">
              {student.Result[0].marks.map((result) => (
                <div>
                  <p className="text-center font-semibold w-20">
                    {result.subject}
                  </p>
                  <p className="text-center px-5 py-1 mt-1 border rounded-md w-20">
                    {result.marks}
                  </p>
                </div>
              ))}
            </div>
          </TableCell>
          <TableCell>
            <p className="text-center px-5 py-1 border rounded-md w-max">
              {student.Result[0].total_percent} %
            </p>
          </TableCell>
          <TableCell>
            {/* <Button form={student.StudentInfo.student_name}>Save</Button> */}
            <div className="flex gap-2 border justify-center rounded-md px-2">
              <Button
                type={"button"}
                variant={"ghost"}
                className="p-0"
                onClick={() => setEdit(true)}
              >
                <Edit />
              </Button>
              <Button
                type={"button"}
                variant={"ghost"}
                className="p-0"
                disabled={mutation.isPending}
                onClick={handleDelete}
              >
                {deleteMutation.isPending ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <Trash />
                )}
              </Button>
            </div>
          </TableCell>
        </>
      ) : (
        <>
          <TableCell></TableCell>
          <TableCell className="text-nowrap">{student.StudentInfo.student_name}</TableCell>
          <TableCell>
            <form
              id={student.StudentInfo.student_name}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex gap-3 p-2">
                {student.StudentSubjects.map((subject) => (
                  <InputField
                    register={register}
                    name={`marks-${subject.subject.name}`}
                    label={subject.subject.name}
                    key={subject.subject.name}
                    // error={errors}
                    type={"number"}
                    className={"w-20"}
                  />
                  // <p>{subject.subject.name}</p>
                ))}
              </div>
            </form>
          </TableCell>
          <TableCell>
            <Input
              name={`total-${student.StudentInfo.student_name}`}
              value={totalVal}
              onChange={(e) => setToatalVal(e.target.value)}
              className="w-20"
            />
          </TableCell>
          <TableCell>
            <Button
              form={student.StudentInfo.student_name}
              disabled={mutation.isPending}
            >
              {mutation.isPending ? (
                <Loader2 className="animate-spin" />
              ) : (
                "Save"
              )}
            </Button>
          </TableCell>
        </>
      )}
    </TableRow>
  );
};

export default MarksRow;
