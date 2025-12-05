import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#61dafbaa",
    },
    orange: {
      main: "#hsl(38, 94%, 45%)",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },

  button: {
    textTransform: "none",
    fontSize: "1rem",
    fontWeight: 600,
    fontFamily: "Roboto, Arial, sans-serif",
  },
});
export default theme;
