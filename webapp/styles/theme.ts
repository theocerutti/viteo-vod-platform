export const themes = {
  light: {
    statusHealthy: "#0AADA6",
    statusWarning: "#F8F32B",
    statusCritical: "#E84855",
    selectedActive: "#037AFF",
    highlight: "#1A3C75",
    border: "#4A4A4A",
    buttonPrimary: "#2F4185",
    buttonSecondary: "#595A78",
    buttonDelete: "#3D0808",
    infoPrimary: "#8E8EAC",
    infoSecondary: "#333366",
    backgroundLevel1: "#121219",
    backgroundLevel2: "#323245",
    backgroundLevel3: "#232331",
    backgroundLevel4: "#171721",
    textPrimary: "#EAEAEA",
    textSecondary: "#B5B5B5",
    textTertiary: "#DFDFDF",
    textReverse: "#000000",
    textLink: "#71AEFF"
  },
  dark: {
    statusHealthy: "#0AADA6",
    statusWarning: "#F8F32B",
    statusCritical: "#E84855",
    selectedActive: "#037AFF",
    highlight: "#1A3C75",
    border: "#4A4A4A",
    buttonPrimary: "#2F4185",
    buttonSecondary: "#595A78",
    buttonDelete: "#3D0808",
    infoPrimary: "#8E8EAC",
    infoSecondary: "#333366",
    backgroundLevel1: "#121219",
    backgroundLevel2: "#323245",
    backgroundLevel3: "#232331",
    backgroundLevel4: "#171721",
    textPrimary: "#EAEAEA",
    textSecondary: "#B5B5B5",
    textTertiary: "#DFDFDF",
    textReverse: "#000000",
    textLink: "#71AEFF"
  }
};

export const defaultTheme = themes.dark;
export type Theme = typeof themes;
export type ThemeColors = keyof typeof defaultTheme;
export type ThemeType = keyof typeof themes;

export const fontSize = {
  smaller: "0.71rem",
  small: "0.85rem",
  base: "1rem",
  large: "1.14rem",
  larger: "1.43rem",
  huge: "1.57rem",
  // no use case for the moment
  massive: "1.71rem" // no use case for the moment
};

export const space = [
  "0",
  "0.071rem",
  "0.143rem",
  "0.286rem",
  "0.571rem",
  "0.71rem",
  "0.857rem",
  "1rem",
  "1.143rem",
  "1.429rem",
  "1.714rem",
  "2rem",
  "2.286rem",
  "2.857rem"
];

export const fontWeight = {
  light: "400",
  base: "400",
  semibold: "600",
  bold: "700"
};

export const spacing = {
  sp0: space[0],
  sp1: space[1],
  sp2: space[2],
  sp4: space[3],
  sp8: space[4],
  sp10: space[5],
  sp12: space[6],
  sp14: space[7],
  sp16: space[8],
  sp20: space[9],
  sp24: space[10],
  sp28: space[11],
  sp32: space[12],
  sp40: space[13]
};

export const zIndex = {
  tooltip: 9990,
  notification: 9000,
  modal: 8500,
  overlay: 8000,
  dropdown: 7000,
  nav: 500,
  sidebar: 100,
  scrollbarButton: 2,
  base: 1
};

//navbar
export const navbarHeight = "3rem";
export const navbarItemWidth = "4.286rem";
//sidebar
export const sidebarItemHeight = spacing.sp40;
export const sidebarWidth = spacing.sp40;
