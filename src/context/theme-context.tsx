
'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Theme = 'spring' | 'summer' | 'autumn' | 'winter';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('autumn');

  useEffect(() => {
    let storedTheme: string | null = null;
    try {
        storedTheme = localStorage.getItem('site-theme') as Theme | null;
    } catch (error) {
        console.error("Failed to access localStorage:", error);
    }
    
    if (storedTheme && ['spring', 'summer', 'autumn', 'winter'].includes(storedTheme)) {
        setThemeState(storedTheme as Theme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
     try {
      localStorage.setItem('site-theme', newTheme);
    } catch (error) {
       console.error("Failed to access localStorage:", error);
    }
  };

  const value = { theme, setTheme };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
