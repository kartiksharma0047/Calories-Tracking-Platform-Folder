import { useContext } from "react";
import { ThemeContext } from "../Context/themeContext";
import type { ThemeContextType } from "../Context/themeContext";

export function useTheme(): ThemeContextType & {
  isLightTheme: boolean;
  isDarkTheme: boolean;
} {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  const { theme } = context;

  return {
    ...context,
    isLightTheme: theme === "light",
    isDarkTheme: theme === "dark",
  };
}