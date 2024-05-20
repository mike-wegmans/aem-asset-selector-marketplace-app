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
      assets.forEach((asset) => {
        asset.computedMetadata._links?.["http://ns.adobe.com/adobecloud/rel/rendition"].forEach((rendition: any) => {
          if (rendition?.["aem:renditionUsage"] === "dynamic_media_preset") {
            console.log(asset?.["repo:assetId"]);
            console.log(rendition.width);
            console.log(rendition.height);
            console.log(rendition.href);
            console.log(asset?.["repo:size"]);
            console.log(asset.name);
            const formattedAssets = [
              {
                assetId: asset?.["repo:assetId"],
                width: rendition.width,
                height: rendition.height,
                type: "image",
                url: rendition.href.replace("author-p131626-e1282650.adobeaemcloud.com", "s7d7.scene7.com"),
                size: asset?.["repo:size"],
                name: asset.name,
              },
            ];
            if ("_links" in rendition) {
              fetch("https://author-p131626-e1282650.adobeaemcloud.com/adobe/repository/content/dam/wegmans/marketing/assets/products/recipes/web_recipes/RECIPE_13362.jpg;api=block_download;renditionName=cq5dam.web.1280.1280.jpeg;version=oak%3A1.0%3A%3Aci%3Aff0bd018623b3ac9fbd87c90fe866e84;t=1716").then(res => res.json()).then(out =>
                console.log('Checkout this JSON! ', out))
                .catch(err => { console.log(err)});
              alert("success");
              //onSuccess(formattedAssets);
            } else {
              alert("no dynamic media URL set");
            }
          }
        });
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
