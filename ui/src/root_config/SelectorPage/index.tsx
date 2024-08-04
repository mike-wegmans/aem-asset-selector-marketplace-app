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
    redirectUrl: config?.imsRedirectUri,
    modalMode: false,
    env: config?.env,
  });

  const props = {
    imsOrg: config?.imsOrg,
    repositoryId: config?.aemAuthorDomain,
    handleSelection: (assets: any[]) => {
      /* eslint-disable no-console */
      console.log(JSON.stringify(assets));
      assets.forEach((asset) => {
        if (asset?.["repo:scene7FileStatus"] === "PublishComplete") {
          const formattedAssets = [
            {
              assetId: asset?.["repo:assetId"],
              width: asset?.width,
              height: asset?.height,
              type: asset?.["repo:scene7Type"].toLowerCase(),
              url: config?.dynamicMediaDomain + asset?.["repo:scene7File"],
              size: asset?.bytesize,
              name: asset?.name,
            },
          ];
          onSuccess(formattedAssets);
        } else {
          alert(
            "This asset has not been configured with Dynamic Media.  Please validate in AEM Assets."
          );
        }
      });
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
