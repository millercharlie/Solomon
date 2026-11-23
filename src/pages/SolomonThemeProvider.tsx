import { AnimationContext, ThemeContext, themeKey } from "@libs/Context";
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
  const [doAnim, setDoAnim] = React.useState<boolean>(true);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <AnimationContext.Provider value={{ doAnim, setDoAnim }}>
        {children}
      </AnimationContext.Provider>
    </ThemeContext.Provider>
  );
};
export default SolomonThemeProvider;
