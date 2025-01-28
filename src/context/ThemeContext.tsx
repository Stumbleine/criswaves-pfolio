import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme, lightTheme } from "../theme";

interface ThemeContextProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  darkMode: false,
  toggleTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem("darkMode");
    return storedTheme ? JSON.parse(storedTheme) : false; // Default a `false` si no hay valor guardado
  });

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", JSON.stringify(newMode)); // Guarda el nuevo estado en localStorage
      return newMode;
    });
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("darkMode");
    if (storedTheme !== null) {
      setDarkMode(JSON.parse(storedTheme));
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
