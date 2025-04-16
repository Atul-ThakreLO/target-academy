import { z } from "zod";

export const jobPostingSchema = z.object({
  title: z.string().min(1, "Title can not be empty"),
  role: z.string().min(1, "Please Select The role"),
  description: z.string().min(1, "Description can not be empty"),
  qualification: z.string().min(1, "Please specify the required Qualification"),
  salary: z.string().min(1, "Please specify the required the salary"),
  experience: z.string().min(1, "Please specify the required Experience"),
});

const MAX_FILE_SIZE = 3 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = ["application/pdf"];

export const jobApplySchema = z.object({
  name: z.string().min(1, "Name can not be Empty"),
  email: z.string().email().min(1, "Email can not be Empty"),
  phone: z
    .string()
    .min(10, { message: "Must contain 10 digits" })
    .regex(/^\d+$/, { message: "Mobile number must contain only digits" })
    .min(10, "Enter valid Phone Number min(10 digits)")
    .max(10, "Enter valid Phone Number max(10 digits)"),
  resume: z
    .instanceof(File)
    .refine((file) => file.size < MAX_FILE_SIZE, `Max file size is 3MB.`)
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file.type),
      `Supported file type is .pdf`
    )
});

export const resumeSchema = z.object({
  resume: z
    .instanceof(File)
    .refine((file) => file.size < MAX_FILE_SIZE, `Max file size is 3MB.`)
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file.type),
      `Supported file type is .pdf`
    )
    .optional(),
});
