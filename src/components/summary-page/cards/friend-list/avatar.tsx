import React from 'react';
import { Status } from "./status";

const elonAvatar = require("./img/musk.png");

export const Avatar: React.FC = () => {
  return (
    <div className="h-[50px] w-[50px]">
      <img
        src={elonAvatar}
        className="rounded-[25px] ml-5"
      />
      <Status/>
    </div>
  );
};
