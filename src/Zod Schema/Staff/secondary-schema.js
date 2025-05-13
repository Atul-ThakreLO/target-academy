import { z } from "zod";

export const SchoolSchema = z.object({
  name: z.string().min(1, "School Name can't be Empty"),
});

export const ClassSchema = z.object({
  name: z.string().min(1, "School Name can't be Empty"),
});

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = ["application/pdf"];

export const NotesSchema = z.object({
  title: z.string().min(1, "Title cann't be empty"),
  class_id: z.string().min(1, "Class cann't be empty"),
  subject_id: z.string().min(1, "Subject cann't be empty"),
  file: z
    .instanceof(File)
    .refine((file) => {
      return file.size <= MAX_FILE_SIZE;
    }, `Max file size is 10MB.`)
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file.type),
      "Only PDF formats are supported"
    ),
});

export const PaperSchema = z.object({
  title: z.string().min(1, "Title cann't be empty"),
  class_id: z.string().min(1, "Class cann't be empty"),
  subject_id: z.string().min(1, "Subject cann't be empty"),
  test_id: z.string().min(1, "Test cann't be empty"),
  file: z
    .instanceof(File)
    .refine((file) => {
      return file.size <= MAX_FILE_SIZE;
    }, `Max file size is 10MB.`)
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file.type),
      "Only PDF formats are supported"
    ),
});

export const EditNotesSchema = z.object({
  title: z.string().min(1, "Title cann't be empty"),
  class_id: z.string().min(1, "Class cann't be empty"),
  id: z.string().min(1, "Class cann't be empty"),
  subject_id: z
    .string()
    .min(1, "Subject also need to reselect or change, if the class is changed"),
});

export const EditNotesPapersSchema = (data) =>
  z
    .object({
      title: z.string().min(1, "Title cann't be empty"),
      class_id: z.string().min(1, "Class cann't be empty"),
      test_id: z.string().optional(),
      id: z.string().min(1, "Class cann't be empty"),
      subject_id: z
        .string()
        .min(
          1,
          "Subject also need to reselect or change, if the class is changed"
        ),
    })
    .refine(
      (values) => {
        if (
          values.class_id !== data.class_id &&
          values.subject_id === data.subject_id
        ) {
          return false;
        } else {
          return true;
        }
      },
      {
        message: "Please Change subject also",
        path: ["subject_id"],
      }
    );

export const EditAssignmentSchema = z.object({
  title: z.string().min(1, "Title cann't be empty"),
  class_id: z.string().min(1, "Class cann't be empty"),
  id: z.string().min(1, "something is wrong"),
  subjects_id: z
    .string()
    .min(1, "Subject also need to reselect or change, if the class is changed"),
  batch_id: z
    .string()
    .min(1, "Batch also need to reselect or change, if the class is changed"),
});
//   if (!!paper) {
//     EditNotesPapersSchema.refine(
//       (values) => {
//         if (
//           values.class_id !== data.class_id &&
//           values.test_id === data.test_id
//         ) {
//           return false;
//         } else {
//           return true;
//         }
//       },
//       {
//         message:
//           "If the class is changes, Then test must need to change associated with class",
//         path: ["test_id"],
//       }
//     );
//   }
