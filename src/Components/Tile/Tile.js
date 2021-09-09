import React from "react";
import PropTypes from "prop-types";

export const Tile = ({ tile }) => {
  return (
    <div className="tile-container">
      {Object.values(tile).map((key, i) => {
        return (
          <p key={i} className={!i ? "tile tile-title" : "tile"}>
            {key}
          </p>
        );
      })}
    </div>
  );
};

Tile.propTypes = {
  tile: PropTypes.object.isRequired,
};
