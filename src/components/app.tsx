import React from 'react';
import { Navigation } from "./navigation/navigation";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home-page/home-page";

export const App: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-row">
      <Navigation/>
      <Routes>
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
    </div>
  );
};
