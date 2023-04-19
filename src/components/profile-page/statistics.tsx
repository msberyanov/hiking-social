import React from 'react';
import { InfoCard } from "./info-card";
import { MdCardTravel } from "react-icons/md";
import { TbMoon } from "react-icons/tb";

export const Statistics: React.FC = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex justify-around w-[calc(100%-40px)] h-[70px] shadow-card rounded-xl bg-white">
        <InfoCard
          icon={<TbMoon className="w-[20px] h-[20px]"/>}
          title="Camping"
          value="30 Mountain"
        />
        <InfoCard
          icon={<MdCardTravel className="w-[20px] h-[20px]"/>}
          title="Travel"
          value="55 Country"
        />
      </div>
    </div>
  );
};
