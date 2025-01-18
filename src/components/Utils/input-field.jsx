import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const InputField = ({
  label,
  type,
  id,
  name,
  register,
  error,
  className,
  classNameLabel,
  ...props
}) => {
  return (
    <>
      {label && (
        <Label htmlFor={id} className={`animate-headShake ${classNameLabel}`}>
          {label}
        </Label>
      )}
      <Input
        type={type}
        id={id}
        {...register(name)}
        className={`${
          error
            ? "border-red-500 outline-red-500 focus-visible:ring-red-100"
            : ""
        } ${className}`}
        {...props}
      />
      {error && <p className="text-red-500">{error.message}</p>}
    </>
  );
};

export default InputField;
