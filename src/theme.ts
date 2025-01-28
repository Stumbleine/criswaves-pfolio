import { createTheme } from "@mui/material/styles";

const colors = {
  aquaMain: "#75f5dc",
  aquaLight: "#aafff2",
  aquaDark: "#49cbb1",
  aquaDark2: "#31AF96",

  skyMain: "#e0e8f3",
  skyLight: "#ffffff",
  skyDark: "#b0b8c1",

  coralMain: "#ff6b6b",
  coralLight: "#ff9999",
  coralDark: "#b24747",

  orangeMain: "#ffb74d",
  orangeLight: "#ffe97d",
  orangeDark: "#c88719",

  greenMain: "#81c784",
  greenLight: "#b2fab4",
  greenDark: "#519657",

  dividerNeutral: "#525b6e",
  textPrimaryDark: "#e0e8f3",
  textSecondaryDark: "#969eb0",
  textDisabledDark: "#6d7789",

  textPrimaryLight: "#10172a",
  textSecondaryLight: "#525b6e",
  textDisabledLight: "#969eb0",

  bgDarkDefault: "#10172a",
  bgDarkPaper: "#525b6e",

  bgLightDefault: "#f9f9f9",
  bgLightPaper: "#ffffff",
};

const sharedPalette = {
  secondary: {
    main: colors.skyMain,
    light: colors.skyLight,
    dark: colors.skyDark,
    contrastText: colors.textPrimaryLight,
  },
  error: {
    main: colors.coralMain,
    light: colors.coralLight,
    dark: colors.coralDark,
    contrastText: "#ffffff",
  },
  warning: {
    main: colors.orangeMain,
    light: colors.orangeLight,
    dark: colors.orangeDark,
    contrastText: colors.textPrimaryLight,
  },
  success: {
    main: colors.greenMain,
    light: colors.greenLight,
    dark: colors.greenDark,
    contrastText: colors.textPrimaryLight,
  },
  divider: colors.dividerNeutral,
};

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: colors.aquaMain,
      light: colors.aquaLight,
      dark: colors.aquaDark,
      contrastText: colors.textPrimaryLight,
    },
    background: {
      default: colors.bgDarkDefault,
      paper: colors.bgDarkPaper,
    },
    text: {
      primary: colors.textPrimaryDark,
      secondary: colors.textSecondaryDark,
      disabled: colors.textDisabledDark,
    },
    ...sharedPalette,
  },
  typography: {
    fontFamily: "Inter, Roboto, sans-serif",
    h1: { fontSize: "2.5rem", fontWeight: 700 },
    h2: { fontSize: "2rem", fontWeight: 700 },
    body1: { fontSize: "1rem", fontWeight: 500 },
    body2: { fontSize: "0.875rem", fontWeight: 500 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          textTransform: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "none",
          borderRadius: "7px",
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            boxShadow: "0 6px 16px rgba(0, 0, 0, 0.4)",
            backgroundColor: "rgba(28, 39, 69, 0.8)",
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: colors.bgDarkDefault,
          color: colors.textPrimaryDark,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: colors.aquaDark,
          color: colors.textPrimaryLight,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: 1.4,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(16, 23, 42,0.5)",
          backdropFilter: "blur(2px)",
          position: "sticky",
        },
      },
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.aquaDark,
      light: colors.aquaMain,
      dark: colors.aquaDark2,
      contrastText: colors.textPrimaryLight,
    },
    background: {
      default: colors.bgLightDefault,
      paper: colors.bgLightPaper,
    },
    text: {
      primary: colors.textPrimaryLight,
      secondary: colors.textSecondaryLight,
      disabled: colors.textDisabledLight,
    },
    ...sharedPalette,
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: { fontSize: "2.5rem", fontWeight: 700 },
    h2: { fontSize: "2rem", fontWeight: 700 },
    body1: { fontSize: "1rem", fontWeight: 500 },
    body2: { fontSize: "0.875rem", fontWeight: 500 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          textTransform: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "none",
          borderRadius: "7px",
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: colors.bgLightPaper,
          color: colors.textPrimaryLight,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: colors.aquaMain,
          color: colors.textPrimaryLight,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(249, 249, 249, 0.5)",
          backdropFilter: "blur(2px)",
          position: "sticky",
        },
      },
    },
  },
});

export { darkTheme, lightTheme };
