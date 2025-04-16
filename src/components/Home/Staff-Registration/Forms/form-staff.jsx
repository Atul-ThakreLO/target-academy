import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InputField from "@/components/Utils/input-field";
import { Select } from "@radix-ui/react-select";
import { Loader } from "lucide-react";
import React from "react";
import { Controller } from "react-hook-form";

const FormStaff = ({
  mutation,
  onSubmit,
  register,
  handleSubmit,
  errors,
  control,
  handleChange,
  edit,
}) => {
  return (
    <form
      className="flex flex-col gap-5 mt-5 px-5 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      {!edit && (
        <>
          <InputField
            type={"email"}
            label={"Email"}
            id={"email"}
            name={"email"}
            register={register}
            error={errors.email}
          />
          <InputField
            type={"password"}
            label={"Password"}
            id={"password"}
            name={"password"}
            register={register}
            error={errors.password}
          />
        </>
      )}

      {/* <SelectField
        control={control}
        name={"role"}
        placeholder={"Select Role"}
        selectItems={["TEACHER", "MANAGEMENT"]}
        label={"Role"}
        error={errors.role}
      /> */}
      <Controller
        control={control}
        name={"role"}
        render={({ field }) => (
          <Select
            onValueChange={field.onChange}
            value={field.value}
            defaultValue=""
            clearable
          >
            <SelectTrigger
              id={"role"}
              className={`mt-1 ${
                errors.role
                  ? "border-red-500 outline-red-500 focus-visible:ring-red-100"
                  : ""
              }`}
            >
              <SelectValue placeholder={`Select Role`} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Role</SelectLabel>
                {["TEACHER", "MANAGEMENT"].map((role) => (
                  <SelectItem key={role} value={role}>
                    {role}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      />
      <InputField
        type={"text"}
        label={"Name"}
        id={"name"}
        name={"name"}
        register={register}
        error={errors.name}
      />
      <InputField
        type={"text"}
        label={"Phone"}
        id={"phone"}
        name={"mobile"}
        register={register}
        error={errors.mobile}
      />
      <InputField
        type={"text"}
        label={"Subjects"}
        id={"subjects"}
        name={"subjects"}
        register={register}
        error={errors.subjects}
      />
      <InputField
        type={"text"}
        label={"Qualification"}
        id={"qualification"}
        name={"qualification"}
        register={register}
        error={errors.qualification}
      />
      {/* <InputField
          type={"file"}
          label={"Profile Picture"}
          id={"avatar"}
          name={"avatar"}
          register={register}
          error={errors.avatar}
        /> */}
      {!edit && (
        <>
          <Label htmlFor="resume">Select Your Profile</Label>
          <Input
            type="file"
            // {...register("resume")}
            name="avatar"
            id="avatar"
            className="mt-1"
            // placeholder="Select file"
            onChange={handleChange}
          />
          {errors.avatar && (
            <p className="text-red-500">{errors.avatar.message}</p>
          )}
        </>
      )}

      {/* <Input
          type="file"
          id="avatar"
            onChange={handleChange}
          {...register("avatar")}
        /> */}
      <Button type="submit">
        {mutation.isPending ? <Loader className="animate-spin" /> : "Save"}
      </Button>
    </form>
  );
};

export default FormStaff;
