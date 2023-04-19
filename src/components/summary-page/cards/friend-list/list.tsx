import React from 'react';
import { Friend } from "./friend";

export const List: React.FC = () => {
  return (
    <div className="flex flex-grow flex-col overflow-y-scroll">
      <Friend/>
    </div>
  );
};
