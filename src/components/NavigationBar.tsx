import SearchBar from "@components/SearchBar";
import styled from "@emotion/styled";
import * as Typography from "@libs/Typography";
import { DefaultIcon as LogoImage, DefaultIcon as Icon } from "@libs/Icons";

import { useViewportSize } from "@mantine/hooks";

import { Theme, type ColorTheme } from "@libs/Types";
import React from "react";
import { breakpoints, Colors } from "@libs/globals";
import { Link } from "react-router";
import { LinkButton as Button } from "@components/Buttons";
import { themeKey } from "@libs/Context";
import { isDarkTheme } from "@libs/utils";

import logo from "@assets/logos/logo.svg?react";
import sun from "@assets/icons/sun.svg?react";
import moon from "@assets/icons/moon.svg?react";
import hamburgerMenu from "@assets/icons/hamburger_menu.svg?react";
import { css, keyframes } from "@emotion/react";

const links: { id: string; pretty: string; link: string }[] = [
  {
    id: "dashboard",
    pretty: "Dashboard",
    link: "/",
  },
  {
    id: "theology",
    pretty: "Theology",
    link: "/theology",
  },
  {
    id: "commentary",
    pretty: "Bible Commentary",
    link: "/commentary",
  },
  {
    id: "apologetics",
    pretty: "Apologetics",
    link: "/apologetics",
  },
  {
    id: "about",
    pretty: "About",
    link: "/about",
  },
  {
    id: "glossary",
    pretty: "Glossary/Index",
    link: "/glossary",
  },
];

const Container = styled.div<{ theme: ColorTheme }>`
  background-color: ${({ theme }) => theme.navBar};
  backdrop-filter: blur(400px);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 4;
`;

const NavContainer = styled.div`
  height: 60px;
  display: flex;
  padding-left: 30px;
  padding-right: 30px;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 30px;
`;
const MobileLinksContainer = styled.div`
  padding-left: 20px;
  padding-bottom: 20px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
// TODO: Color here should also be dynamic
const NavItem = styled(Typography.NavigationLink)<{
  highlighted?: boolean;
  theme: ColorTheme;
}>`
  cursor: pointer;
  text-wrap: nowrap;
  transition: all 0.2s;
  color: ${({ highlighted, theme }) =>
    highlighted ? theme.navHighlight : theme.text};
  :hover {
    color: ${({ theme }) => theme.secondary};
  }
`;

/**
 * Animation for the theme toggle.
 * @param direction true for `left`, false for `right`
 */
const spinAnim = (direction: boolean) => keyframes`
  from {
    transform: rotate(
      ${direction ? -60 : 60}deg
    );
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
`;
const ThemeToggle = styled(Icon)<{ theme: ColorTheme; animate: boolean }>`
  transition: all 0.2s;
  user-select: none;
  ${({ theme, animate }) =>
    animate &&
    css`
      animation: ${spinAnim(isDarkTheme(theme._id))} 0.15s ease-in-out;
    `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const NavigationBar: React.FC<{
  highlighted: string;
  theme: ColorTheme;
  setTheme: React.Dispatch<React.SetStateAction<ColorTheme>>;
}> = ({ highlighted, theme, setTheme }) => {
  const { width } = useViewportSize();

  const [mobile, setMobile] = React.useState<boolean>(
    width <= breakpoints.md && width !== 0,
  );
  const [dropdownOpen, setDropdownOpen] = React.useState<boolean>(false);
  const [animate, setAnimate] = React.useState<boolean>(false);

  const handleThemeToggle = React.useCallback(() => {
    setAnimate(true);
    const newTheme = isDarkTheme(theme._id) ? Theme.LIGHT : Theme.DARK;
    setTheme(Colors[newTheme]);
    window.localStorage.setItem(themeKey, newTheme);
  }, [setTheme, theme._id]);

  React.useEffect(() => {
    if (width <= breakpoints.md && width !== 0) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [width]);

  return (
    <Container theme={theme}>
      <NavContainer>
        <NavLinksContainer>
          <StyledLink to="/" style={{ lineHeight: 0, margin: 0 }}>
            <NavItem theme={theme} style={{ margin: 0 }}>
              <LogoImage icon={logo} width={32} height={32} hover />
            </NavItem>
          </StyledLink>
          {!mobile &&
            links.map((link, index) => (
              <StyledLink to={link.link} key={index}>
                <NavItem
                  id={link.id}
                  key={link.id}
                  highlighted={link.id === highlighted}
                  theme={theme}
                >
                  {link.pretty}
                </NavItem>
              </StyledLink>
            ))}
        </NavLinksContainer>
        <SearchBar />
        <ThemeToggle
          icon={isDarkTheme(theme._id) ? sun : moon}
          hover={true}
          theme={theme}
          width={24}
          height={24}
          animate={animate}
          onClick={() => handleThemeToggle()}
        />
        {
          !mobile && (
            <Button text="Log In" theme={theme} />
          ) /* // TODO: This mobile
        config is temporary */
        }
        {mobile && (
          <ThemeToggle
            icon={hamburgerMenu}
            hover={true}
            width={24}
            height={24}
            theme={theme}
            animate={false}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
        )}
      </NavContainer>
      {mobile && dropdownOpen && (
        <MobileLinksContainer>
          {links.map((link, index) => (
            <StyledLink to={link.link} key={index}>
              <NavItem
                id={link.id}
                key={link.id}
                highlighted={link.id === highlighted}
                theme={theme}
              >
                {link.pretty}
              </NavItem>
            </StyledLink>
          ))}
        </MobileLinksContainer>
      )}
    </Container>
  );
};

export default NavigationBar;
