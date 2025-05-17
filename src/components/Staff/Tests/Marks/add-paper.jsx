import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import PdfPreview from "@/components/Utils/PDF/pdf-preview";
import { useAddPaper } from "@/Hooks/use-papers";
import { PaperSchema } from "@/Zod Schema/Staff/secondary-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileText, Loader, Loader2, Upload, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

const AddPaper = ({ data }) => {
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
    resolver: zodResolver(PaperSchema),
    defaultValues: {
      title: data.title,
      class_id: data.class_id,
      subject_id: data.subject_id,
      test_id: data.id,
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

  const handleRemove = () => {
    setFile(null);
    setValue("file", null);
    inputFileRef.current.value = "";
  };

  const mutation = useAddPaper();
  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate(data);
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      setFile(null);
      setValue("file", null);
      inputFileRef.current.value = "";
    }
  }, [mutation.isSuccess]);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`flex flex-col gap-4 justify-center ${
          file ? "block" : "hidden"
        }`}
      >
        <div className="flex items-center gap-2">
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
          <Button
            variant="outline"
            type="button"
            className="rounded-full h-12 w-12"
            onClick={handleRemove}
          >
            <X />
          </Button>
        </div>

        <Button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? <Loader2 className="animate-spin" /> : "Submit"}
        </Button>
      </form>

      <div
        className={`w-2/5 grid place-items-center ${file ? "hidden" : "block"}`}
      >
        <div
          className={`border-2 border-dashed h-44 w-full rounded-xl flex flex-col items-center justify-center ${
            dragOver ? "border-green-500 bg-green-100/50" : ""
          } ${errors.file ? "border-red-500 bg-red-100/50 " : ""}`}
          onClick={() => inputFileRef.current.click()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragRmove}
          onDrop={handleDrop}
        >
          <Upload size={50} />
          <p>Drag and Drop or Click to slect Paper</p>
          <Input
            ref={inputFileRef}
            type="file"
            id="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      </div>
    </>
  );
};

export default AddPaper;
