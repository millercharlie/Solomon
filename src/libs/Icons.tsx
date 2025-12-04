import Tooltip from "@components/Tooltip";
import styled from "@emotion/styled";
import { ThemeContext } from "@libs/Context";
import React, {
  useContext,
  type CSSProperties,
  type MouseEventHandler,
} from "react";

// export const DefaultIcon = styled.img<{ hover?: boolean }>`
//   cursor: ${({ hover }) => (hover ? "pointer" : "default")};
//   transition: all 0.2s;
//   :hover {
//     transform: ${({ hover }) => (hover ? "scale(110%)" : undefined)};
//   }
// `;

export const StyledSVG = styled.svg<{ hover?: boolean }>`
  flex-shrink: 0;
  transition: all 0.2s;
  cursor: ${({ hover }) => (hover ? `pointer` : `default`)};
  :hover {
    transform: ${({ hover }) => (hover ? `scale(110%)` : undefined)};
  }
`;

export const DefaultIcon: React.FC<{
  src: string;
  width?: number | string;
  height?: number | string;
  onMouseEnter?: MouseEventHandler<SVGSVGElement>;
  onMouseLeave?: MouseEventHandler<SVGSVGElement>;
  onClick?: () => void;
  hover?: boolean;
  className?: string;
  style?: CSSProperties;
}> = ({
  src,
  width,
  height,
  onMouseEnter,
  onMouseLeave,
  onClick,
  hover = true,
  className,
  style,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledSVG
      className={className}
      color={theme.text}
      width={width ?? 11}
      height={height ?? 11}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      hover={hover}
      style={style}
    >
      <use xlinkHref={src} href={src} width={width} height={height ?? 11} />
    </StyledSVG>
  );
};

export const AccountCircle: React.FC<{
  src: string;
  onMouseEnter?: MouseEventHandler<SVGSVGElement>;
  onMouseLeave?: MouseEventHandler<SVGSVGElement>;
  onClick?: () => void;
}> = ({ src, onMouseEnter, onMouseLeave, onClick }) => (
  <DefaultIcon
    src={src}
    width={32}
    height={32}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
  />
);
export const SmallIcon: React.FC<{
  src: string;
  onMouseEnter?: MouseEventHandler<SVGSVGElement>;
  onMouseLeave?: MouseEventHandler<SVGSVGElement>;
  onClick?: () => void;
  hover?: boolean;
  className?: string;
}> = ({ src, onMouseEnter, onMouseLeave, onClick, hover, className }) => (
  <DefaultIcon
    src={src}
    height={8}
    width={11} // TODO: This is basically the same as the Medium Icon
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
    hover={hover}
    className={className}
  />
);
export const MediumIcon: React.FC<{
  src: string;
  onMouseEnter?: MouseEventHandler<SVGSVGElement>;
  onMouseLeave?: MouseEventHandler<SVGSVGElement>;
  onClick?: () => void;
  hover?: boolean;
  className?: string;
  style?: CSSProperties;
}> = ({
  src,
  onMouseEnter,
  onMouseLeave,
  onClick,
  hover,
  className,
  style,
}) => (
  <DefaultIcon
    src={src}
    height={11}
    width={11}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
    hover={hover}
    className={className}
    style={style}
  />
);
export const LargeIcon: React.FC<{
  src: string;
  onMouseEnter?: MouseEventHandler<SVGSVGElement>;
  onMouseLeave?: MouseEventHandler<SVGSVGElement>;
  onClick?: () => void;
  hover?: boolean;
  className?: string;
}> = ({ src, onMouseEnter, onMouseLeave, onClick, hover, className }) => (
  <DefaultIcon
    src={src}
    height={20}
    width={20}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
    hover={hover}
    className={className}
  />
);

// export const SmallIcon = styled(DefaultIcon)`
//   height: 8px;
//   width: auto;
// `;
// export const MediumIcon = styled(DefaultIcon)`
//   height: 11px;
//   width: auto;
// `;
// export const LargeIcon = styled(DefaultIcon)`
//   height: 20px;
// `;

const Container = styled.div`
  height: 20px;
  position: relative;
`;
// TODO: The size here may need to change
export const IconWithTooltip: React.FC<{
  icon: string;
  text: string;
  onClick?: () => void;
}> = ({ icon, text, onClick }) => {
  const [visible, setVisible] = React.useState<boolean>(false);
  return (
    <Container onClick={onClick}>
      <Tooltip text={text} visible={visible} />
      <LargeIcon
        src={`/assets/icons/${icon}`}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      />
    </Container>
  );
};
