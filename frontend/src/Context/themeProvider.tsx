import { useReducer, useEffect } from "react";
import type { ReactNode } from "react";
import { ThemeContext } from "./themeContext";
import type { Theme } from "./themeContext";

type ThemeAction =
  | { type: "TOGGLE_THEME" }
  | { type: "SET_THEME"; payload: Theme };

function themeReducer(state: Theme, action: ThemeAction): Theme {
  switch (action.type) {
    case "TOGGLE_THEME":
      return state === "light" ? "dark" : "light";

    case "SET_THEME":
      return action.payload;

    default:
      return state;
  }
}

const initialTheme: Theme =
  (localStorage.getItem("theme") as Theme) || "light";

interface Props {
  children: ReactNode;
}

export function ThemeProvider({ children }: Props) {
  const [theme, dispatch] = useReducer(themeReducer, initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => dispatch({ type: "TOGGLE_THEME" });

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}