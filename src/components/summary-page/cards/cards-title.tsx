import React from 'react';

export interface ICardsTitle {
  title: string;
  description: string;
}

export const CardsTitle: React.FC<ICardsTitle> = ({
  title,
  description
}) => {
  return (
    <div className="flex flex-col">
      <p className="text-xl mt-[-4px]">{title}</p>
      <p className="text-xs mt-1 text-gray-500">{description}</p>
    </div>
  );
};
