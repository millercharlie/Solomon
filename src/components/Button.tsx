import styled from "@emotion/styled";
import { hexToRGB } from "@libs/functions";
import type { ColorTheme } from "@libs/Types";
import { NavigationLink } from "@libs/Typography";
import type { CSSProperties } from "react";

const StyledButton = styled.button<{ theme: ColorTheme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  background-color: rgba(
    ${({ theme }) =>
      `${hexToRGB(theme.primary).r}, ${hexToRGB(theme.primary).g}, ${
        hexToRGB(theme.primary).b
      }, 0.3`}
  );
  color: ${({ theme }) => theme.text};
  border: 3px solid ${({ theme }) => theme.text};
  border-radius: 50px;
  cursor: pointer;
  text-wrap: nowrap;

  transition: all 0.2s;
  :hover {
    transform: scale(105%);
  }
`;

const Button: React.FC<{
  text: string;
  link?: string;
  theme: ColorTheme;
  style?: CSSProperties;
}> = ({ text, link, theme, style }) => {
  return (
    <a href={link} style={style}>
      <StyledButton id="container" theme={theme}>
        <NavigationLink style={{ marginBottom: 0, marginTop: 0 }}>
          {text}
        </NavigationLink>
      </StyledButton>
    </a>
  );
};

export default Button;
