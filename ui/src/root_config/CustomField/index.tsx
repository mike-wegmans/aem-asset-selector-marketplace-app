/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/naming-convention */

import { TypeAsset, TypeRootCustomField } from "../../common/types";

const filterAssetData = (assets: any[]) => {
  const filterAssetArray: TypeAsset[] = assets?.map((asset) => {
    // Enter your code for filteration of assets to the specified format
    const { assetId, width, height, type, url, size, name } = asset;
    return {
      id: assetId,
      type,
      name,
      width,
      height,
      size, // add size in bytes as string eg.'416246'
      thumbnailUrl: url || "",
      previewUrl: url, // add this parameter if you want "Preview" in tooltip action items
    };
  });
  return filterAssetArray;
};

const rootCustomField: TypeRootCustomField = {
  filterAssetData,
};

export default rootCustomField;
