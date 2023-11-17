import React from "react";
import { Line, SkeletonTile } from "@contentstack/venus-components";

const ConfigLoader: React.FC = function () {
  return (
    <div className="loader-component">
      <SkeletonTile
        numberOfTiles={1}
        tileHeight={15}
        tileWidth={250}
        tileBottomSpace={5}
        tileTopSpace={40}
        tileleftSpace={20}
        tileRadius={10}
      />
      <SkeletonTile
        numberOfTiles={1}
        tileHeight={15}
        tileWidth={750}
        tileBottomSpace={30}
        tileTopSpace={5}
        tileleftSpace={20}
        tileRadius={10}
      />
      <Line type="dashed" />
      <SkeletonTile
        numberOfTiles={1}
        tileHeight={15}
        tileWidth={150}
        tileBottomSpace={5}
        tileTopSpace={40}
        tileleftSpace={20}
        tileRadius={10}
      />
      <SkeletonTile
        numberOfTiles={1}
        tileHeight={15}
        tileWidth={350}
        tileBottomSpace={30}
        tileTopSpace={5}
        tileleftSpace={20}
        tileRadius={10}
      />
      <Line type="dashed" />
      <SkeletonTile
        numberOfTiles={1}
        tileHeight={15}
        tileWidth={150}
        tileBottomSpace={5}
        tileTopSpace={40}
        tileleftSpace={20}
        tileRadius={10}
      />
      <SkeletonTile
        numberOfTiles={1}
        tileHeight={15}
        tileWidth={350}
        tileBottomSpace={30}
        tileTopSpace={5}
        tileleftSpace={20}
        tileRadius={10}
      />
      <Line type="dashed" />
      <SkeletonTile
        numberOfTiles={1}
        tileHeight={15}
        tileWidth={200}
        tileBottomSpace={5}
        tileTopSpace={40}
        tileleftSpace={20}
        tileRadius={10}
      />
      <SkeletonTile
        numberOfTiles={1}
        tileHeight={80}
        tileWidth={750}
        tileBottomSpace={20}
        tileTopSpace={15}
        tileleftSpace={20}
        tileRadius={10}
      />
      <SkeletonTile
        numberOfTiles={1}
        tileHeight={15}
        tileWidth={350}
        tileBottomSpace={30}
        tileTopSpace={5}
        tileleftSpace={20}
        tileRadius={10}
      />
      <SkeletonTile
        numberOfTiles={1}
        tileHeight={15}
        tileWidth={750}
        tileBottomSpace={10}
        tileTopSpace={5}
        tileleftSpace={20}
        tileRadius={10}
      />
      <SkeletonTile
        numberOfTiles={1}
        tileHeight={15}
        tileWidth={750}
        tileBottomSpace={10}
        tileTopSpace={5}
        tileleftSpace={20}
        tileRadius={10}
      />
      <SkeletonTile
        numberOfTiles={1}
        tileHeight={15}
        tileWidth={750}
        tileBottomSpace={10}
        tileTopSpace={5}
        tileleftSpace={20}
        tileRadius={10}
      />
    </div>
  );
};
export default ConfigLoader;
