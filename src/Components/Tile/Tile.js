import React from "react";

export const Tile = ({ contact }) => {
  return (
    <div className="tile-container">
      <div className="tile">
        <div className="tile tile-title">{contact.name}</div>
        <p>Phone Number: {contact.phone} </p>
        <p>Email: {contact.email} </p>
      </div>
    </div>
  );
};
