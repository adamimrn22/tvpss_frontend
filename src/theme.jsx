import { createTheme } from "@mui/material";

export const themeOptions = {
  palette: {
    mode: "light",
    primary: {
      light: "#737BA7",
      main: "#515B92",
      dark: "#383F66",
      contrastText: "#fff",
    },
    secondary: {
      light: "#FFD133",
      main: "#FFC601",
      dark: "#B28A00",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    fontWeightLight: 100,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontWeight: 900,
    },
    h2: {
      fontWeight: 800,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 400,
    },
    body1: {
      fontWeight: 400,
    },
    body2: {
      fontWeight: 300,
    },
    button: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 300,
    },
    subtitle2: {
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "8px 16px",
          textTransform: "none",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Inter, Arial, sans-serif",
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
