import React from 'react';
import { CardsHeader } from "./cards/cards-header";
import { PeriodSelector } from "./cards/period-selector";
import { WorldMap } from "./cards/most-visited-place/world-map";

export const MostVisitedPlaces: React.FC = () => {
  return (
    <div className="w-[calc(60%-20px)] h-[55%] bg-white shadow-card rounded-2xl ml-5 flex flex-col">
      <CardsHeader
        title="Most Visited Places 🌇"
        description="Data obtained based on the most visits"
        moreButton={<PeriodSelector/>}
      />
      <WorldMap/>
    </div>
  );
};
