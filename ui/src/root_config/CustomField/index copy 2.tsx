/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/naming-convention */

import { TypeAsset, TypeRootCustomField } from "../../common/types";

const filterAssetData = (assets: any[]) => {

  const filterAssetArray: TypeAsset[] = assets?.map((asset) => {
    const { repo:assetId, _links} =
      asset; 

    return {
      id: assetId,
      type: _links?.['http://ns.adobe.com/adobecloud/rel/rendition'][0].type,
      name: _links?.['http://ns.adobe.com/adobecloud/rel/rendition'][0]['dc:title'],
      width: _links?.['http://ns.adobe.com/adobecloud/rel/rendition'][0].width,
      height: _links?.['http://ns.adobe.com/adobecloud/rel/rendition'][0].height,
      size: _links?.['http://ns.adobe.com/adobecloud/rel/rendition'][0]['repo:size'],
      thumbnailUrl: _links?.['http://ns.adobe.com/adobecloud/rel/rendition'][0].href,
      previewUrl: _links?.['http://ns.adobe.com/adobecloud/rel/rendition'][0].href, 
    };
  });
  return filterAssetArray;
};

const rootCustomField: TypeRootCustomField = {
  filterAssetData,
};

export default rootCustomField;