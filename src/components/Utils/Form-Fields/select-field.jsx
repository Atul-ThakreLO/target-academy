import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import React from "react";
import { Controller } from "react-hook-form";

const SelectField = ({
  control,
  name,
  placeholder,
  selectItems,
  label,
  error,
  className
}) => {
  return (
    <>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger
              id={name}
              className={`${
                error
                  ? "border-red-500 outline-red-500 focus-visible:ring-red-100"
                  : ""
              } ${className}`}
            >
              <SelectValue placeholder={`Select ${placeholder}`} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>{placeholder}</SelectLabel>
                {selectItems.map((item, index) => (
                  <SelectItem key={index} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      />
      {error && <p className="text-red-500">{error.message}</p>}
    </>
  );
};

export default SelectField;
