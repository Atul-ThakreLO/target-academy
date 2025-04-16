import { z } from "zod";

const MAX_FILE_SIZE = 3 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const registrationSchema = z.object({
  email: z
    .string()
    .min(1, "Email cannot be Empty")
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Must be 8 or more characters long" })
    .regex(/[A-Z]/, { message: "Must contain at least one uppercase letter" })
    .regex(/[0-9]/, { message: "Must contain at least one number" })
    .regex(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, {
      message: "Must contain at least one special character",
    }),
  role: z.enum(["TEACHER", "MANAGEMENT"], {
    required_error: "Please Select Role",
  }),
  name: z
    .string()
    .min(1, { message: "Name Cannot empty" })
    .refine((data) => data.trim().split(/\s+/).length >= 2, {
      message: "Name must contain at least first and last name with space",
    })
    .refine((data) => !/\d/.test(data), {
      message: "Name cannot contain numbers",
    })
    .refine((data) => !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(data), {
      message: "Name cannot contain special characters",
    }),
  mobile: z
    .string()
    .min(10, { message: "Must contain 10 digits" })
    .regex(/^\d+$/, { message: "Mobile number must contain only digits" }),
  subjects: z.string().optional(),
  qualification: z.string().min(1, "Please Provide Us Qualification"),
  avatar: z
    .instanceof(File)
    .refine((file) => {
      return file.size <= MAX_FILE_SIZE;
    }, `Max file size is 3MB.`)
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported"
    ),
});
