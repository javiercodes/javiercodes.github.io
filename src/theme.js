// example theme.js
export const theme = {
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    jet: "#0f141e",
    spacecadet: "#1f1e38",
    persianblue: "#1d1fe4",
    gainsboro: "#E3ECF6",
    minionyellow: "#F4E04D",
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: "Roboto, sans-serif;",
    bold: "Roboto, bold",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .125)",
  },
  variants: {},
  text: {},
};

export const buttonTheme = {
  buttons: {
    primary: {
      color: "white",
      bg: theme.colors.spacecadet,
      height: 40,
      borderRadius: 24,
    },
    action: {
      color: "white",
      bg: theme.colors.persianblue,
      height: 40,
      borderRadius: 24,
    },
    actionCard: {
      color: "white",
      bg: theme.colors.persianblue,
      height: 160,
      borderRadius: 24,
    },
    accent: {
      color: theme.colors.jet,
      bg: theme.colors.minionyellow,
      height: 40,
      borderRadius: 24,
    },
  },
};
