import React from 'react';
import { Recommendation } from "./recommendation";
import "./recommendations-styles.css";

export const List: React.FC = () => {
  return (
    <div className="flex flex-grow flex-col overflow-y-scroll">
      <Recommendation/>
    </div>
  );
};
