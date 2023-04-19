import React from 'react';
import { Title } from "./title";
import { Avatar } from "./avatar";
import { Name } from "./name";
import { Hobby } from "./hobby";
import { Statistics } from "./statistics";

export const Card: React.FC = () => {
  return (
    <div className="w-[calc(100%-20px)] h-[calc(100%-40px)] mt-5 bg-white shadow-card rounded-2xl flex flex-col bg-[url('../public/mountain.jpg')] bg-cover">
      <Title/>
      <Avatar/>
      <Name/>
      <Hobby/>
      <Statistics/>
    </div>
  );
};
