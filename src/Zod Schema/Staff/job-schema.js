import { z } from "zod";

export const jobPostingSchema = z.object({
  title: z.string().min(1, "Title cannot be empty"),
  role: z.string().min(1, "Please Select The role"),
  description: z.string().min(1, "Description cannot be empty"),
  qualification: z.string().min(1, "Please specify the required Qualification"),
  salary: z.string().min(1, "Please specify the required the salary"),
  experience: z.string().min(1, "Please specify the required Experience"),
});
