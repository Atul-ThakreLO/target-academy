import { z } from "zod";

export const studentEditSchema = (data, batchID, classID) =>
  z.object({
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
      .refine((data) => data !== "", { message: "Please select School" }),

    class_id: z
      .string()
      .refine((data) => data !== "", { message: "Please select Class" }),

    batch_id: z.string({ message: "provide batch" }).optional().nullable(),

    subjects: z
      .array(z.string())
      .min(1, { message: "Please choose at least one Subject" }),
  });
// .refine(
//   (values) => {
//     console.log(!values.batch_id);

//     // if (!values.batch_id) {
//     //   return true;
//     // } else {
//     //   if (values.class_id === data.StudentInfo.class_id) {
//     //     return true;
//     //   } else {
//     //     if (values.batch_id === data.StudentInfo.batch_id) {
//     //       return false;
//     //     } else {
//     //       return true;
//     //     }
//     //   }
//     // }
//     if (values.class_id === data.StudentInfo.class_id) {
//       return true;
//     } else {
//       if (!values.batch_id) {
//         return true;
//       } else {
//         if (values.batch_id === data.StudentInfo.batch_id) {
//           return false;
//         } else {
//           return true;
//         }
//       }
//     }
//   },
//   {
//     message: "Please change batch also for class",
//     path: ["batch_id"],
//   }
// )
// .refine(
//   (values) => {
//     console.log(
//       values.class_id !== data.class_id &&
//         values.subjects[0] === data.StudentSubjects[0].subject.id
//     );

//     if (
//       values.class_id !== data.class_id &&
//       values.subjects[0] === data.StudentSubjects[0].subject.id
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   },
//   {
//     message: "Please Change subject also as class changed",
//     path: ["subjects"],
//   }
// );
