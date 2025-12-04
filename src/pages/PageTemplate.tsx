import styled from "@emotion/styled";
import NavigationBar from "@components/NavigationBar";

import { PageType, Theme, type ColorTheme } from "@libs/Types";
import React, { type ReactNode } from "react";
import { themeKey, ThemeContext } from "@libs/Context";
import { breakpoints, Colors } from "@libs/globals";
import { gradientMap } from "@database/gradientMap";
import { useViewportSize } from "@mantine/hooks";

const Background = styled.div<{
  theme: ColorTheme;
  pageType: PageType;
  mobile: boolean;
}>`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  width: 100%;
  height: 100%;
  background-image: ${({ pageType }) =>
    `url(/assets/gradients/${gradientMap[pageType]}.svg)`};
  background-size: ${({ mobile }) => (mobile ? "150vh" : "150%")};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
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
  const { width } = useViewportSize();

  const [mobile, setMobile] = React.useState<boolean>(
    width <= breakpoints.md && width !== 0
  );

  React.useEffect(() => {
    if (width <= breakpoints.md && width !== 0) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [width]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Background theme={theme} pageType={pageType} mobile={mobile}>
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
