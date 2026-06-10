import { createContext, useContext, useEffect, useState } from "react";

// 1. Creer l-Context (khllinah undefined fl-bedya bach l-hook t-qder t-detecti l-error)
const ThemeContext = createContext(undefined);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}) {
  
  const [theme, setTheme] = useState(
    () => localStorage.getItem(storageKey) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    // Mas7 l-classes l-qdam
    root.classList.remove("light", "dark");

    // Handling dyal "system" theme
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    // Zid l-class l-jdida
    root.classList.add(theme);
  }, [theme]);

  // 3. L-valeur li ghadi t-passa l-ga3 l-components
  const value = {
    theme,
    setTheme: (newTheme) => {
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
    },
  };

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// 4. Hook dyal useTheme (Daba ghadi t-khdem 100%)
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme khassha t-khdem darouri dakhel ThemeProvider");
  }

  return context;
};