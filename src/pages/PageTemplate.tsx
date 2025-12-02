import styled from "@emotion/styled";
import NavigationBar from "@components/NavigationBar";

import { PageType, Theme, type ColorTheme } from "@libs/Types";
import React, { type ReactNode } from "react";
import { themeKey, ThemeContext } from "@libs/Context";
import { Colors } from "@libs/globals";
import { gradientMap } from "@database/gradientMap";

const Background = styled.div<{ theme: ColorTheme; pageType: PageType }>`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  width: 100%;
  height: 100%;
  background-image: ${({ pageType }) =>
    `url(../assets/gradients/${gradientMap[pageType]}.svg)`};
  background-size: 150%;
  background-attachment: fixed;
  background-position: center;
`;
// const BackgroundGradient = styled.img`
//   // TODO: This is for the future ^
//   width: 100vw;
//   height: 100vw;
//   position: absolute;
//   top: 0;
//   user-select: none;
//   z-index: 0;
// `;

// TODO: Background Gradient should NOT be an SVG - it should be dynamically calculated

/**
 * Represents a page template with a navigation bar and gradient.
 * @returns Page Template
 */
const PageTemplate: React.FC<{ pageType: PageType; children: ReactNode }> = ({
  pageType,
  children,
}) => {
  const [theme, setTheme] = React.useState<ColorTheme>(
    window.localStorage.getItem(themeKey) === Theme.LIGHT
      ? Colors[Theme.LIGHT]
      : Colors[Theme.DARK]
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Background theme={theme} pageType={pageType}>
        <NavigationBar // TODO: Likely extrapolate the nav bar into a more general Component - this is fine for now though
          highlighted={pageType}
          theme={theme}
          setTheme={setTheme}
        />
        {children}
      </Background>
    </ThemeContext.Provider>
  );
};

export default PageTemplate;
