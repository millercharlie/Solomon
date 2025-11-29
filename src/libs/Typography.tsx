import styled from "@emotion/styled";

export const Title = styled.h1`
  font-family: "pinot-grigio-modern", sans-serif;
  font-size: 50px;
  font-weight: 700;
  font-style: normal;
  margin-top: 0;
`;
export const Subtitle = styled.h3`
  font-family: "apparat-semicond", sans-serif;
  font-size: 13pt;
  font-weight: 500;
  font-style: normal;
  line-height: 100%;
  font-variant: all-small-caps;
  margin-top: 0;
  margin-bottom: 0;
`;

export const Description = styled.h2<{ fontSize?: string; italic?: boolean }>`
  font-family: "fira-sans", "avenir", sans-serif;
  font-size: ${({ fontSize }) => fontSize ?? `20pt`};
  font-weight: 500;
  font-style: ${({ italic }) => (italic ? `italic` : `normal`)};
  white-space: pre-line;
`;

export const RowHeading = styled.h2`
  font-family: "fira-sans", "avenir", sans-serif;
  font-size: 20px;
  font-weight: 500;
  font-style: italic;
`;

export const NavigationLink = styled.p`
  font-family: "avenir", sans-serif;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
`;
export const SidebarLink = styled.a`
  font-family: "fira-sans", "avenir", sans-serif;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  margin-top: 0;
  margin-bottom: 0;
  text-decoration: none;
  color: inherit;
`;

export const LargeParagraph = styled.p`
  font-family: "fira-sans", "avenir", sans-serif;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  white-space: pre-line;
`;
/**
 * General paragraph text.
 */
export const Paragraph = styled.p`
  font-family: "avenir", sans-serif;
  font-size: 11pt;
  font-weight: 500;
  font-style: normal;
`;

/**
 * Text that appears on all badges.
 */
export const BadgeText = styled.p`
  font-family: "fira-sans-condensed", sans-serif;
  font-size: 9pt;
  text-transform: uppercase;
  font-weight: 600;
  font-style: normal;
  margin-bottom: 14px; // tODO; This is horrifically janky
`;
/**
 * Text style of every tooltip.
 */
export const TooltipText = styled.p`
  font-family: "fira-sans", "avenir", sans-serif;
  font-size: 11px;
  font-weight: bold;
  font-style: normal;
  margin-top: 0;
  margin-bottom: 0;
`;

/**
 * Text inside of a button
 */
export const ButtonText = styled.p`
  font-family: "avenir", sans-serif;
  font-size: 20pt;
  font-weight: bolder;
  font-style: normal;
`;

export const DropdownTitle = styled.p`
  font-family: "fira-sans", "avenir", sans-serif;
  font-size: 12pt;
  font-weight: normal;
  font-variant: all-small-caps;
  font-style: italic;
  margin-bottom: 0;
`;
/**
 * Styles of every thumbnail (recent content) title.
 */
export const ThumbnailTitle = styled.p`
  font-family: "apparat-semicond", "fira-sans", "avenir", sans-serif;
  font-size: 11pt;
  font-weight: 600; // TODO: This may not be semibold
  font-style: normal;
  font-variant: all-small-caps;
  line-height: 1;
`;
export const LargeThumbnailTitle = styled.p`
  font-family: "fira-sans", "apparat-semicond", "avenir", sans-serif;
  font-size: 12pt;
  font-weight: 700;
  font-style: normal;
  line-height: 1.3;
`;
