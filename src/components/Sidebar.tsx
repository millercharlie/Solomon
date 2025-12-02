import * as Typography from "@libs/Typography";
import { MediumIcon as Icon, IconWithTooltip } from "@libs/Icons";
import styled from "@emotion/styled";
import type { ResourceLink, SidebarLink } from "@libs/Types";
import { HorizontalRow } from "@components/HorizontalRow";
import Link from "@components/Link";
import React from "react";
import { sidebarKey, ThemeContext } from "@libs/Context";
import { useViewportSize } from "@mantine/hooks";
import { breakpoints } from "@libs/globals";

const Container = styled.div<{ open: boolean }>`
  width: ${({ open }) => (open ? "100%" : 0)};
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
  items,
  rowColor,
}: {
  title: string;
  icon: string;
  items: ResourceLink[];
  rowColor: string;
}) => (
  <div>
    <TitleWrapper>
      <Icon src={`../assets/icons/${icon}`} hover={false} />
      <Typography.Subtitle id="title-text">{title}</Typography.Subtitle>
    </TitleWrapper>
    <HorizontalRow color={rowColor} />
    <UnorderedList>
      {items.map((item, index) => (
        <Link key={`item-${index}`} item={item} />
      ))}
    </UnorderedList>
  </div>
);

const Sidebar: React.FC<{
  contents: SidebarLink[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ contents, open, setOpen }) => {
  const { theme } = React.useContext(ThemeContext);
  const { width } = useViewportSize();

  const [mobile, setMobile] = React.useState<boolean>(
    width <= breakpoints.md && width !== 0
  );

  React.useEffect(() => {
    if (width <= breakpoints.md && width !== 0) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [width]);

  const handleClick = React.useCallback(() => {
    window.localStorage.setItem(sidebarKey, !open ? "true" : "false");
    setOpen(!open);
  }, [open, setOpen]);

  return !mobile ? (
    <Container open={open}>
      <IconWithTooltip
        icon={open ? "close_sidebar.svg" : "open_sidebar.svg"}
        text={`${open ? "Close" : "Open"} Sidebar`}
        onClick={handleClick}
      />
      <ContentContainer open={open}>
        {...contents.map((content, index) => (
          <SidebarItem
            title={content.title}
            icon={content.icon}
            items={content.items}
            key={index}
            rowColor={theme.primaryRow}
          />
        ))}
      </ContentContainer>
    </Container>
  ) : (
    <></>
  );
};

export default Sidebar;
