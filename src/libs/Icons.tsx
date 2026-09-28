import Tooltip from "@components/Tooltip";
import styled from "@emotion/styled";
import { ThemeContext } from "@libs/Context";
import type { IconComponent } from "@libs/Types";
import React from "react";

export const StyledSVG = styled.svg<{ hover?: boolean }>`
  flex-shrink: 0;
  transition: all 0.2s;
  cursor: ${({ hover }) => (hover ? `pointer` : `default`)};
  :hover {
    transform: ${({ hover }) => (hover ? `scale(110%)` : undefined)};
  }
`;

export const DefaultIcon: React.FC<
  {
    icon: IconComponent;
    hover?: boolean;
  } & React.SVGProps<SVGSVGElement>
> = ({ icon, hover, ...rest }) => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <StyledSVG
      as={icon}
      {...rest}
      color={theme.text}
      width={rest.width ?? 11}
      height={rest.height ?? 11}
      hover={hover}
    />
  );
};

// const AccountCircle: React.FC<
//   {
//     icon: IconComponent;
//   } & React.SVGProps<SVGSVGElement>
// > = ({ icon, ...rest }) => (
//   <DefaultIcon icon={icon} width={32} height={32} hover={false} {...rest} />
// );

export const SmallIcon: React.FC<{
  icon: IconComponent;
  hover?: boolean;
}> &
  React.SVGProps<SVGSVGElement> = ({ icon, hover, ...rest }) => (
  <DefaultIcon
    icon={icon}
    hover={hover}
    height={8} // TODO: This is basically the same as the Medium Icon
    width={11}
    {...rest}
  />
);

export const MediumIcon: React.FC<
  {
    icon: IconComponent;
    hover?: boolean;
  } & React.SVGProps<SVGSVGElement>
> = ({ icon, hover, ...rest }) => (
  <DefaultIcon icon={icon} height={11} width={11} hover={hover} {...rest} />
);

export const LargeIcon: React.FC<
  {
    icon: IconComponent;
    hover?: boolean;
  } & React.SVGProps<SVGSVGElement>
> = ({ icon, hover, ...rest }) => (
  <DefaultIcon icon={icon} width={20} height={20} hover={hover} {...rest} />
);

// TODO: The size here may need to change
export const IconWithTooltip: React.FC<
  {
    icon: IconComponent;
    text: string;
    onClick?: () => void;
  } & React.SVGProps<SVGSVGElement>
> = ({ icon, text, onClick, ...rest }) => {
  const [visible, setVisible] = React.useState<boolean>(false);
  return (
    <div
      onClick={onClick}
      style={{ height: "20px", position: "relative" }}
      id="icon_tooltip"
    >
      <Tooltip text={text} visible={visible} />
      <LargeIcon
        icon={icon}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        {...rest}
      />
    </div>
  );
};
