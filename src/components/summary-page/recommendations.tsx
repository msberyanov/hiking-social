import React from 'react';
import { CardsHeader } from "./cards/cards-header";
import { ViewAllButton } from "./cards/view-all-button";
import { List } from "./cards/recommendations-list/list";

export const Recommendations: React.FC = () => {
  return (
    <div className="w-[calc(60%-40px)] shadow-card h-[calc(45%-40px)] bg-white drop-shadow-sm rounded-2xl ml-5 flex flex-col">
      <CardsHeader
        title="Recommendations For You 🌈"
        description="Interesting places to see upcoming"
        moreButton={<ViewAllButton/>}
      />
      <List/>
    </div>
  );
};
