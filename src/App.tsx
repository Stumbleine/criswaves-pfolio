import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { darkTheme, lightTheme, sharedPalette } from "./theme";
import { ThemeContextProvider } from "./context/themeContext";

function App() {
  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />;
    </ThemeContextProvider>
  );
}

export default App;
