import styled from "@emotion/styled";
import NavigationBar from "@components/NavigationBar";

import { PageType, Theme, type ColorTheme } from "@libs/Types";
import React, { type ReactNode } from "react";
import { AnimationContext, ThemeContext } from "@libs/Context";
import { breakpoints } from "@libs/globals";
import { gradientMap } from "@database/gradientMap";
import { useViewportSize } from "@mantine/hooks";
import { css, keyframes } from "@emotion/react";
import DashboardHeader from "@components/DashboardHeader";

const gradientModules = import.meta.glob<{ default: string }>(
  "@assets/gradients/*",
  {
    eager: true,
    query: "?url",
  },
);
const gradientUrls: Record<string, string> = Object.fromEntries(
  Object.entries(gradientModules).map(([path, mod]) => {
    const filename = path.split("/").pop()!.replace(".svg", "");
    return [filename, mod.default];
  }),
);

const ResourceBackground = styled.div<{ themeId: string }>`
  width: 100%;
  height: 100%;
  background-color: ${({ themeId }) =>
    themeId === Theme.DARK ? "#372d28" : "#fffbf5"};
  color: ${({ themeId }) => (themeId === Theme.DARK ? "#fffbf5" : "#59473e")};
`;

const PERSPECTIVE = "900px";
const TILT = "55deg";

const flatten = keyframes`
    0% {
        transform: perspective(${PERSPECTIVE}) rotateX(0deg) scale(200%);
    }
    100% {
        transform: perspective(${PERSPECTIVE}) rotateX(${TILT});
    }
`;
const unflatten = keyframes`
    0% {
      transform: perspective(${PERSPECTIVE}) rotateX(${TILT});
    }
    100% {
        transform: perspective(${PERSPECTIVE}) rotateX(0deg) scale(200%);
    }
`;

const Background = styled.div<{
  theme: ColorTheme;
  pageType: PageType;
  mobile: boolean;
  doAnim: boolean;
}>`
  isolation: isolate;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  width: 100%;
  min-height: 100%;

  &::before {
    content: "";
    transform-origin: ${({ pageType }) =>
      pageType === PageType.dashboard ? "bottom center" : undefined};
    position: fixed;
    inset: 0;
    z-index: -1;

    background-image: ${({ pageType }) =>
      `url("${gradientUrls[gradientMap[pageType]]}")`};
    background-size: ${({ mobile }) => (mobile ? "150vh" : "150%")};
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;

    transform: ${({ pageType, doAnim }) =>
      pageType === PageType.dashboard && doAnim
        ? `perspective(${PERSPECTIVE}) rotateX(${TILT})`
        : `translateZ(0)`};
    animation: ${({ pageType, doAnim }) =>
      pageType === PageType.dashboard && doAnim
        ? css`
            ${flatten} 3s cubic-bezier(0.23, 0.8, 0.47, 1) 1,
      ${unflatten} linear forwards;
          `
        : undefined};
    animation-timeline: auto, scroll(root);
    animation-range: 1px 800px;
  }
`;

/**
 * Represents a page template with a navigation bar and gradient.
 * @returns Page Template
 */
const PageTemplate: React.FC<{
  pageType: PageType;
  noNav?: boolean;
  color?: string;
  children: ReactNode;
}> = ({ pageType, noNav, color, children }) => {
  const { width } = useViewportSize();
  const { theme, setTheme } = React.useContext(ThemeContext);
  const { doAnim } = React.useContext(AnimationContext);

  const [mobile, setMobile] = React.useState<boolean>(
    width <= breakpoints.md && width !== 0,
  );

  React.useEffect(() => {
    if (width <= breakpoints.md && width !== 0) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [width]);

  return pageType === PageType.resource ||
    pageType === PageType.topic ||
    pageType === PageType.bibleBook ? (
    <ResourceBackground themeId={theme._id}>
      {!noNav && (
        <NavigationBar
          highlighted={pageType}
          navHighlight={color}
          theme={theme}
          setTheme={setTheme}
        />
      )}
      {children}
    </ResourceBackground>
  ) : (
    <Background
      theme={theme}
      pageType={pageType}
      mobile={mobile}
      doAnim={doAnim}
    >
      {!noNav && (
        <NavigationBar
          highlighted={pageType}
          navHighlight={color}
          theme={theme}
          setTheme={setTheme}
        />
      )}
      {pageType === PageType.dashboard && <DashboardHeader />}
      {children}
    </Background>
  );
};

export default PageTemplate;
