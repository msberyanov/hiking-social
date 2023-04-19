import React from 'react';
import { MdDateRange } from "react-icons/md";

export const Dates: React.FC = () => {
  return (
    <div className="ml-3 flex items-center">
      <MdDateRange/>
      <p className="ml-1 text-gray-500 text-sm">2 Dec - 3 Dec</p>
    </div>
  );
};
