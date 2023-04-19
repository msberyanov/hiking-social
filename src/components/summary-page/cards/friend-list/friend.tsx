import React from 'react';
import { Avatar } from "./avatar";
import { Info } from "./info";
import { Messages } from "./messages";

export const Friend: React.FC = () => {
  return (
    <div className="h-[50px] w-full flex justify-between items-center mb-2.5">
      <div className="flex items-center">
        <Avatar/>
        <Info/>
      </div>
      <Messages/>
    </div>
  );
};
