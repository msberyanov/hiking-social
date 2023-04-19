import React from 'react';
import { useActions } from "../hooks/actions";

export const FavouritesPage: React.FC = () => {
  const {addFavourite} = useActions();
  const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {

  }
  return (
    <div>
      fav
    </div>
  );
};
