import { Label } from "@/components/ui/label";
import React from "react";

const TextareaField = ({
  label,
  id,
  name,
  register,
  error,
  className,
  classNameLabel,
  ...props
}) => {
  return (
    <div>
      <Label className={classNameLabel} htmlFor="job-d">
        {label}
      </Label>
      <textarea
        id={id}
        {...register(name)}
        className={`${
          error
            ? "border-red-500 outline-red-500 focus-visible:ring-red-100"
            : ""
        } ${className}`}
        {...props}
      ></textarea>
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
};

export default TextareaField;
