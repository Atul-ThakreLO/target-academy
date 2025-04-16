import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TableCell } from "@/components/ui/table";
import InputField from "@/components/Utils/input-field";
import { useUpdateResult } from "@/Hooks/use-result";
import { Loader2, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const EditMarks = ({ student, setEdit, refetch }) => {
  const [totalVal, setToatalVal] = useState(null);
  const defaultArray = student.StudentSubjects.map((subject) => ({
    [`marks-${subject.subject.name}`]: student.Result[0].marks.filter((marks) =>
      marks.subject.includes(subject.subject.name)
    )[0].marks,
  }));
  const defaultValues = defaultArray.reduce((prev, curr) => ({
    ...prev,
    ...curr,
  }));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
  });

  const mutation = useUpdateResult(refetch);
  //   console.log(student.Result[0].id);
  const onSubmit = (data) => {
    const mData = student.StudentSubjects.map((subject) => ({
      subject: subject.subject.name,
      marks: data[`marks-${subject.subject.name}`],
    }));
    console.log(mData);

    mutation.mutate({
      id: student.Result[0].id,
      marks: mData,
      total_percent: parseFloat(totalVal),
    });
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      setEdit(false);
    }
  }, [mutation.isPending, mutation.isSuccess]);

  return (
    <>
      <TableCell></TableCell>
      <TableCell>{student.StudentInfo.student_name}</TableCell>
      <TableCell>
        <form
          id={`edit-${student.StudentInfo.student_name}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-3 p-2 overflow-x-auto flex-wrap j">
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
          defaultValue={student.Result[0].total_percent}
          name={`total-${student.StudentInfo.student_name}`}
          value={totalVal}
          onChange={(e) => setToatalVal(e.target.value)}
          className="w-20"
        />
      </TableCell>
      <TableCell>
        <div className="flex gap-2 justify-center rounded-md">
          <Button
            form={`edit-${student.StudentInfo.student_name}`}
            disabled={mutation.isPending}
          >
            {mutation.isPending ? <Loader2 className="animate-spin" /> : "Save"}
          </Button>
          <Button
            type={"button"}
            variant={"ghost"}
            className="p-2 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              setEdit(false);
            }}
          >
            <X />
          </Button>
        </div>
      </TableCell>
    </>
  );
};

export default EditMarks;
