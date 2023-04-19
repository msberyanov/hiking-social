import React from 'react';

const avatarUrl = require("./img/avatar.jpg");

export const Avatar: React.FC = () => {
  return (
    <div className="flex justify-center mt-10">
      <img
        src={avatarUrl}
        className="w-[150px] h-[150px] rounded-[75px]"
      />
    </div>
  );
};
