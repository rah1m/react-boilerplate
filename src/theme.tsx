import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#D43157",
      light: "#EF466F",
      dark: "#9757D7",
    },
    success: {
      main: "#45B26B",
    },
    secondary: {
      main: "#4BC9F0",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#23262F",
      secondary: "#777E90",
    },
  },
  typography: {
    h1: {
      fontSize: "96px",
      lineHeight: "96px",
      fontWeight: "700",
    },
    h2: {
      fontSize: "64px",
      lineHeight: "64px",
      fontWeight: "700",
    },
    h3: {
      fontSize: "48px",
      lineHeight: "56px",
      fontWeight: "700",
    },
    h4: {
      fontSize: "40px",
      lineHeight: "48px",
      fontWeight: "700",
    },
    h5: {
      fontSize: "32px",
      lineHeight: "40px",
      fontWeight: "700",
    },
    body1: {
      fontSize: "24px",
      lineHeight: "32px",
      fontWeight: "500",
    },
    body2: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "500",
    },
    subtitle1: {
      fontSize: "14px",
      lineHeight: "24px",
      fontWeight: "500",
    },
    subtitle2: {
      fontSize: "12px",
      lineHeight: "20px",
      fontWeight: "500",
    },
    caption: {
      fontSize: "12px",
      lineHeight: "12px",
      fontWeight: "500",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
  },
});

export default theme;
