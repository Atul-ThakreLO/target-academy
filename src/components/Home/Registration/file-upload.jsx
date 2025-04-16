import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { X, Upload } from "lucide-react";
// import { Alert, AlertDescription } from "@/components/ui/alert";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

const FileUpload = () => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const selectedFile = watch("avatar");

  // Cleanup preview URL on unmount
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const validateFile = (file) => {
    if (!file) return "File is required";

    if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
      return "Only .jpg, .jpeg, .png and .webp files are accepted";
    }

    if (file.size > MAX_FILE_SIZE) {
      return "File size must be less than 5MB";
    }

    return null;
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    handleFileSelection(file);
  };

  const handleFileSelection = (file) => {
    setError(null);

    if (file) {
      const validationError = validateFile(file);
      if (validationError) {
        setError(validationError);
        return;
      }

      // Create preview
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
      setValue("avatar", file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    handleFileSelection(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const removeFile = () => {
    setValue("avatar", null);
    setPreviewUrl(null);
    setError(null);
    setUploadProgress(0);
  };

  const onSubmit = async (data) => {
    try {
      const mutation = useRegisterStudent();

      // Custom axios instance with upload progress
      const customConfig = {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted);
        },
      };

      mutation.mutate(data, {
        ...customConfig,
        onSuccess: () => {
          // Reset form after successful upload
          removeFile();
          setUploadProgress(0);
        },
        onError: (error) => {
          setError(error.message || "Upload failed");
          setUploadProgress(0);
        },
      });
    } catch (err) {
      setError(err.message || "Upload failed");
      setUploadProgress(0);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Drag and Drop Zone */}
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
            ${isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"}
            ${error ? "border-red-500 bg-red-50" : ""}
          `}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => document.querySelector('input[type="file"]').click()}
        >
          <input
            type="file"
            accept={ACCEPTED_IMAGE_TYPES.join(",")}
            className="hidden"
            onChange={handleFileChange}
            {...register("avatar", { validate: validateFile })}
          />

          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            Drag and drop your image here, or click to select
          </p>
          <p className="mt-1 text-xs text-gray-500">JPG, PNG, WebP up to 5MB</p>
        </div>

        {/* Preview */}
        {previewUrl && (
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={previewUrl}
              alt="Preview"
              className="w-full h-48 object-cover"
            />
            <button
              type="button"
              onClick={removeFile}
              className="absolute top-2 right-2 p-1 bg-gray-800 rounded-full text-white hover:bg-gray-700"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Progress Bar */}
        {uploadProgress > 0 && uploadProgress < 100 && (
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
        )}

        {/* Error Message */}
        {/* {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )} */}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!selectedFile || !!error}
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg
            disabled:bg-gray-300 disabled:cursor-not-allowed
            hover:bg-blue-600 transition-colors"
        >
          Upload Image
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
