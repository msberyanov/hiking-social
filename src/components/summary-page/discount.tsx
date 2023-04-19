import React from 'react';
import { Explore } from "./cards/discount/explore";

export const Discount: React.FC = () => {
  return (
    <div className="w-[calc(40%-20px)] shadow-card h-[calc(45%-40px)] drop-shadow-sm rounded-2xl ml-5 bg-[url('../public/mountain_1.jpg')] bg-cover flex flex-col items-center">
      <Explore/>
    </div>
  );
};
