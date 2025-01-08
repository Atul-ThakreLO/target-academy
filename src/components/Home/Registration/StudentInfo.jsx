import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";
import useGetSchool from "@/Hooks/Registration/useGetSchool";
import { Button } from "@/components/ui/button";
import { Loader2, Mail } from "lucide-react";
import useGetClass from "@/Hooks/Registration/useGetClass";
import { useDispatch, useSelector } from "react-redux";
import { setInfo } from "@/Redux/slices/Student/formData.Slice";
import useSendStudent from "@/Hooks/Registration/useSendStudent";
import { Checkbox } from "@/components/ui/checkbox";
import useGetSubjects from "@/Hooks/Registration/useGetSubjects";
import Subjects from "./Subjects";

const StudentInfo = ({ func, state }) => {
  // const handleSelect = () => {
  //   return useGetSchool();
  // };
  // const [formData, setFormData] = React.useState({});
  const [saving, setSaving] = React.useState(false);
  const [classId, setClassId] = React.useState("");
  const [classChanged, setClassChanged] = React.useState(false);
  const [subjectsArray, setSubjectsArray] = React.useState([]);

  const sendStudentMutation = useSendStudent();

  const {
    isPending: isSchoolPending,
    isError: isSchoolError,
    data: schoolData,
    error: schoolError,
  } = useGetSchool();
  const {
    isPending: isClassPending,
    isError: isClassError,
    data: classData,
    error: classError,
  } = useGetClass();
  // if (error) {
  //   console.log("error", error);
  // } else if (isPending) {
  //   console.log("Loading");
  // } else if (isError) {
  //   console.log(error);
  // } else if (data) {
  //   console.log(data);
  // }
  // const { info } = useSelector((select) => select.formData);
  // const dispatch = useDispatch();

  // function handleForm(e) {
  //   setFormData(formdata);
  //   console.log(formdata);
  // }

  function handleSubjects(e) {
    const { value, checked } = e.target;
    setSubjectsArray((prevSelected) =>
      checked
        ? [...prevSelected, value] // Add value if checked
        : prevSelected.filter((subject) => subject !== value) // Remove if unchecked
    );
    console.log(subjectsArray);
    
  }

  function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    const data = new FormData(e.currentTarget);
    const formData = Object.fromEntries(data.entries());
    console.log(subjectsArray);
    func(e, formData, subjectsArray);
    e.target.innerText = "Saved";
    setSaving(false);
  }

  function handleClass(e) {
    if (e.target.name === "class_id") {
      setClassId(e.target.value);
      setClassChanged(true);
    }
  }

  return (
    <div>
      <Card className="w-[500px]">
        <CardHeader className="mb-5">
          <CardTitle>Create profile</CardTitle>
          <CardDescription>Create your profile to get started.</CardDescription>
        </CardHeader>
        <CardContent className="mb-5">
          <form onSubmit={handleSave} onChange={handleClass}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5 mb-5">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="student_name"
                  type="text"
                  placeholder="Emter your Name"
                />
              </div>
              <div className="flex flex-col space-y-1.5 mb-5">
                <Label htmlFor="mobile">Mobile No</Label>
                <Input
                  id="mobile"
                  type="nummber"
                  placeholder="Enter your Mobile No"
                  name="mobile"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="class">Class</Label>
                <Select name="class_id">
                  <SelectTrigger id="class">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {isClassPending ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      classData?.map((clas) => {
                        return (
                          <SelectItem value={clas.class_id} key={clas.class_id}>
                            {clas.class_name}
                          </SelectItem>
                        );
                      })
                    )}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="school">School</Label>
                <Select name="school_id">
                  <SelectTrigger id="school">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {isSchoolPending ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      schoolData?.map((school) => {
                        return (
                          <SelectItem
                            value={school.school_id}
                            key={school.school_id}
                          >
                            {school.school_name}
                          </SelectItem>
                        );
                      })
                    )}
                  </SelectContent>
                </Select>
              </div>
              {classChanged && <Subjects func={handleSubjects} id={classId} />}
            </div>
            <Button className="w-full" type="submit">
              {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : ""}{" "}
              Save
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentInfo;
