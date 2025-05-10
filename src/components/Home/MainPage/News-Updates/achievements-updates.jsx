import React from "react";
import Carousel from "./carousel";
import AchievementsCard from "./achievements-card";
import SectionHeader from "@/components/Utils/MainPage/section-header";
import { Newspaper } from "lucide-react";
import { achievement } from "@/constants/Home/achievements";

const AchievementsUpdates = () => {
  return (
    <div>
      <SectionHeader
        icon={<Newspaper />}
        title={"Achievement"}
        heading={"Achievements & Updates"}
        description={
          "latest achievement and updates of Target Academy of science"
        }
      />
      <Carousel />
      <div className="grid md:grid-cols-2 gap-6 p-2 md:p-8">
        {achievement.map((achiev, index) => (
          <AchievementsCard
            title={achiev.title}
            para={achiev.desc}
            index={index}
          />
        ))}
{/* 
        <AchievementsCard />
        <AchievementsCard />
        <AchievementsCard /> */}
      </div>
    </div>
  );
};

export default AchievementsUpdates;
