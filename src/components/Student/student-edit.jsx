import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { Loader2, UserCog } from "lucide-react";
import { useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import InputField from "../Utils/input-field";
import SelectField from "../Utils/Form-Fields/select-field";
import { useGetClass } from "@/Hooks/use-class";
import { useGetSubjectsByClass } from "@/Hooks/use-subject";
import { useGetSchool } from "@/Hooks/use-school";
import { useGetBatchByClass } from "@/Hooks/use-batch";
import { Checkbox } from "../ui/checkbox";
import { useUpdateStudent } from "@/Hooks/use-student";
import { zodResolver } from "@hookform/resolvers/zod";
import { studentEditSchema } from "@/Zod Schema/Student/student-edit-schema";

const StudentEdit = ({ className }) => {
  const [open, setOpen] = useState(false);
  const { student } = useSelector((state) => state.authStudent);
  const [classID, setClassID] = useState(student.StudentInfo.class_id);
  const [batchID, setBatchID] = useState(student.StudentInfo.batch_id);
  const { data: classData, isLoading: classLOading } = useGetClass(open);
  const { data: schoolData, isLoading: schoolLoading } = useGetSchool();
  const { data: subjectData, isLoading: subjectLoading } =
    useGetSubjectsByClass(classID, open);
  const { data: batchData, isLoading: batchLoading } = useGetBatchByClass(
    classID,
    open
  );

  const schema = studentEditSchema(student, batchID, classID);

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      student_name: student.StudentInfo.student_name,
      mobile: student.StudentInfo.mobile,
      school_id: student.StudentInfo.school_id,
      class_id: student.StudentInfo.class_id,
      batch_id: student.StudentInfo.batch_id,
      subjects: student.StudentSubjects.map((s) => s.subject.id),
    },
  });

  useEffect(() => {
    if (classID !== student.StudentInfo.class_id) {
      setValue("subjects", []);
      setValue("batch_id", "");
    } else {
      setValue(
        "subjects",
        student.StudentSubjects.map((s) => s.subject.id)
      );
      setValue("batch_id", student.StudentInfo.batch_id);
    }
  }, [classID]);

  // const s = student.StudentSubjects.map((s) => s.subject.id);
  // console.log(s);
  const mutation = useUpdateStudent();

  // console.log(student.StudentSubjects[0].subject.id);
  const onSubmit = (data) => {
    mutation.mutate(data);
    // console.log(data);
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      setOpen(false);
    }
  }, [mutation.isPending, mutation.isSuccess]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className={className}>
          <UserCog />
          Edit
        </div>
      </DialogTrigger>
      <DialogContent className="h-[70%]">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[100%]">
          <div className="p-4">
            <form onSubmit={handleSubmit(onSubmit)} id="student-edit">
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5 mb-5">
                  <InputField
                    register={register}
                    name={"student_name"}
                    label={"Name"}
                    id={"name"}
                    type={"text"}
                    error={errors.student_name}
                  />
                </div>
                <div className="flex flex-col space-y-1.5 mb-5">
                  <InputField
                    register={register}
                    name={"mobile"}
                    label={"Mobile"}
                    id={"mobile"}
                    type={"text"}
                    error={errors.mobile}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <SelectField
                    control={control}
                    selectItems={classData?.data}
                    error={errors.class_id}
                    name={"class_id"}
                    placeholder={"Class"}
                    label={"Select Class"}
                    isLoading={classLOading}
                    setValue={setClassID}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <SelectField
                    control={control}
                    selectItems={schoolData?.data}
                    error={errors.school_id}
                    name={"school_id"}
                    placeholder={"School"}
                    label={"Select School"}
                    isLoading={schoolLoading}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <SelectField
                    control={control}
                    selectItems={batchData?.data}
                    error={errors.batch_id}
                    name={"batch_id"}
                    placeholder={"Batch"}
                    label={"Select Batch"}
                    isLoading={batchLoading}
                    setValue={setBatchID}
                  />
                </div>
              </div>
              {!!classID &&
                (subjectLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <div className="mt-5">
                    <Controller
                      control={control}
                      name="subjects"
                      defaultValue={[]}
                      render={({ field }) =>
                        subjectData.data?.map((subject) => {
                          return (
                            <div
                              key={subject.id}
                              className="flex items-center space-x-2 my-2"
                            >
                              <Checkbox
                                id={subject.id}
                                checked={field.value.includes(subject.id)}
                                onCheckedChange={(checked) => {
                                  const updateValue = checked
                                    ? [...field.value, subject.id]
                                    : field.value.filter(
                                        (id) => id !== subject.id
                                      );
                                  field.onChange(updateValue);
                                }}
                              />
                              <Label htmlFor={subject.id}>{subject.name}</Label>
                            </div>
                          );
                        })
                      }
                    />
                    {errors.subjects && (
                      <p className="text-red-500">{errors.subjects.message}</p>
                    )}
                  </div>
                ))}
            </form>
          </div>
        </ScrollArea>
        <DialogFooter>
          <Button form="student-edit" disabled={mutation.isPending}>
            {mutation.isPending ? <Loader2 className="animate-spin" /> : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default StudentEdit;
