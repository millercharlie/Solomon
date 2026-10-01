import styled from "@emotion/styled";
import type { IconComponent, ResourceLink } from "@libs/Types";
import * as Typography from "@libs/Typography";

import { DefaultIcon, MediumIcon as Icon } from "@libs/Icons";
import React from "react";
import Tooltip from "@components/Tooltip";
import squarrow from "@assets/arrows/squarrow.svg?react";
import { platformIconMap } from "@database/iconMap";

const Container = styled.li<{ link?: boolean }>`
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: ${({ link }) => (link ? "pointer" : "default")};
  transition: all 0.2s;
  :hover {
    text-decoration: ${({ link }) => (link ? "underline" : "none")};
  }
`;

const Link: React.FC<{
  item: ResourceLink;
  samePage?: boolean;
  noIcon?: boolean;
}> = ({ item, samePage, noIcon }) => {
  const [tooltipVisible, setTooltipVisible] = React.useState<boolean>(false);

  const renderedIcon = React.useMemo<IconComponent>(
    () => platformIconMap[item.platform],
    [item.platform],
  );

  return (
    <Container
      link={item.url !== undefined && item.url !== null && item.url !== ""}
    >
      {item.platform && renderedIcon && <DefaultIcon icon={renderedIcon} />}
      <Typography.SidebarItem
        href={item.url}
        target={samePage ? "_self" : "_blank"}
        id="item-text"
        style={{ position: "relative" }}
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
      >
        {item.tooltip && (
          <Tooltip text={item.tooltip} visible={tooltipVisible} />
        )}
        {item.displayText.includes("\u2013")
          ? item.displayText
              .split("\u2013")
              .map((phrase, index) =>
                index === 0 ? (
                  <span style={{ fontStyle: "italic" }}>{phrase} &ndash;</span>
                ) : (
                  phrase
                ),
              )
          : item.displayText}
      </Typography.SidebarItem>
      {item.url !== undefined &&
        item.url !== null &&
        item.url !== "" &&
        !noIcon && <Icon icon={squarrow} />}
    </Container>
  );
};

export default Link;
