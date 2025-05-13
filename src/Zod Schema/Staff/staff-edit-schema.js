import { z } from "zod";

export const staffEditSchema = z.object({
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

  role: z.enum(["TEACHER", "MANAGEMENT"], {
    required_error: "Please Select Role",
  }),
  subjects: z.string().optional(),
  qualification: z.string().min(1, "Please Provide Us Qualification"),
});
