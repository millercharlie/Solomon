import styled from "@emotion/styled";

import React from "react";
import { IconWithTooltip } from "@libs/Icons";
import * as Typography from "@libs/Typography";
import resourceIcons from "@database/resourceIcons.json";

import { ResourceType, type ColorTheme, type ResourceInfo } from "@libs/Types";
import ControlButtons from "@components/ControlButtons";
import { ThemeContext } from "@libs/Context";
import Badge from "@components/Badge";
import { findControls, getLink, isDarkTheme } from "@libs/utils";
import { iconMap } from "@database/iconMap";

const Container = styled.div<{
  bColor?: string;
  theme: ColorTheme;
  doubleWidth?: boolean;
}>`
  height: fit-content;
  padding: 10px;
  box-sizing: border-box;
  border: ${({ bColor, theme }) =>
    isDarkTheme(theme._id) ? `2px solid ${bColor}` : undefined};
  border-radius: 10px;
  background-color: ${({ bColor }) => `${bColor}4D`};
  backdrop-filter: blur(40%);
  transition: all 0.2s;
  grid-column: span ${({ doubleWidth }) => (doubleWidth ? "2" : "1")};
  :hover {
    transform: translateY(-10px);
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  }
`;
const VisibleContent = styled.div`
  position: relative;
  display: flex;
`;
const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;
const MainContent = styled.div`
  transition: all 0.2s;
  box-sizing: border-box;
`;
const BadgeRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`;

/**
 * Represents a Card to be displayed on the Dashboard and various other pages. This card handles its
 * own state when the dropdown or fullscreen versions are activated by the user.
 * @param resource Resource information
 * @param setSelectedResource sets the current resource that is displayed in the fullscreen modal
 * @returns Card component that can be expanded if clicked
 */
export const Card: React.FC<{
  resource: ResourceInfo;
  setSelectedResource: React.Dispatch<
    React.SetStateAction<ResourceInfo | null>
  >;
}> = ({ resource, setSelectedResource }) => {
  const [dropdownActive, setDropdownActive] = React.useState<boolean>(false);

  const { theme } = React.useContext(ThemeContext);

  const icon = React.useMemo(() => {
    const curIcon = resourceIcons.find(
      (item) => resource.type === (item.type as unknown as ResourceType),
    );
    if (!curIcon) {
      const defaultIcon = resourceIcons.find((icon) => icon.type === "person");
      if (!defaultIcon) {
        throw new Error("Resource Icon Not Found");
      } else {
        const renderedIcon = iconMap[defaultIcon.icon];
        return renderedIcon;
      }
    } else {
      const renderedIcon = iconMap[curIcon.icon];
      return renderedIcon;
    }
  }, [resource.type]);

  return (
    <Container
      id={resource._id}
      bColor={resource.color || "#72B661"}
      theme={theme}
      onClick={() =>
        resource ? setSelectedResource(resource) : setSelectedResource(null)
      }
    >
      <VisibleContent>
        <MainContent>
          <TitleRow>
            <IconWithTooltip
              icon={icon}
              text={
                String(resource.type).charAt(0).toUpperCase() +
                String(resource.type).slice(1)
              }
            />
            <Typography.Subtitle>{resource.name}</Typography.Subtitle>
          </TitleRow>
          <Typography.Paragraph>{resource.shortDesc}</Typography.Paragraph>
          <BadgeRow>
            {resource.badges?.map((badge, index) => (
              <Badge _id={badge} key={index} themeId={theme._id} />
            ))}
          </BadgeRow>
        </MainContent>
        <ControlButtons
          resource={resource}
          setSelectedResource={setSelectedResource}
          dropdownActive={dropdownActive}
          setDropdownActive={setDropdownActive}
          controls={findControls(resource)}
          link={getLink(resource)}
        />
      </VisibleContent>
    </Container>
  );
};

/**
 * {dropdownActive && resource.recentContent && (
        <div id="expanded-content">
          <Typography.DropdownTitle>Recent Content</Typography.DropdownTitle>
          {resource.recentContent.map(
            (
              contentItem, // Horizontal Row
              index,
            ) => (
              <>
                <Thumbnail
                  title={contentItem.title}
                  // image={contentItem.thumbnail}
                  link={""}
                  description={contentItem.description}
                  badges={contentItem.badges ?? []}
                />
                {index < resource.recentContent!.length - 1 && (
                  <HorizontalRow color={theme.secondaryRow} />
                )}
              </>
            ),
          )}
        </div>
      )}
 */
