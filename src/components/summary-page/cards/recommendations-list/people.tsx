import React from 'react';

const durov = require("./img/durov.png");
const mark = require("./img/mark.png");
const hardy = require("./img/hardy.png");

export const People: React.FC = () => {
  return (
    <div className="flex">
      <img
        src={durov}
        className="recommendation-avatar"
      />
      <img
        src={mark}
        className="recommendation-avatar"
      />
      <img
        src={hardy}
        className="recommendation-avatar"
      />
      <div className="recommendation-avatar bg-red-300 text-[10px] flex items-center justify-center text-red-800">
        +5
      </div>
    </div>
  );
};
