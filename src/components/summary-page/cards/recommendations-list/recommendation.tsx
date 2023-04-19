import React from 'react';
import { Picture } from "./picture";
import { Info } from "./info";
import { People } from "./people";
import { JoinButton } from "./join-button";

export const Recommendation: React.FC = () => {
  return (
    <div className="flex justify-between items-center h-[40px] w-full mb-4">
      <div className="flex">
        <Picture/>
        <Info/>
      </div>
      <People/>
      <JoinButton/>
    </div>
  );
};
