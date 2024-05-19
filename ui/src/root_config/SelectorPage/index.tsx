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
  onCancel: () => void,
  { containerRef, containerClass, containerId }: TypeSelectorContainer,
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
    repositoryId: "author-p131626-e1282650.adobeaemcloud.com",
    handleSelection: (assets: any[]) => {
      /* eslint-disable no-console */
      console.log(JSON.stringify(assets));
      alert(JSON.stringify(assets));
      let formattedAssets = [];
      assets.forEach((asset) => {
        console.log(asset._links?.["aem:renditionUsage"]);
        if (asset._links?.["aem:renditionUsage"] === "dynamic_media_preset") {
           formattedAssets = [
            {
              assetId: assets[0]["repo:assetId"],
              width:
                asset.width,
              height:
                asset.height,
              type: "image",
              url: asset.href,
              size: assets[0]._links?.[
                "http://ns.adobe.com/adobecloud/rel/rendition"
              ][0]["repo:size"],
              name: assets[0]._links?.[
                "http://ns.adobe.com/adobecloud/rel/rendition"
              ][0]["dc:title"],
            },
          ];
          onSuccess(formattedAssets);
        }
      });
      if (formattedAssets.length == 0) {
        alert("No Dynamic Media Preset Found");
      }
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
