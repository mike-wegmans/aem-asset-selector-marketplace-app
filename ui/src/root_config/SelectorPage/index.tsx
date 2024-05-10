/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-underscore-dangle */
import {
  TypeErrorFn,
  TypeRootSelector,
  TypeSelectorContainer,
} from "../../common/types";

/* These variables are to be used in openCompactView function. The developer should change these variables according to the DAM platform that is being implemented */
declare global {
  interface Window {
    CompactView: any; // chnage according to DAM application
  }
}

declare let PureJSSelectors: any; // declare your variable for DAM compact view here

const openComptactView = (
  config: any,
  selectedIds: string[],
  onSuccess: (assets: any[]) => void,
  setError: (errObj: TypeErrorFn) => void
) => {
  /* Implement your DAM compact view implementation here
  declare your selected DAM variable in the above scope and call the open function from DAM compact view on that variable
  use onSuccess function to send your data to custom field [onSuccess accepts an array
     of asset objects]  */
  PureJSSelectors.registerAssetsSelectorsAuthService({
    imsClientId: config?.imsClientId,
    imsScope: config?.imsScope,
    redirectUri: config?.imsRedirectUri,
    env: config?.env,
  });
  const props = {
    imsOrg: config?.imsOrg,
    handleSelection: (assets: any[]) => {
      /* eslint-disable no-console */
      console.log(JSON.stringify(assets));

      const formattedAssets = [
        {
          assetId: assets[0]["repo:assetId"],
          width:
            assets[0]._links?.[
              "http://ns.adobe.com/adobecloud/rel/rendition"
            ][0].width,
          height:
            assets[0]._links?.[
              "http://ns.adobe.com/adobecloud/rel/rendition"
            ][0].height,
          type: "image",
          url: "https://image-server.unataops.com/image-server/fit-in/400x400/filters:quality(80)/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_19c156e1-a1bb-4de4-b0be-f53f60692b81.jpg",
          size: assets[0]._links?.[
            "http://ns.adobe.com/adobecloud/rel/rendition"
          ][0]["repo:size"],
          name: assets[0]._links?.[
            "http://ns.adobe.com/adobecloud/rel/rendition"
          ][0]["dc:title"],
        },
      ];
      onSuccess(formattedAssets);
    },
    onClose: () => {},
  };

  window.CompactView = PureJSSelectors.renderAssetSelectorWithAuthFlow(
    document.getElementById("selector_container"),
    props
  );
};
const rootSelectorPage: TypeRootSelector = {
  openComptactView,
};

export default rootSelectorPage;
