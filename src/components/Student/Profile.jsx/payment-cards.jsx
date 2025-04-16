import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { MoveLeft, MoveRight } from "lucide-react";
import SwiperSlideCard from "./swiper-slide-card";

const PaymentCards = ({ cardPlanValue, isActive, subjects }) => {
  const [plan, setPlan] = React.useState(2000);

  const plans = [2000, 4000, 8000];
  useEffect(() => {
    cardPlanValue(plan);
  }, [plan]);
  return (
    <div
      className="flex flex-col items-center justify-center pb-7 pl-5 duration-700"
      style={{
        opacity: isActive != "card" ? 0.3 : 1,
        pointerEvents: isActive != "card" ? "none" : "all",
      }}
    >
      <p className="text-4xl mb-10">Choose Plan</p>
      <Swiper
        // dir="rtl"
        effect="cards"
        grabCursor={true}
        // loop={true}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        modules={[EffectCards, Navigation]}
        onSlideChange={(swiper) => setPlan(plans[swiper.activeIndex])}
        className="w-4/5 max-w-md"
      >
        {plans.map((plan, index) => (
          <SwiperSlide key={index}>
            <SwiperSlideCard
              key={index}
              plan={plan}
              plan_no={index + 1}
              subjects={subjects}
            />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <div className="bg-background border-2 text-lg rounded-lg">
            <div className="p-3">
              <p className="text-lg mb-5">Plan 1</p>
              <p className="text-6xl mb-5">₹ 4000</p>
              <p className="text-lg mb-3">Subject wise Distribution :</p>
              <div className="grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))]">
                <div className="flex justify-between gap-4 border-l border-r px-4">
                  <p>Subject1-</p>
                  <p>1000</p>
                </div>
                <div className="flex justify-between gap-4 border-l border-r px-4">
                  <p>Subject1-</p>
                  <p>1000</p>
                </div>
                <div className="flex justify-between gap-4 border-l border-r px-4">
                  <p>Subject1-</p>
                  <p>1000</p>
                </div>
                <div className="flex justify-between gap-4 border-l border-r px-4">
                  <p>Subject1-</p>
                  <p>1000</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <div className="bg-background border-2 text-lg rounded-lg">
            <div className="p-3">
              <p className="text-lg mb-5">Plan 1</p>
              <p className="text-6xl mb-5">₹ 8000</p>
              <p className="text-lg mb-3">Subject wise Distribution :</p>
              <div className="grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))]">
                <div className="flex justify-between gap-4 border-l border-r px-4">
                  <p>Subject1-</p>
                  <p>2000</p>
                </div>
                <div className="flex justify-between gap-4 border-l border-r px-4">
                  <p>Subject1-</p>
                  <p>2000</p>
                </div>
                <div className="flex justify-between gap-4 border-l border-r px-4">
                  <p>Subject1-</p>
                  <p>2000</p>
                </div>
                <div className="flex justify-between gap-4 border-l border-r px-4">
                  <p>Subject1-</p>
                  <p>2000</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
      {/* Custom navigation buttons */}
      <div className="flex space-x-4 mt-6 pointer-events-all">
        <button className="swiper-button-prev-custom bg-background p-3 rounded-full shadow-lg hover:bg-muted">
          <MoveLeft size={15} />
        </button>
        <button className="swiper-button-next-custom bg-background p-3 rounded-full shadow-lg hover:bg-muted">
          <MoveRight size={15} />
        </button>
      </div>
    </div>
  );
};

export default PaymentCards;
