import React from 'react';
import { IInfo, Info } from "./info";
import { icons } from "react-icons";

interface IInfoCard extends IInfo {
  icon: JSX.Element;
}

export const InfoCard: React.FC<IInfoCard> = ({
  icon,
  title,
  value
}) => {
  return (
    <div className="w-1/2 flex items-center ml-3">
      {icon}
      <Info
        title={title}
        value={value}
      />
    </div>
  );
};
