import React, { useEffect, useMemo } from "react";
import NoticeCard from "./notice-card";
import { useGetNoticeForStudent } from "@/Hooks/use-notice";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";

const Notices = () => {
  const { data, isLoading, isFetched, isError, error } =
    useGetNoticeForStudent();

  useMemo(() => {
    if (isError) {
      toast.error(error.response.data.message);
    }
  }, [isLoading, isError]);

  return (
    <div className="">
      <div className="notice-bg bg-center border rounded-lg shadow-lg p-4 md:p-5">
        <div className="glassmorphism p-5 md:p-10 grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-3">
          {isLoading ? (
            <div>
              <Loader2 className="animate-spin" />
            </div>
          ) : (
            data?.data.map((notice) => (
              <NoticeCard key={notice.id} data={notice} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Notices;
