import React from 'react';
import { Time } from "./time";
import { MessagesCount } from "./messages-count";

export const Messages: React.FC = () => {
  return (
    <div className="flex flex-col items-center mr-5">
      <Time/>
      <MessagesCount/>
    </div>
  );
};
