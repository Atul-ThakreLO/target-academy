import React from "react";
import Carousel from "./carousel";
import AchievementsCard from "./achievements-card";
import SectionHeader from "@/components/Utils/MainPage/section-header";
import { Newspaper } from "lucide-react";

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
      <div className="grid grid-cols-2 gap-6 p-8">
        <AchievementsCard />
        <AchievementsCard />
        <AchievementsCard />
        <AchievementsCard />
      </div>
    </div>
  );
};

export default AchievementsUpdates;
