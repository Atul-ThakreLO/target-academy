import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PdfPreview from "@/components/Utils/PDF/pdf-preview";
import { useSubmitAssignment } from "@/Hooks/use-assignment";
import { Loader2, Upload, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const SubmitAssignments = ({ assiID }) => {
  const [fileUrl, setFileUrl] = useState(null);

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setValue("file", e.target.files[0]);
      setFileUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleClear = () => {
    setValue("file", null);
    setFileUrl(null);
  };

  const mutation = useSubmitAssignment();

  const onSubmit = (data) => {
    console.log({ ...data, assi_id: assiID });
    mutation.mutate({...data, assi_id: assiID})
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      setValue("file", null);
      setFileUrl(null);
    }
  }, [mutation.isPending, mutation.isSuccess]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="file"
        name="file"
        className="hidden"
        id="assi-upload"
        accept=".pdf"
        onChange={handleFileChange}
      />
      {fileUrl ? (
        <div className="flex gap-3 items-center">
          <Dialog
          //  open={dialogState} onOpenChange={handleDialog}
          >
            <DialogTrigger className="hover:text-blue-500">
              <Button variant="outline" type="button">
                View
              </Button>
            </DialogTrigger>
            <PdfPreview url={fileUrl} />
          </Dialog>
          <Button dissabled={mutation.isPending}>
            {mutation.isPending ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Submit"
            )}
          </Button>
          <Button
            variant="ghost"
            type="button"
            className="p-2 h-6"
            onClick={handleClear}
          >
            <X />
          </Button>
        </div>
      ) : (
        <Button variant="outline" type="button">
          <Label htmlFor="assi-upload" className="flex gap-2 ">
            <Upload /> Add work
          </Label>
        </Button>
      )}
    </form>
  );
};

export default SubmitAssignments;
