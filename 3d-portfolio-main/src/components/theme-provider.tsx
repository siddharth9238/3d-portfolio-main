"use client";

import * as React from "react";

type Theme = "light" | "dark";
type ThemeAttribute = "class" | "data-theme";

export interface ThemeProviderProps {
  children: React.ReactNode;
  attribute?: ThemeAttribute;
  defaultTheme?: Theme;
  disableTransitionOnChange?: boolean;
  storageKey?: string;
}

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: Theme;
  systemTheme: Theme;
  forcedTheme?: Theme;
  themes: Theme[];
  setTheme: (theme: Theme) => void;
};

const THEMES: Theme[] = ["light", "dark"];

const ThemeContext = React.createContext<ThemeContextValue | undefined>(
  undefined
);

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

function applyThemeToDocument(
  theme: Theme,
  attribute: ThemeAttribute,
  disableTransitionOnChange: boolean
) {
  if (typeof document === "undefined") return;

  if (disableTransitionOnChange) {
    const style = document.createElement("style");
    style.textContent =
      "*{transition:none!important;-webkit-transition:none!important}";
    document.head.appendChild(style);
    requestAnimationFrame(() => {
      style.remove();
    });
  }

  const root = document.documentElement;
  if (attribute === "class") {
    root.classList.remove(...THEMES);
    root.classList.add(theme);
  } else {
    root.setAttribute(attribute, theme);
  }

  root.style.colorScheme = theme;
}

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "dark",
  disableTransitionOnChange = false,
  storageKey = "theme",
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme);
  const initializedRef = React.useRef(false);

  useIsomorphicLayoutEffect(() => {
    let nextTheme = defaultTheme;

    try {
      const storedTheme = localStorage.getItem(storageKey);
      if (storedTheme === "light" || storedTheme === "dark") {
        nextTheme = storedTheme;
      }
    } catch {
      // Ignore storage failures and fall back to the default theme.
    }

    initializedRef.current = true;
    setThemeState(nextTheme);
    applyThemeToDocument(nextTheme, attribute, disableTransitionOnChange);
  }, [attribute, defaultTheme, disableTransitionOnChange, storageKey]);

  React.useEffect(() => {
    if (!initializedRef.current) return;

    try {
      localStorage.setItem(storageKey, theme);
    } catch {
      // Ignore storage failures in private/incognito contexts.
    }

    applyThemeToDocument(theme, attribute, disableTransitionOnChange);
  }, [attribute, disableTransitionOnChange, storageKey, theme]);

  React.useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key !== storageKey) return;
      if (event.newValue !== "light" && event.newValue !== "dark") return;
      setThemeState(event.newValue);
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [storageKey]);

  const value = React.useMemo<ThemeContextValue>(
    () => ({
      theme,
      resolvedTheme: theme,
      systemTheme: theme,
      forcedTheme: undefined,
      themes: THEMES,
      setTheme: setThemeState,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);

  if (context) {
    return context;
  }

  return {
    theme: "dark" as Theme,
    resolvedTheme: "dark" as Theme,
    systemTheme: "dark" as Theme,
    forcedTheme: undefined,
    themes: THEMES,
    setTheme: (_theme: Theme) => {},
  };
}
