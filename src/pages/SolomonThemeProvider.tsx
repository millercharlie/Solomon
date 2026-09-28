import { ThemeContext, themeKey } from "@libs/Context";
import { Colors } from "@libs/globals";
import { type ColorTheme, Theme } from "@libs/Types";
import React, { type ReactNode } from "react";

/**
 * Wraps the theme within Solomon.
 * @returns Theme provider
 */
const SolomonThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = React.useState<ColorTheme>(
    window.localStorage.getItem(themeKey) === Theme.LIGHT
      ? Colors[Theme.LIGHT]
      : Colors[Theme.DARK],
  );
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default SolomonThemeProvider;
