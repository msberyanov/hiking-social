import React from 'react';
import { Location } from "./location";
import { Dates } from "./dates";

export const Info: React.FC = () => {
  return (
    <div className="flex flex-col ml-5">
      <p>Hiking on Mount Denali</p>
      <div className="flex">
        <Location/>
        <Dates/>
      </div>
    </div>
  );
};
