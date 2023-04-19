import React from 'react';
import { Title } from "../../components/profile-page/title";
import { Card } from "../../components/profile-page/card";

export const Profile: React.FC = () => {
  return (
    <div className="w-4/12 h-screen min-w-[300px] flex flex-col">
      <Card/>
    </div>
  );
};
