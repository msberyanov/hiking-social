import React from 'react';
import { CardsHeader } from "./cards/cards-header";
import { ViewAllButton } from "./cards/view-all-button";
import { List } from "./cards/friend-list/list";

export const FriendList: React.FC = () => {
  return (
    <div className="flex flex-col w-[calc(40%-40px)] shadow-card h-[55%] bg-white drop-shadow-sm rounded-2xl ml-5">
      <CardsHeader
        title="Friend List 🎉"
        description="People connected with you"
        moreButton={<ViewAllButton/>}
      />
      <List/>
    </div>
  );
};
