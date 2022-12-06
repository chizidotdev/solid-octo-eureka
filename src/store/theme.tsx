import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeContextProps = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const ThemeContext = createContext<ThemeContextProps>({
  isDarkMode: null,
  setIsDarkMode: () => null,
});

const initialDarkModeStatus = () => {
  if (typeof window === "undefined") return;
  return JSON.parse(localStorage.getItem("darkMode")) as boolean;

  /**
   * First, check user darkmode status
   * else, check localStorage darkmode status
   *
   *
   * if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
   * return true;
   * } else {
   *  return JSON.parse(localStorage.getItem("darkMode")) as boolean;
   * }
   *
   */
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(initialDarkModeStatus);

  const toggleDarkMode = () => {
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
