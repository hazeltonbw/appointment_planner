import React from "react";
import { Tile } from "../Tile/Tile";

export const TileList = ({ contacts }) => {
  return (
    <div>
      {contacts.map((contact, index) => {
        return <Tile key={index} contact={contact} />;
      })}
    </div>
  );
};
