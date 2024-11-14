import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as NavigationThemeProvider,
} from "@react-navigation/native";

export const ThemeContext = createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
});

type ThemeProviderType = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderType) => {
  const systemColorScheme = useColorScheme(); // Detect system color scheme
  const [isDarkTheme, setIsDarkTheme] = useState(systemColorScheme === "dark");

  // Sync with system color scheme when the app loads or system preference changes
  useEffect(() => {
    setIsDarkTheme(systemColorScheme === "dark");
  }, [systemColorScheme]);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const theme = isDarkTheme ? DarkTheme : DefaultTheme;

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <NavigationThemeProvider value={theme}>
        {children}
      </NavigationThemeProvider>
    </ThemeContext.Provider>
  );
};
