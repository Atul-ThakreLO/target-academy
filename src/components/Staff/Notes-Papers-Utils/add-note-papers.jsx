import React, { useEffect, useRef, useState } from "react";
import { FileText, Loader, Upload, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useGetClass } from "@/Hooks/use-class";
import SelectField from "@/components/Utils/Form-Fields/select-field";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/components/Utils/input-field";
import { useGetSubjectsByClass } from "@/Hooks/use-subject";
import { NotesSchema } from "@/Zod Schema/Staff/secondary-schema";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import PdfPreview from "@/components/Utils/PDF/pdf-preview";
import { Separator } from "@/components/ui/separator";

const AddNotesPapers = ({ type, add, mutation }) => {
  const [classID, setClassID] = useState("");
  const { data: ClassData, isLoading: ClassLoading } = useGetClass(add);
  const { data: SubjectData, isLoading: SubjectLoading } =
    useGetSubjectsByClass(classID);
  const [dragOver, setDragOver] = useState(false);
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

  const inputFileRef = useRef(null);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(NotesSchema),
    defaultValues: {
      title: "",
      class_id: "",
      subject_id: "",
      file: "",
    },
  });

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragRmove = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    setValue("file", e.dataTransfer.files[0]);
    setFile(e.dataTransfer.files[0]);
    setFileUrl(URL.createObjectURL(e.dataTransfer.files[0]));
    // console.log(e.dataTransfer.files[0]);
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    setValue("file", e.target.files[0]);
    setFile(e.target.files[0]);
    setFileUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleClear = () => {
    inputFileRef.current.value = "";
    setValue("file", "");
    setFile(null);
    setFileUrl(null);
  };

  const setClassValue = (val) => {
    setClassID(val);
  };

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      inputFileRef.current.value = "";
      setFile(null);
      setFileUrl(null);
      reset();
    }
  }, [mutation.isSuccess]);

  return (
    <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
      <div className={`flex w-full ${file ? "block" : "hidden"}`}>
        <div className="border shadow-md p-2 rounded-lg flex gap-2 max-w-96">
          <div>
            <FileText size={50} />
          </div>
          <div>
            <Dialog>
              <DialogTrigger className="hover:text-blue-500 text-left">
                {file?.name}
              </DialogTrigger>
              <PdfPreview url={fileUrl} />
            </Dialog>
            <Separator />
            <p className="line-clamp-2">{file?.type}</p>
          </div>
        </div>
        <Button type="button" variant="ghost" onClick={handleClear}>
          <X />
        </Button>
      </div>

      <div className={`w-full ${file ? "hidden" : "block"}`}>
        <div
          className={`w-[70%] h-48 mx-auto border-2 border-dashed ${
            dragOver ? "border-green-500 bg-green-100/50" : ""
          } ${
            errors.file ? "border-red-500 bg-red-100/50 " : ""
          } rounded-xl flex flex-col justify-center items-center cursor-pointer`}
          onClick={() => inputFileRef.current.click()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragRmove}
          onDrop={handleDrop}
        >
          <Upload size={70} />
          <p>Drag And Drop || Click to select</p>
        </div>
        <Input
          ref={inputFileRef}
          type="file"
          id="file"
          className="hidden"
          accept=".pdf"
          onChange={handleFileChange}
        />
      </div>

      {errors.file ? (
        <p className="text-center text-red-500">{errors.file.message}</p>
      ) : (
        ""
      )}
      <div className="mt-10 flex justify-between gap-5 items-center px-12">
        <div className="w-full">
          <InputField
            label={"File Title"}
            type={"text"}
            id={"title"}
            name={"title"}
            register={register}
            error={errors.title}
          />
        </div>
        <div className="w-full">
          <SelectField
          className={"w-full"}
            control={control}
            name={"class_id"}
            placeholder={"Select Class"}
            selectItems={ClassData?.data}
            label={"Class"}
            error={errors.class_id}
            isLoading={ClassLoading}
            setValue={setClassValue}
          />
        </div>
        <div className="w-full">
          <SelectField
            control={control}
            name={"subject_id"}
            placeholder={"Select Subject"}
            selectItems={SubjectData?.data}
            label={"Subject"}
            error={errors.subject_id}
            isLoading={SubjectLoading}
          />
        </div>
        {/* {type === "papers" && (
          <div>
            <Label>Test</Label>
            <Select>
              <SelectTrigger className="w-60 mt-2">
                <SelectValue placeholder="Select a Test" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Test-1">Test-1</SelectItem>
                <SelectItem value="Test-2">Test-2</SelectItem>
                <SelectItem value="Test-3">Test-3</SelectItem>
                <SelectItem value="Test-4">Test-4</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )} */}
        <Button className="md:mt-5 w-56" disabled={mutation.isPending}>
          {mutation.isPending ? <Loader className="animate-spin" /> : "Add"}
        </Button>
      </div>
    </form>
  );
};

export default AddNotesPapers;
