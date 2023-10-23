import "styled-components";
import { ThemeColors } from "@/styles/theme";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeColors {
  }
}
