import React from 'react';
import { FiArrowRight } from "react-icons/fi";

export const ProceedButton: React.FC = () => {
  return (
    <div className="bg-sky-700 w-[45px] h-[45px] rounded-[23px] mr-5 flex items-center justify-center text-white text-xl">
      <FiArrowRight/>
    </div>
  );
};
