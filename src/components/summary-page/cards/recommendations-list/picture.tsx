import React from 'react';

const image = require("./img/place.jpg");

export const Picture: React.FC = () => {
  return (
    <img
      className="w-[40px] h-[40px] ml-5 rounded-xl"
      src={image}
    />
  );
};
