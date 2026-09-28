import * as Typography from "@libs/Typography";
import { MediumIcon as Icon, IconWithTooltip } from "@libs/Icons";
import styled from "@emotion/styled";
import type { IconComponent, ResourceLink, SidebarItem } from "@libs/Types";
import { HorizontalRow } from "@components/HorizontalRow";
import Link from "@components/Link";
import React from "react";
import { sidebarKey, ThemeContext } from "@libs/Context";

import closeSidebar from "@assets/icons/close_sidebar.svg?react";
import openSidebar from "@assets/icons/open_sidebar.svg?react";
import { iconMap } from "@database/iconMap";

const Container = styled.div<{ open: boolean }>`
  width: ${({ open }) => (open ? "400px" : `0`)};
  margin-right: 30px;
  display: flex;
  gap: 20px;
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const UnorderedList = styled.ul`
  margin-top: 0;
  padding: 0 0 0 12px;
  list-style-position: inside;
  /* list-style-type: circle; */
`;

const ContentContainer = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? "block" : "none")};
`;

const SidebarItem = ({
  title,
  icon,
  content,
  rowColor,
}: {
  title: string;
  icon: string;
  content: ResourceLink[];
  rowColor: string;
}) => {
  const renderedIcon = React.useMemo<IconComponent>(
    () => iconMap[icon],
    [icon],
  );

  return (
    <div>
      <TitleWrapper>
        <Icon icon={renderedIcon} hover={false} />
        <Typography.Subtitle id="title-text">{title}</Typography.Subtitle>
      </TitleWrapper>
      <HorizontalRow color={rowColor} />
      <UnorderedList>
        {content.map((item, index) => (
          <Link key={`item-${index}`} item={item} />
        ))}
      </UnorderedList>
    </div>
  );
};

const Sidebar: React.FC<{
  contents: SidebarItem[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ contents, open, setOpen }) => {
  const { theme } = React.useContext(ThemeContext);

  const handleClick = React.useCallback(() => {
    window.localStorage.setItem(sidebarKey, !open ? "true" : "false");
    setOpen(!open);
  }, [open, setOpen]);

  return (
    <Container open={open}>
      <IconWithTooltip
        icon={open ? closeSidebar : openSidebar}
        text={`${open ? "Close" : "Open"} Sidebar`}
        onClick={handleClick}
      />
      <ContentContainer open={open}>
        {...contents.map((content, index) => (
          <SidebarItem
            title={content.title}
            icon={content.icon}
            content={content.content}
            key={index}
            rowColor={theme.primaryRow}
          />
        ))}
      </ContentContainer>
    </Container>
  );
};

export default Sidebar;
