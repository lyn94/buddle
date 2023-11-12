import "styled-components";
import { ColorsTypes, FontsTypes } from "../../styles/Theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorsTypes;
    fonts: FontsTypes;
  }
}
