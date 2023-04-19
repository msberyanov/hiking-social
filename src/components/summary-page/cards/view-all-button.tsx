import React from 'react';
import { RiArrowRightSLine } from "react-icons/ri";

export const ViewAllButton: React.FC = () => {
  return (
    <div className="text-sm flex items-center text-gray-500">
      View All
      <RiArrowRightSLine className="ml-2 text-md"/>
    </div>
  );
};
