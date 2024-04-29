/* eslint-disable @typescript-eslint/no-unused-vars */
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
  use onSuccess function to send your data to custom field [onSuccess accepts an array of asset objects]  */
  PureJSSelectors.registerAssetsSelectorsAuthService({
    imsClientId: 'aemcs-wegmans-assetselector',
    imsScope: 'AdobeID,openid,additional_info.projectedProductContext',
    redirectUri: window.location.href,
    env:"prod"
  });
  const props = {
    imsOrg: "68B620B35350F1650A490D45@AdobeOrg",
    handleSelection: (assets:any[]) => {

    const as = [
        {assetId: "test", links: "alink"}
     ];
      /* eslint-disable no-console */
      alert(JSON.parse(JSON.stringify(assets)));
      onSuccess(as);
    },
    onClose: () => { 
      onCancel();
    }
  }

  window.CompactView = PureJSSelectors.renderAssetSelectorWithAuthFlow(document.getElementById('selector_container'), props);
}
const rootSelectorPage: TypeRootSelector = {
  openComptactView,
};

export default rootSelectorPage;

