import Logo from "../../common/asset/wegmans-logo.webp";
import { TypeRootDamEnv } from "../../common/types";

const DamEnvVariables: TypeRootDamEnv = {
  IS_DAM_SCRIPT: true,
  DAM_APP_NAME: "AEM Assets",
  CONFIG_FIELDS: ["imsClientId", "imsScope", "redirectUri", "env", "imsOrg"],
  ASSET_UNIQUE_ID: "assetId",
  DAM_SCRIPT_URL:
    "https://experience.adobe.com/solutions/CQ-assets-selectors/static-assets/resources/assets-selectors.js",
  SELECTOR_PAGE_LOGO: Logo,
  DIRECT_SELECTOR_PAGE: "novalue", // possible values "url", "window", default => "novalue"
};
export default DamEnvVariables;
