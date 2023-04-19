import React from 'react';
import { BiSearch } from "react-icons/bi";

export const Search: React.FC = () => {
  return (
    <div className="w-[250px] bg-gray-200 flex items-center rounded-lg">
      <BiSearch className="ml-3"/>
      <input
        type="text"
        className="w-full bg-transparent px-2 py-2.5 focus:outline-none text-sm"
        placeholder="Search Location..."
      />
    </div>
  );
};
