/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable arrow-body-style */

/* NOTE: Remove Functions which are not used */

import {
  TypeAsset,
  TypeErrorFn,
  TypeRootCustomField,
} from "../../common/types";
import DamEnvVariables from "../DamEnv";
import utils from "../utils";

const filterAssetData = (assets: any[]) => {
  const filterAssetArray: TypeAsset[] = assets?.map((asset) =>
    // Enter your code for filteration of assets to the specified format
    ({
      id: "",
      type: "", // supported types: 'image' | 'code' | 'pdf' | 'excel' | 'presentation' | 'document' | 'json' | 'text/plain' | 'zip' | 'video' | 'audio' | 'image/tiff';
      name: "",
      width: "",
      height: "",
      size: "", // add size in bytes as string eg.'416246'
      thumbnailUrl: "",
      previewUrl: "", // add this parameter if you want "Preview" in tooltip action items
      platformUrl: "", // add this parameter if you want "Open In DAM" in tooltip action items
    })
  );
  return filterAssetArray;
};

const handleConfigtoSelectorPage = (
  config: any,
  contentTypeConfig: any,
  currentLocale: string
) =>
  utils.getSelectorConfig({
    keyArr: DamEnvVariables?.SELECTOR_CONFIG_CHECK_FIELDS,
    appConfig: config,
    customConfig: contentTypeConfig,
    currentLocale,
  });

const getSelectorWindowUrl = (config: any, contentTypeConfig: any) => {
  return ""; // return url to be opened as selector page
};

const handleSelectorPageData = (event: any) => {
  // "event" is the event object which is received from your opened selector page
  return []; // return array of asset objects which are selected
};

const handleSelectorWindow = (
  config: any,
  contentTypeConfig: any,
  setError: (errObj: TypeErrorFn) => void
) => {
  /* code logic to open the DAM selector window */
};

const handleAuthWindow = (
  configObj: {
    config: any;
    contentTypeConfig: any;
  },
  resolve: Function,
  reject: Function
) => {
  /* code logic to open the DAM auth window */
  resolve(); // if authentication is success, call resolve() | if failed, call reject(error) with error
};

const rootCustomField: TypeRootCustomField = {
  filterAssetData,
  getSelectorWindowUrl,
  handleConfigtoSelectorPage,
  handleSelectorPageData,
  handleSelectorWindow,
  handleAuthWindow,
};

export default rootCustomField;
