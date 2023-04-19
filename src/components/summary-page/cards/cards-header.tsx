import React from 'react';
import { CardsTitle, ICardsTitle } from "./cards-title";

interface ICardsHeader extends ICardsTitle {
  moreButton?: JSX.Element;
}

export const CardsHeader: React.FC<ICardsHeader> = ({
  title,
  description,
  moreButton
}) => {
  return (
    <div className="flex justify-between items-center px-5 py-5">
      <CardsTitle
        title={title}
        description={description}
      />
      {moreButton}
    </div>
  );
};
