import React, { useEffect, useState, createContext } from 'react';

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  themeKey?: string;
};

type ThemeProviderStates = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
const initialState: ThemeProviderStates = {
  theme: 'system',
  setTheme: () => null,
};
export const ThemeProviderContext = createContext<ThemeProviderStates>(initialState);

const ThemeProvider = ({ children, defaultTheme = 'system', themeKey = 'dashboard-ui-theme', ...props }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(() => (localStorage.getItem(themeKey) as Theme) || defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const providerValue = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(themeKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={providerValue}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export default ThemeProvider;
