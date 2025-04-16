import StudentEdit from "@/components/Student/student-edit";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Calendar, Hash, IdCard, Mail, Phone } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Fees from "@/components/Student/Profile.jsx/Fees";
import { useGetStudentById } from "@/Hooks/use-student";
import { toast } from "react-toastify";
import nickName from "@/components/Utils/nick-name";
import { Skeleton } from "@/components/ui/skeleton";
import InfoCard, {
  InfoCardSkelleton,
} from "@/components/Student/Profile.jsx/info-card";
import { useSelector } from "react-redux";

const Profile = () => {
  const { student } = useSelector((state) => state.authStudent);
  // // const dispatch = useDispatch();
  // const { data, isLoading, isError, error, isFetched } = useGetStudentById();

  // if (isError) {
  //   toast.error(error?.response?.data?.message);
  //   if (error.message === "Request failed with status code 500") {
  //     return toast.error("Network Error");
  //   }
  //   console.log(error?.response?.data?.message);
  // }

  // const student = data && data.data;
  // const info = data && data.data.StudentInfo;
  // const subjects = data && data.data.StudentSubjects;

  // if (isFetched) {
  //   dispatch(setStudentInfo(data.data));
  // }
  // console.log(info);

  const [shrink, setShrink] = useState(false);
  useEffect(() => {
    document.querySelector(".scrollable").addEventListener("scroll", () => {
      //   const scroll = document.querySelector(".sticky").offsetTop;
      const top = document
        .querySelector(".sticky-nav")
        .getBoundingClientRect().top;
      // const scroll = document.querySelector(".scrollable").scrollY;
      // console.log(top);

      if (top) {
        if (top <= 44) {
          setShrink(true);
        } else {
          setShrink(false);
        }
      }
    });
  }, []);

  return (
    <div className="h-[95vh] overflow-y-auto scrollable">
      <div className="trigger">
        <section className="w-full">
          {/* <img className='w-full h-72' src="data:image/jpeg;base64,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" alt="bg-image" /> */}
          <div className="w-full h-32 lg:h-72 bg-slate-800"></div>
        </section>
        <section
          className={`mb-5 w-full sticky ${
            shrink ? "top-2" : "top-0"
          } z-40 sticky-nav`}
        >
          <div className="-mt-10 lg:-mt-32">
            <div
              className={`flex justify-between duration-500 transition-[width] mx-auto ${
                shrink
                  ? "backdrop-blur-sm bg-background w-[80%] rounded-full border pl-0 pr-4 shadow-xl"
                  : "w-[100%]"
              } px-4`}
            >
              <div>
                <div className="flex items-center">
                  <Avatar
                    className={`border-4 border-white duration-500 ${
                      shrink
                        ? "h-16 w-16 sm:h-20 sm:w-20 lg:h-16 lg:w-16"
                        : "h-20 w-20 sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-56 lg:w-56"
                    }`}
                  >
                    <AvatarImage
                      src={student?.StudentInfo?.avtar_url}
                      alt={student?.StudentInfo?.public_id}
                      className="object-cover"
                    />
                    <AvatarFallback>
                      {nickName(
                        student?.StudentInfo?.student_name || "Student Name"
                      )}
                    </AvatarFallback>
                  </Avatar>
                  <span
                    className={`pl-5 w-max inline-block duration-500 transition-opacity  ${
                      shrink ? "opacity-100" : "opacity-0 hidden"
                    }`}
                  >
                    <div className="text-foreground text-xl">
                      @{student?.StudentInfo?.student_name}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {student?.email}
                    </div>
                  </span>
                </div>

                <div
                  className={`pl-5 duration-500 w-full transition-opacity ${
                    shrink ? "opacity-0 hidden" : "opacity-100"
                  }`}
                >
                  <div className="text-foreground text-xl">
                    {"@" + student?.StudentInfo?.student_name}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {student?.email}
                  </div>
                </div>
              </div>
              <div className="self-center bg-background rounded-full lg:my-auto">
                <StudentEdit
                  className={
                    "flex gap-2 lg:gap-4 hover:bg-gray-100 border-2 px-6 py-1 rounded-full"
                  }
                />
              </div>
            </div>
          </div>
        </section>
        <Separator />
        <section className="lg:mt-10">
          <div className="p-3 lg:p-4 lg:px-5 grid grid-cols-2 grid-flow-row auto-rows-min gap-4 w-full">
            <div className="bg-muted/70 rounded-xl p-6">
              <p className="font-semibold text-3xl mb-6 pl-2">Personal Info</p>
              {
                <InfoCard
                  data={student?.StudentInfo?.student_name}
                  title={"Student Name"}
                >
                  <IdCard size={22} />
                </InfoCard>
              }
              {
                <InfoCard data={student?.email} title={"Email"}>
                  <Mail size={20} />
                </InfoCard>
              }
              {
                <InfoCard data={student?.id} title={"Student ID"}>
                  <Hash absoluteStrokeWidth size={20} />
                </InfoCard>
              }
              {
                <InfoCard
                  data={student?.StudentInfo?.mobile}
                  title={"Mobile No."}
                >
                  <Phone size={20} />
                </InfoCard>
              }
              <div className="mb-10">
                <div className="mb-4 rounded-xl border-2 bg-card-custom border-muted-foreground/10 shadow-lg shadow-black/20 p-5">
                  <p className="pr-2 flex items-center  w-max">
                    <div className="text-background bg-foreground p-3 rounded-full">
                      <Calendar size={20} />
                    </div>
                    <div className="p-2">Date of Birth</div>
                  </p>
                  <div className="pl-2 py-2 pb-10 lg:text-2xl w-max mx-auto">
                    <span className="py-2 px-3 border-2 rounded-lg mr-3 relative after:content-['Day'] after:absolute after:-bottom-[50%] after:left-[50%] after:-translate-x-[50%] after:text-sm">
                      30
                    </span>
                    <span className="py-2 px-3 border-2 rounded-lg mr-3 relative after:content-['Month'] after:absolute after:-bottom-[50%] after:left-[50%] after:-translate-x-[50%] after:text-sm">
                      09
                    </span>
                    <span className="py-2 px-3 border-2 rounded-lg mr-3 relative after:content-['Year'] after:absolute after:-bottom-[50%] after:left-[50%] after:-translate-x-[50%] after:text-sm">
                      2004
                    </span>
                  </div>
                </div>
                {/* <Separator className="w-[90%] h-[0.1rem] bg-gray-300  ml-auto" /> */}
              </div>

              {/* <div className="mb-10">
                <p className="pr-2 flex items-center w-max">
                  <div className="bg-slate-300 p-3 rounded-full"></div>
                  <div className="p-2"></div>
                </p>
                <p className="pl-14 py-2 lg:text-2xl"></p>
                <Separator className="w-[90%] h-[0.1rem] bg-gray-300  ml-auto" />
              </div> */}
            </div>
            <div className="bg-muted/70 rounded-xl p-6">
              <p className="font-semibold text-3xl mb-6 pl-2">Academics Info</p>
              {
                <InfoCard
                  data={student?.StudentInfo?.school.name}
                  title={"School Name"}
                >
                  <IdCard size={22} />
                </InfoCard>
              }

              {
                <InfoCard
                  data={student?.StudentInfo?.class.name}
                  title={"School Name"}
                >
                  <IdCard size={22} />
                </InfoCard>
              }

              <div className="mb-10">
                <div className="mb-4 rounded-xl border-2 bg-card-custom border-muted-foreground/10 shadow-lg shadow-black/20 p-5">
                  <p className="pr-2 flex items-center  w-max">
                    <div className="bg-foreground text-background p-3 rounded-full">
                      <IdCard size={20} />
                    </div>
                    <div className="p-2">Selected Subjects</div>
                  </p>
                  <div className="mx-12 pl-2 py-2 lg:text-2xl">
                    <Table className="">
                      <TableCaption>A list of your Subjects</TableCaption>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-center">sr.No</TableHead>
                          <TableHead className="text-center">
                            Subjects
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody className="text-center">
                        {student?.StudentSubjects?.map((subject, index) => {
                          return (
                            <TableRow key={index}>
                              <TableCell>{index + 1}</TableCell>
                              <TableCell>{subject.subject?.name}</TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                      <TableFooter>
                        <TableRow>
                          <TableCell colSpan={1} className="text-center">
                            Total
                          </TableCell>
                          <TableCell className="text-center">
                            { student?.StudentSubjects?.length}
                          </TableCell>
                        </TableRow>
                      </TableFooter>
                    </Table>
                  </div>
                </div>
                {/* <Separator className="w-[90%] h-[0.1rem] bg-gray-300  ml-auto" /> */}
              </div>
            </div>
            <div className="bg-muted/70 rounded-xl p-6 col-span-2">
              <p className="font-semibold text-3xl mb-6 pl-2">Fess Info</p>
              { <Fees subjects={student?.StudentSubjects} />}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
