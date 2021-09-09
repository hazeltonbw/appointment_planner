import React from "react";
import { Tile } from "../Tile/Tile";
import PropTypes from "prop-types";

export const TileList = ({ tiles, inst }) => {
  return (
    <div>
      {tiles.map((tile, index) => {
        return <Tile key={`${inst}${index}`} tile={tile} />;
      })}
    </div>
  );
};

TileList.propTypes = {
  tiles: PropTypes.array.isRequired,
  inst: PropTypes.string.isRequired
};
