// import React, { useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, EffectCreative } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-creative";
// import "swiper/css/pagination";
// import BatchCard from "./batch-card";
// import EditBatches from "./edit-batches";
// import { useGetClassBatch } from "@/Hooks/use-batch";
// import { Loader } from "lucide-react";

// const BatchCarousel = () => {
//   const { data, isFetched, isLoading } = useGetClassBatch();
//   const sref = useRef([]);

//   useEffect(() => {
//     sref.current?.forEach((item) => {
//       console.log(item?.offsetHeight);
//     });
//   }, [sref]);

//   const pagination = {
//     clickable: true,
//     renderBullet: function (index, className) {
//       return `<span class=" !w-auto !h-auto !px-8 !py-2 !bg-foreground !text-background !rounded-lg !text-center swiper-pagination-bullet swiper-pagination-bullet-active">${data?.data[index].name}</span>`;
//     },
//   };

//   return (
//     <>
//       {isLoading ? (
//         <Loader className="animate-spin" />
//       ) : (
//         <Swiper
//           grabCursor={true}
//           effect={"creative"}
//           pagination={pagination}
//           creativeEffect={{
//             prev: {
//               // shadow: true,
//               translate: [0, 0, -400],
//             },
//             next: {
//               translate: ["100%", 0, 0],
//             },
//           }}
//           modules={[Pagination, EffectCreative]}
//           className={`!w-full !h-[200%] mt-10 batch-swiper`}
//           // height={`${sref.current[1].offsetHeight + 100}px`}
//         >
//           {data?.data.map((batch, i) => (
//             <SwiperSlide
//               key={i}
//               className="!relative !top-16 !w-full bg-background !flex !items-center rounded-xl"
//             >
//               <div
//                 ref={(e) => {
//                   sref.current[i] = e;
//                 }}
//                 className="w-full"
//               >
//                 <EditBatches id={batch.id} />
//                 <div className="grid grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] gap-6 mt-5 w-full">
//                   {batch.batches.length > 0 ? (
//                     batch.batches.map((batch, i) => (
//                       <BatchCard key={i} data={batch} />
//                     ))
//                   ) : (
//                     <p className="font-semibold text-2xl">
//                       Batches Are not added Yet____
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       )}
//     </>
//   );
// };

// export default BatchCarousel;

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import BatchCard from "./batch-card";
import EditBatches from "./edit-batches";
import { useGetClassBatch } from "@/Hooks/use-batch";
import { Loader } from "lucide-react";

const BatchCarousel = () => {
  const { data, isFetched, isLoading } = useGetClassBatch();
  const slideRefs = useRef({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperHeight, setSwiperHeight] = useState("auto");
  const swiperRef = useRef(null);

  // Calculate and update the height whenever necessary
  const updateHeight = () => {
    if (!data?.data || data.data.length === 0) return;

    const currentSlideRef = slideRefs.current[activeIndex];
    if (currentSlideRef) {
      // Add some padding to the height to account for margins/paddings
      const newHeight = currentSlideRef.offsetHeight + 100;
      setSwiperHeight(`${newHeight}px`);
    }
  };

  // Update height when data is loaded or active slide changes
  useEffect(() => {
    if (isFetched && data?.data) {
      // Wait for the next render cycle to ensure refs are attached
      setTimeout(updateHeight, 0);
    }
  }, [isFetched, data, activeIndex]);

  // Set up pagination
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class=" !w-auto !h-auto !px-8 !py-2 !bg-foreground !text-background !rounded-lg !text-center swiper-pagination-bullet swiper-pagination-bullet-active">${
        data?.data[index]?.name || ""
      }</span>`;
    },
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center py-10">
          <Loader className="animate-spin" />
        </div>
      ) : (
        <Swiper
          ref={swiperRef}
          grabCursor={true}
          effect={"creative"}
          pagination={pagination}
          creativeEffect={{
            prev: {
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[Pagination, EffectCreative]}
          className="!w-full mt-10 batch-swiper duration-300"
          style={{ height: swiperHeight }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          onAfterInit={(swiper) => {
            setActiveIndex(swiper.activeIndex);
            updateHeight();
          }}
        >
          {data?.data?.map((batch, i) => (
            <SwiperSlide
              key={i}
              className="!relative !top- !w-full bg-background !flex !items-center rounded-xl"
            >
              <div
                ref={(element) => {
                  slideRefs.current[i] = element;
                }}
                className="w-full"
              >
                <div className="absolte">
                  <EditBatches id={batch.id} />
                </div>
                <div className="grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] gap-6 mt-5 w-[95vw] sm:w-full">
                  {batch.batches?.length > 0 ? (
                    batch.batches.map((batchItem, idx) => (
                      <BatchCard key={idx} data={batchItem} />
                    ))
                  ) : (
                    <p className="font-semibold text-2xl">
                      Batches Are not added Yet____
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default BatchCarousel;
