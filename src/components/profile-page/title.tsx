import React from 'react';
import { CgDetailsMore } from "react-icons/cg";

export const Title: React.FC = () => {
  return (
    <div className="ml-5 mt-5 text-xl w-[calc(100%-20px)] flex justify-between">
      My Profile ✅
      <CgDetailsMore className="mr-5"/>
    </div>
  );
};
