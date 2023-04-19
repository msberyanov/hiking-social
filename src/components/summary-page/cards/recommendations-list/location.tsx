import React from 'react';
import { MdOutlineLocationOn } from "react-icons/md";

export const Location: React.FC = () => {
  return (
    <div className="flex items-center">
      <MdOutlineLocationOn/>
      <p className="ml-1 text-gray-500 text-sm">Alaska</p>
    </div>
  );
};
