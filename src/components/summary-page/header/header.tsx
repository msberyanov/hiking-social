import React from 'react';
import { Greetings } from "./greetings";
import { Search } from "./search";
import { Notifications } from "./notifications";

export const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center">
      <Greetings/>
      <div className="flex items-center">
        <Search/>
        <Notifications/>
      </div>
    </div>
  );
};
