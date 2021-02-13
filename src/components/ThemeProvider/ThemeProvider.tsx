import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
  ThemeProviderProps,
  NoSsr,
  CssBaseline,
  Theme,
} from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontSize: 20,
    fontFamily: '"Quicksand", "Helvetica", "Arial", sans-serif',
    caption: {
      fontSize: "0.8rem"
    }
  },
  spacing: 4,
  shape: {
    borderRadius: 12,
  },
  palette: {
    primary: {
      light: "#FFECFD",
      main: "#C31CB5",
    },
    text: {
      primary: "#303030",
      secondary: "rgba(0,0,0,0.5)",
    },
    background: {
      default: "#FFFDF8",
      paper: "#FFFCF2",
    },
    divider: "rgba(0,0,0,0.05)",
  },
  shadows: [
    "none",
    "0px 5px 10px 5px rgba(0, 0, 0, 0.05)",
    ...Array(23).fill('none')
  ] as Theme['shadows']
});

const ThemeProvider = ({ children }: Omit<ThemeProviderProps, "theme">) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline>
      <NoSsr>{children}</NoSsr>
    </CssBaseline>
  </MuiThemeProvider>
);

export default ThemeProvider;
