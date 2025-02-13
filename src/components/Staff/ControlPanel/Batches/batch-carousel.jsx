import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import BatchCard from "./batch-card";

const BatchCarousel = () => {
  function getClassName(index) {
    switch (index) {
      case 0:
        return "8th";
      case 1:
        return "9th";
      case 2:
        return "10th";
      case 3:
        return "11th-12th";
    }
  }

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class=" !w-auto !h-auto !px-8 !py-2 !bg-foreground !text-background !rounded-lg !text-center swiper-pagination-bullet swiper-pagination-bullet-active">${getClassName(
        index
      )}</span>`;
    },
  };

  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        pagination={pagination}
        creativeEffect={{
          prev: {
            // shadow: true,   
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[Pagination, EffectCreative]}
        className="w-full h-60 mt-10 batch-swiper"
      >
        <SwiperSlide className="!h-40 !relative !top-16 !w-full bg-background !flex !items-center rounded-xl">
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] gap-6 mt-5 w-full">
            <BatchCard />
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-40 !relative !top-16 !w-full bg-background !flex !items-center rounded-xl">
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] gap-6 mt-5 w-full">
            <BatchCard />
            <BatchCard />
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-40 !relative !top-16 !w-full bg-background !flex !items-center rounded-xl">
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] gap-6 mt-5 w-full">
            <BatchCard />
            <BatchCard />
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-40 !relative !top-16 !w-full bg-background !flex !items-center rounded-xl">
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] gap-6 mt-5 w-full">
            <BatchCard />
            <BatchCard />
            <BatchCard />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BatchCarousel;
