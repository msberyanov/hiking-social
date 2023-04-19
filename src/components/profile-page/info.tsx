import React from 'react';

export interface IInfo {
  title: string;
  value: string;
}

export const Info: React.FC<IInfo> = ({
  title,
  value
}) => {
  return (
    <div className="ml-2">
      <p className="text-sm">{title}</p>
      <p className="text-gray-500 text-xs">{value}</p>
    </div>
  );
};
