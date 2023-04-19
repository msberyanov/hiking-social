import React from 'react';
import { Message } from "./message";
import { ProceedButton } from "./proceed-button";

export const Explore: React.FC = () => {
  return (
    <div className="bg-white w-[calc(100%-20px)] h-[80px] rounded-2xl mt-[10px] flex justify-between items-center">
      <Message/>
      <ProceedButton/>
    </div>
  );
};
