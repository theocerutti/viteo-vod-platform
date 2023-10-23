import { defaultTheme, ThemeColors } from "@/styles/theme";

export function mergeTheme(theme) {
  return theme ? { ...defaultTheme, ...theme } : defaultTheme;
}

export const getTheme = (props) => {
  return mergeTheme(props.theme);
};

export const getThemePropSelector = (key: ThemeColors) => (props) => {
  return getTheme(props)[key];
};

export const convertRemToPixels = (rem: number): number => {
  if (
    document.documentElement &&
    rem &&
    Number.isFinite(rem) &&
    !Number.isNaN(rem)
  ) {
    return (
      rem * parseFloat(getComputedStyle(document.documentElement).fontSize) || 0
    );
  }

  return 0;
};
