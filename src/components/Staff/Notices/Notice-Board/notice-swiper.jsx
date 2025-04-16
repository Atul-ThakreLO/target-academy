import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { EffectCreative, Pagination } from "swiper/modules";
import NoticeCard from "../../Notices/Notice-Board/notice-card";
import { useGetNotices } from "@/Hooks/use-notice";
import { Loader2 } from "lucide-react";
const NoticeSwiper = () => {
  const { data, isLoading } = useGetNotices();
  return (
    <Swiper
      grabCursor={true}
      effect={"creative"}
      pagination={{
        clickable: true,
      }}
      creativeEffect={{
        prev: {
          translate: ["-120%", 0, -500],
        },
        next: {
          translate: ["120%", 0, -500],
        },
      }}
      modules={[EffectCreative, Pagination]}
      className="max-w-96 min-w-52 w-full h-full"
    >
      {isLoading ? (
        <SwiperSlide className="flex justify-center items-cente p-2">
          <Loader2 />
        </SwiperSlide>
      ) : (
        data?.data.map((notice) => (
          <SwiperSlide className="flex justify-center items-cente p-2 !h-full">
            <NoticeCard data={notice} />
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
};

export default NoticeSwiper;
