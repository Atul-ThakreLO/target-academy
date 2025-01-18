import { z } from "zod";

export const emailPassSchema = z
  .object({
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

    confirm_password: z.string({ message: "It can't be Empty" }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Password Doesn't Match",
    path: ["confirm_password"],
  });

export const otpSchema = z.object({
  otp: z.string().length(6, { message: "OTP must be off 6 characters" }),
});

export const studentDetailsSchema = z.object({
  student_name: z
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

  school_id: z
    .string()
    .refine((data) => data !== "", { message: "safdcwqefrwsef" }),

  class_id: z
    .string()
    .refine((data) => data !== "", { message: "safdcwqefrwsef" }),

  subjects: z
    .array(z.string())
    .min(1, { message: "Please choose at least one Subject" }),
});

const MAX_FILE_SIZE = 3 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const profilePictureSchema = z.object({
  avatar: z
    .instanceof(File)
    .refine((file) => {
      console.log(file);
      return file.size <= MAX_FILE_SIZE}, `Max file size is 3MB.`)
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported"
    )
    .optional(),
});

// export const profilePictureSchema = z.union([
//   z
//     .instanceof(File)
//     .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 1MB.`)
//     .refine(
//       (file) => ACCEPTED_FILE_TYPES.includes(file.type),
//       "Only .jpg, .jpeg, .png and .webp formats are supported"
//     ),
//   z.null(),
//   z.undefined(),
// ]);

// export const profilePictureSchema = z.object({
//   avatar: z
//     .instanceof(File)
//     .refine((file) => file.size <= MAX_FILE_SIZE, {
//       message: "File must be less than 5mb",
//     })
//     .refine((file) => ACCEPTED_FILE_TYPES.includes(file.type), {
//       message: "Only .jpg, .jpeg, .png and .webp formats are supported",
//     }),
// });
