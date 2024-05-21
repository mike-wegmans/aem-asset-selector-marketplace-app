/* eslint-disable @typescript-eslint/no-unused-vars */
import { TypeRootConfigSreen } from "../../common/types";

const configureConfigScreen = () =>
  /* IMPORTANT: 
  1. All sensitive information must be saved in serverConfig
  2. serverConfig is used when webhooks are implemented
  3. save the fields that are to be accessed in other location in config
  4. either saveInConfig or saveInServerConfig should be true for your field data to be saved in contentstack
  5. If values are stored in serverConfig then those values will not be available to other UI locations
  6. Supported type options are textInputFields, radioInputFields, selectInputFields */
  ({
    imsClientId: {
      type: "textInputFields",
      labelText: "IMS Client ID",
      placeholderText: "Enter IMS ClientID",
      instructionText:
        "Enter the IMS Client ID provided by Adobe for your instance of AEM Assets as a Cloud Service",
      saveInConfig: true,
      saveInServerConfig: false,
    },
    imsScope: {
      type: "textInputFields",
      labelText: "IMS Scope",
      placeholderText: "Enter IMS Scope",
      instructionText:
        "Enter the IMS Scope provided by Adobe for your instance of AEM Assets as a Cloud Service",
      saveInConfig: true,
      saveInServerConfig: false,
    },
    redirectUri: {
      type: "textInputFields",
      labelText: "Redirect URI",
      placeholderText: "Enter Redirect URI",
      instructionText:
        "Enter the Redirect URI provided by Adobe for your instance of AEM Assets as a Cloud Service",
      saveInConfig: true,
      saveInServerConfig: false,
    },
    env: {
      type: "textInputFields",
      labelText: "Environment",
      placeholderText: "Enter Environment",
      instructionText: "Enter Adobe Identity environment - staging or prod",
      saveInConfig: true,
      saveInServerConfig: false,
    },
    imsOrg: {
      type: "textInputFields",
      labelText: "IMS Org",
      placeholderText: "Enter IMS Org",
      instructionText: "Enter Adobe IMS Organization ID",
      saveInConfig: true,
      saveInServerConfig: false,
    },
    aemAuthorDomain: {
      type: "textInputFields",
      labelText: "AEM Author Domain",
      placeholderText: "Enter AEM Author Domain",
      instructionText: "Enter the AEM Author domain for the authoring ennvionment you would to connect to.",
      saveInConfig: true,
      saveInServerConfig: false,
    },
    dynamicMediaDomain: {
      type: "textInputFields",
      labelText: "Dynamic Media Domain",
      placeholderText: "Enter Dynamic Media Domain",
      instructionText: "Enter the Dynamic Media Domain for the Dynamic Media environment assoicated with the AEM Author you are connecting to.",
      saveInConfig: true,
      saveInServerConfig: false,
    },
  });

const customWholeJson = () => {
  const customJsonOptions: string[] = ["repo:assetId", "_links"];

  const defaultFeilds: string[] = ["repo:assetId", "_links"];

  return {
    customJsonOptions,
    defaultFeilds,
  };
};

const rootConfigScreen: TypeRootConfigSreen = {
  configureConfigScreen,
  customWholeJson,
};

export default rootConfigScreen;
