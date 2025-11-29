import SearchBar from "@components/SearchBar";
import styled from "@emotion/styled";
import * as Typography from "@libs/Typography";
import { DefaultIcon as LogoImage, DefaultIcon as Icon } from "@libs/Icons";

import { useViewportSize } from "@mantine/hooks";

import { Theme, type ColorTheme } from "@libs/Types";
import React from "react";
import { breakpoints, Colors } from "@libs/globals";
import { Link } from "react-router";
import Button from "@components/Button";
import { themeKey } from "@libs/Context";

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
    id: "glossary",
    pretty: "Glossary/Index",
    link: "/glossary",
  },
];

const Container = styled.div<{ theme: ColorTheme }>`
  background-color: ${({ theme }) => theme.navBar};
`;

const NavContainer = styled.div`
  display: flex;
  padding-left: 30px;
  padding-right: 30px;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;

const NavLinksContainer = styled.div`
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
const DarkModeToggle = styled(Icon)<{ theme: ColorTheme }>`
  transition: all 0.2s;
  :active {
    transform: rotate(
      ${({ theme }) => (theme._id === Theme.DARK ? 45 : -45)}deg
    ); // TODO: Eventually have a dark mode toggle like elanmed.dev
  }
`;

export const NavigationBar: React.FC<{
  highlighted: string;
  theme: ColorTheme;
  setTheme: React.Dispatch<React.SetStateAction<ColorTheme>>;
}> = ({ highlighted, theme, setTheme }) => {
  const { width } = useViewportSize();

  const [mobile, setMobile] = React.useState<boolean>(
    width <= breakpoints.md && width !== 0
  );
  const [dropdownOpen, setDropdownOpen] = React.useState<boolean>(false);

  const handleThemeToggle = React.useCallback(() => {
    const newTheme = theme._id === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(Colors[newTheme]);
    window.localStorage.setItem(themeKey, newTheme);
  }, [theme]);

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
          <StyledLink to="/">
            <NavItem theme={theme}>
              <LogoImage
                src="/src/assets/logos/logo.svg"
                width={32}
                height={32}
              />
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
        <Icon
          src={
            theme._id === Theme.DARK
              ? "/src/assets/icons/sun.svg" // TODO: There may be a better way to do this rather than hardcoding the path
              : "/src/assets/icons/moon.svg"
          }
          hover={true}
          width={24}
          height={24}
          onClick={() => handleThemeToggle()}
        />
        <Button text="Log In" theme={theme} />
        {mobile && (
          <DarkModeToggle
            src="/src/assets/icons/hamburger_menu.svg"
            hover={true}
            width={24}
            height={24}
            theme={theme}
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
