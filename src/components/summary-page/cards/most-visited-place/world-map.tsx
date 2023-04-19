import React from 'react';
import { ReactComponent as WorldMapSvg } from "../../../../svg/world.svg";
import "./most-visited-place-styles.css";

export const WorldMap: React.FC = () => {
  return (
    <div className="flex flex-grow overflow-y-scroll p-2">
      <WorldMapSvg className="h-full w-full fill-sky-700"/>
    </div>
  );
};
