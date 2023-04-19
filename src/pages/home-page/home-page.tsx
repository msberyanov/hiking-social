import React from 'react';
import { Summary } from "./summary";
import { Profile } from "./profile";

export const HomePage: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-row">
      <Summary/>
      <Profile/>
    </div>
  );
};
