import { Input } from "@/components/ui/input";
import { useRegisterStudent } from "@/Hooks/use-student";
import { Upload, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRegisterContext } from "../context/register-context-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { profilePictureSchema } from "./register-zod-schema";

const ProfilePicture = ({ onSubmitMutations }) => {
  const [file, setFile] = useState();
  const [isDragging, setIsDragging] = useState(false);
  const [fileInfo, setFileInfo] = useState("");
  const [errorFile, setErrorFile] = useState();
  // const [isZodError, setIsZodError] = useState(false);

  const { formData } = useRegisterContext();

  const mutation = useRegisterStudent();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: {
      avatar: null,
    },
    resolver: zodResolver(profilePictureSchema),
    mode: "onChange",
  });

  const watchfile = watch("avatar");

  const validateFile = (file) => {
    try {
      profilePictureSchema.parse(file);
    } catch (err) {
      // console.log(err);
      setErrorFile(err.errors?.[0]?.message || "Invalid File");
      handleRemove();
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    validateFile(e.dataTransfer.files?.[0]);
    console.log("avatar", e.dataTransfer.files?.[0]);
    handleFileSelection(e.dataTransfer.files?.[0]);
  };

  const handleChange = (e) => {
    // console.log(URL.createObjectURL(e.target.files[0]));
    validateFile(e.target.files?.[0]);
    console.log(e.target.files?.[0]);
    handleFileSelection(e.target.files?.[0]);
  };

  const handleFileSelection = (file) => {
    setFile(URL.createObjectURL(file));
    setFileInfo(file);
    setValue("avatar", file);
  };

  const handleRemove = () => {
    setFile(null);
    setFileInfo(null);
    setValue("avatar", null);
    setIsDragging(false);
  };

  const onSubmit = (data) => {
    validateFile(data.avatar);
    mutation.mutate({ ...formData, ...data });
  };

  useEffect(() => {
    onSubmitMutations({
      isPending: mutation.isPending,
      isError: mutation.isError,
      error: mutation.error,
      isSuccess: mutation.isSuccess,
    });

    return () => {
      onSubmitMutations({
        isPending: false,
        isError: false,
        error: null,
        isSuccess: false,
      });
    };
  }, [
    mutation.isPending,
    mutation.isError,
    mutation.error,
    mutation.isSuccess,
  ]);

  return (
    <>
      <form
        id="form-4"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <div className="flex justify-center items-center cursor-pointer relative w-full">
          <div className="w-full">
            {file ? (
              <>
                <div className="w-32 h-32 mx-auto relative">
                  <img
                    src={file}
                    alt="profile"
                    className="w-full h-full object-cover  rounded-full"
                  />
                  <span
                    className="absolute top-0 right-0 p-2"
                    onClick={handleRemove}
                    title="Remove"
                  >
                    <X className="rounded-full bg-foreground text-background p-1 hover:scale-110 transition-transform duration-100" />
                  </span>
                </div>
                <p className="text-sm text-green-600 mt-3 text-center">
                  You Can upload this Image
                </p>
              </>
            ) : (
              <div
                className={`relative border-2 border-dashed py-5 overflow-hidden rounded-xl ${
                  isDragging
                    ? "border-green-400 bg-green-200/50 scale-105 transition-transform duration-100"
                    : ""
                }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={() => document.getElementById("avatar").click()}
              >
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600 text-center">
                  Drag and drop your Image, or click to select
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="mt-5">
          <Input
            type="file"
            id="avatar"
            className="hidden"
            {...register("avatar")}
            onChange={handleChange}
          />
        </div>
        {errorFile && <p className="text-red-500 text-center">{errorFile}</p>}
        {errors.avatar && (
          <p className="text-red-500 text-center">{errors.avatar.message}</p>
        )}
        {/* <button type="submit">submit</button> */}
      </form>
      {fileInfo && (
        <div className="mt-3">
          <p>File info</p>
          <div className="w-full overflow-hidden border-2 border-dashed rounded-xl">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="border-b-2 border-r-2 border-dashed rounded-xl w-20 px-7">
                    Category
                  </th>
                  <th className="border-b-2 border-dashed rounded-xl ">Info</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="border-b-2 border-r-2 border-dashed rounded-xl ">
                    Name
                  </th>
                  <td className="border-b-2 border-dashed  px-4 line-clamp-2">
                    {fileInfo.name}
                  </td>
                </tr>
                <tr>
                  <th className="border-b-2 border-r-2 border-dashed rounded-xl ">
                    Size
                  </th>
                  <td className="border-b-2 border-dashed rounded-xl px-4">
                    {fileInfo.size}
                  </td>
                </tr>
                <tr>
                  <th className="border-r-2 border-dashed rounded-xl ">Type</th>
                  <td className="border-dashed rounded-xl px-4">
                    {fileInfo.type}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePicture;
