import styled from "@emotion/styled";
import NavigationBar from "@components/NavigationBar";

import { PageType, Theme, type ColorTheme } from "@libs/Types";
import React, { type ReactNode } from "react";
import { ThemeContext } from "@libs/Context";
import { breakpoints } from "@libs/globals";
import { gradientMap } from "@database/gradientMap";
import { useViewportSize } from "@mantine/hooks";

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
    `url("${gradientUrls[gradientMap[pageType]]}")`};
  background-size: ${({ mobile }) => (mobile ? "150vh" : "150%")};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
`;

/**
 * Represents a page template with a navigation bar and gradient.
 * @returns Page Template
 */
const PageTemplate: React.FC<{ pageType: PageType; children: ReactNode }> = ({
  pageType,
  children,
}) => {
  const { width } = useViewportSize();
  const { theme, setTheme } = React.useContext(ThemeContext);

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

  return pageType === PageType.RESOURCE ||
    pageType === PageType.TOPIC ||
    pageType === PageType.BIBLEBOOK ? (
    <ResourceBackground themeId={theme._id}>
      <NavigationBar highlighted={pageType} theme={theme} setTheme={setTheme} />
      {children}
    </ResourceBackground>
  ) : (
    <Background theme={theme} pageType={pageType} mobile={mobile}>
      <NavigationBar // TODO: Likely extrapolate the nav bar into a more general Component - this is fine for now though
        highlighted={pageType}
        theme={theme}
        setTheme={setTheme}
      />
      {children}
    </Background>
  );
};

export default PageTemplate;
