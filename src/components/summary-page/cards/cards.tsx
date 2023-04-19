import React from 'react';
import { MostVisitedPlaces } from "../most-visited-places";
import { FriendList } from "../friend-list";
import "../summary-page-styles.css";
import { Recommendations } from "../recommendations";
import { Discount } from "../discount";

export const Cards: React.FC = () => {
  return (
    <div className="flex flex-wrap w-full h-full overflow-y-scroll">
      <MostVisitedPlaces/>
      <FriendList/>
      <Discount/>
      <Recommendations/>
    </div>
  );
};
