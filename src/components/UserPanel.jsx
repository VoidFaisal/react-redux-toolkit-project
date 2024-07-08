import React, { useState } from "react";
import { useSelector } from "react-redux";
const UserPanel = () => {
  const card = useSelector((state) => state.cards);
  return (
    <div>
      {card.map((cards) => (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{cards.text}</div>
            {/* <p className="text-gray-700 text-base">{cards.text}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserPanel;
