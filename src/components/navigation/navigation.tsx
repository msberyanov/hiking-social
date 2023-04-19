import React from 'react';
import { GiMountainRoad } from "react-icons/gi";
import { BiBookmark, BiCalendar, BiCurrentLocation, BiHomeAlt, BiLogOut, BiMessageSquareDetail } from "react-icons/bi";
import { RiSettings2Line } from "react-icons/ri";
import "./navigation-styles.css";
import { Link, useLocation } from "react-router-dom";

export const Navigation: React.FC = () => {
  const {pathname: path} = useLocation();

  const current = (navigationPath: string) => navigationPath === path ? " current" : "";

  return (
    <div className="w-[75px] min-w-[75px] flex flex-col bg-gray-100 justify-between items-center">
      <GiMountainRoad className="w-[30px] h-[30px] mt-7"/>
      <span>
        <Link to="/home">
          <BiHomeAlt className={`navigation-icons${current("/home")}`}/>
        </Link>
        <Link to="/calendar">
          <BiCalendar className={`navigation-icons${current("/calendar")}`}/>
        </Link>
        <Link to="/saved">
          <BiBookmark className={`navigation-icons${current("/saved")}`}/>
        </Link>
        <Link to="/messages">
          <BiMessageSquareDetail className={`navigation-icons${current("/messages")}`}/>
        </Link>
        <Link to="/places">
          <BiCurrentLocation className={`navigation-icons${current("/places")}`}/>
        </Link>
        <Link to="/settings">
          <RiSettings2Line className={`navigation-icons${current("/settings")}`}/>
        </Link>
      </span>
      <BiLogOut className="navigation-icons"/>
    </div>
  );
};
