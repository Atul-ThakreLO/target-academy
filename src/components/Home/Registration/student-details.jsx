import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useEffect, useState } from "react";
import { useRegisterContext } from "../context/register-context-provider";
import { Controller, useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { updateStatus } from "./updateStatus";
import InputField from "@/components/Utils/input-field";
import { zodResolver } from "@hookform/resolvers/zod";
import { studentDetailsSchema } from "./register-zod-schema";
import { useGetClass } from "@/Hooks/use-class";
import { useGetSchool } from "@/Hooks/use-school";
import { useGetSubjectsByClass } from "@/Hooks/use-subject";

const StudentDetails = () => {
  const { formData, stage, setStage, setFormData, setStageStatus } =
    useRegisterContext();
  const [classID, setClassID] = useState();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...formData.info,
      subjects: formData.subjects,
    },
    resolver: zodResolver(studentDetailsSchema),
  });

  const {
    data: classData,
    isLoading: isClassLoading,
    isError: isClassError,
    error: classError,
  } = useGetClass();

  const {
    data: schoolData,
    isLoading: isSchoolLoading,
    isError: isSchoolError,
    error: schoolError,
    isFetched,
  } = useGetSchool();

  useEffect(() => {
    console.log(isFetched);

    console.log(schoolData?.data);
  }, [isFetched, isSchoolLoading]);

  const {
    data: subjectData,
    isFetching: isSubjecLoading,
    isError: isSubjectError,
    error: subjectError,
    refetch,
  } = useGetSubjectsByClass(classID);
  // console.log(!!classID);

  const onSubmit = (data) => {
    const { subjects, ...info } = data;
    setFormData((prev) => ({ ...prev, info, subjects }));
    // console.log(info);
  };

  const handleClassChange = (value) => {
    setClassID(value);
  };

  useEffect(() => {
    if (!!formData?.info?.student_name) {
      updateStatus(formData, stage, setStageStatus);
      setStage(3);
    }
  }, [formData]);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      updateStatus(formData, stage, setStageStatus);
    }
  }, [errors]);

  // !!classID && console.log(subjectData[0]);

  return (
    <form id="form-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5 mb-5">
          {/* <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            {...register("student_name")}
            type="text"
            placeholder="Emter your Name"
          /> */}
          <InputField
            label={"Full Name"}
            type={"text"}
            id={"full-name"}
            name={"student_name"}
            register={register}
            error={errors.student_name}
          />
        </div>
        <div className="flex flex-col space-y-1.5 mb-5">
          {/* <Label htmlFor="mobile">Mobile No</Label>
          <Input
            id="mobile"
            type="nummber"
            placeholder="Enter your Mobile No"
            {...register("mobile")}
          /> */}
          <InputField
            label={"Mobile No."}
            type={"number"}
            id={"mobile"}
            name={"mobile"}
            register={register}
            error={errors.mobile}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="school">School</Label>
          <Controller
            control={control}
            name="school_id"
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger
                  id="school_id"
                  className={`${
                    errors.id
                      ? "border-red-500 outline-red-500 focus-visible:ring-red-100"
                      : ""
                  }`}
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {isSchoolLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    schoolData.data?.map((school) => {
                      return (
                        <SelectItem value={school.id} key={school.id}>
                          {school.name}
                        </SelectItem>
                      );
                    })
                  )}
                </SelectContent>
              </Select>
            )}
          />
          {errors.school_id && (
            <p className="text-red-500">{errors.school_id.message}</p>
          )}
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="class">Class</Label>
          <Controller
            control={control}
            name="class_id"
            render={({ field }) => (
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  handleClassChange(value);
                }}
                value={field.value}
              >
                <SelectTrigger
                  id="class"
                  className={`${
                    errors.class_id
                      ? "border-red-500 outline-red-500 focus-visible:ring-red-100"
                      : ""
                  }`}
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {isClassLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    classData.data?.map((classData) => {
                      return (
                        <SelectItem value={classData.id} key={classData.id}>
                          {classData.name}
                        </SelectItem>
                      );
                    })
                  )}
                </SelectContent>
              </Select>
            )}
          />
          {errors.class_id && (
            <p className="text-red-500">{errors.class_id.message}</p>
          )}
        </div>
        {/* {classChanged && <Subjects func={handleSubjects} id={classId} />} */}
        <div>
          {!!classID &&
            (isSubjecLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <>
                <Controller
                  control={control}
                  name="subjects"
                  defaultValue={[]}
                  render={({ field }) =>
                    subjectData.data?.map((subject) => {
                      return (
                        <div
                          key={subject.id}
                          className="flex items-center space-x-2 my-1"
                        >
                          <Checkbox
                            id={subject.id}
                            checked={field.value.includes(subject.id)}
                            onCheckedChange={(checked) => {
                              const updateValue = checked
                                ? [...field.value, subject.id]
                                : field.value.filter((id) => id !== subject.id);
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
              </>
            ))}
        </div>
      </div>
      {/* <button type="submit">Submit</button> */}
    </form>
  );
};

export default StudentDetails;
