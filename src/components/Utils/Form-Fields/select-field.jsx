import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { Controller } from "react-hook-form";

const SelectField = ({
  control,
  name,
  placeholder,
  selectItems,
  label,
  error,
  className,
  isLoading = false,
  setValue = () => {},
}) => {
  return (
    <>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Select
            onValueChange={(val) => {
              field.onChange(val);
              setValue(val);
            }}
            value={field.value}
            defaultValue="" 
            clearable
          >
            <SelectTrigger
              id={name}
              className={`mt-1 ${
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
                {isLoading ? (
                  "Loading"
                ) : (
                  <>
                    {/* <SelectItem value=" " >{`Select ${placeholder}`}</SelectItem> */}
                    {selectItems?.map((item, index) => (
                      <SelectItem key={index} value={item.id}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </>
                )}
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
