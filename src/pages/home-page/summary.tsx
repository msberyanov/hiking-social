import React from 'react';
import { Header } from "../../components/summary-page/header/header";
import { Cards } from "../../components/summary-page/cards/cards";

export const Summary: React.FC = () => {
  return (
    <div className="flex-grow h-screen flex flex-col">
      <Header/>
      <Cards/>
    </div>
  );
};
