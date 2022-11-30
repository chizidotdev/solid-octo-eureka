import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeContextProps = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const ThemeContext = createContext<ThemeContextProps>({
  isDarkMode: null,
  setIsDarkMode: () => null,
});

const initialDarkModeStatus = () =>
  typeof window !== "undefined" &&
  (JSON.parse(localStorage.getItem("darkMode")) as boolean);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(initialDarkModeStatus);

  const toggleDarkMode = () => {
    console.log("toggling");

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
      setIsDarkMode(false);
    }
  };

  useEffect(toggleDarkMode, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
