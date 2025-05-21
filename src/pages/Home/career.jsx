import CareerCard, {
  CareerCardSckeleton,
} from "@/components/Home/Career/career-card";
import DataNotFound from "@/components/Utils/Assets/data-not-found";
import ErrorOccured from "@/components/Utils/Assets/error-occured";
import SectionHeader from "@/components/Utils/MainPage/section-header";
import { useGetJobs } from "@/Hooks/use-job";
import { BriefcaseBusiness, Loader } from "lucide-react";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

const Career = () => {
  const { data, isFetched, isLoading, error, isError } = useGetJobs();
  useEffect(() => {
    if (isError) {
      toast.error(error?.response?.data?.message);
    }
  }, [isError]);

  if (isError && error) {
    return <ErrorOccured text={error?.response?.data?.message} />;
  }

  return (
    <div className="w-full md:w-[80%] mx-auto pt-10 pb-96">
      <div className="mt-10 p-6 md:p-0">
        <SectionHeader
          icon={<BriefcaseBusiness />}
          title={"Career"}
          heading={"Career Opportunities"}
        />
        <p className="md:w-1/2 text-center mx-auto mt-8 text-lg">
          We're always looking for passionate educators in Physics, Chemistry,
          and Mathematics who can inspire the next generation of scientists and
          engineers. If you have a postgraduate degree in your subject, a proven
          track record of academic excellence, and the desire to make a
          difference, we want to hear from you.
        </p>
      </div>
      <div className="mt-10 p-2 md:p-6">
        {isLoading ? (
          <>
            <CareerCardSckeleton />
            <CareerCardSckeleton />
          </>
        ) : data?.data.length > 0 ? (
          data?.data?.map((job, index) => <CareerCard key={index} data={job} />)
        ) : (
          <DataNotFound text={"Jobs Are Not listed Yet"} />
        )}

        {/* <CareerCardSckeleton /> */}
      </div>
    </div>
  );
};

export default Career;
