import Badge from "@components/Badge";
import styled from "@emotion/styled";

import React from "react";
import { IconWithTooltip } from "@libs/Icons";
import * as Typography from "@libs/Typography";
import resourceIcons from "@database/resourceIcons.json";
import { hexToRGB } from "@libs/functions";

import {
  AccountStatus,
  type ColorTheme,
  type ResourceInfo,
  type ResourceType,
} from "@libs/Types";
import { HorizontalRow } from "@components/HorizontalRow";
import ControlButtons from "@components/ControlButtons";
import { colorMap } from "@database/colorMap";
import { ThemeContext } from "@libs/Context";
import Thumbnail from "@components/Thumbnail";

const Container = styled.div<{ backgroundColor?: string; theme: ColorTheme }>`
  /* width: 300px; */
  height: fit-content;
  padding: 10px;
  outline: 3px solid ${({ theme }) => theme.text};
  border-radius: 10px;
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#717171"};
  backdrop-filter: blur(40%);
  transition: all 0.2s;
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
`;
const BadgeRow = styled.div`
  width: 100%;
  /* height: 50px; */
  /* overflow-y: scroll; */
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`;

const StyledControls = styled(ControlButtons)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 4;
`;

const ClassDemoContainer = styled.div`
  height: fit-content;
  border-radius: 10px;
  transition: all 0.2s;
  :hover {
    transform: translateY(-10px);
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  }
`;
const StyledImage = styled.img`
  width: 100%;
  border-radius: 12px;
`;

/**
 * Represents a Card, to be displayed on the Dashboard and various other pages. This card handles its
 * own state when the dropdown or fullscreen versions are activated by the user.
 * @param resource Resource information
 * @param setSelectedResource sets the current resource that is displayed in the fullscreen modal
 * @returns Card component that can be expanded if clicked
 */
export const ClassDemoCard: React.FC<{
  resource: ResourceInfo;
  setSelectedResource: React.Dispatch<
    React.SetStateAction<ResourceInfo | null>
  >;
}> = ({ resource, setSelectedResource }) => {
  const [dropdownActive, setDropdownActive] = React.useState<boolean>(false);

  const { theme } = React.useContext(ThemeContext);

  const icon = React.useMemo(() => {
    const curIcon = resourceIcons.find(
      (item) => resource.type === (item.type as unknown as ResourceType)
    );
    if (!curIcon) {
      throw new Error("Resource Icon Not Found");
    } else return curIcon.icon;
  }, [resource.type]);

  return (
    <ClassDemoContainer id={resource._id}>
      <VisibleContent>
        <MainContent>
          <a href={resource.solomonLink}>
            <StyledImage
              src={`/src/assets/images/${resource.image}`}
              alt={resource._id}
            />
          </a>
          <Typography.Subtitle style={{ marginTop: 2 }}>
            {resource.name}
          </Typography.Subtitle>
          <Typography.Paragraph style={{ marginTop: 7 }}>
            {resource.shortDescription}
          </Typography.Paragraph>
          <BadgeRow>
            {resource.badges?.map((id, index) => (
              <Badge id={id} key={index} />
            ))}
          </BadgeRow>
        </MainContent>
        {resource.controls && (
          <StyledControls
            resource={resource}
            setSelectedResource={setSelectedResource}
            dropdownActive={dropdownActive}
            setDropdownActive={setDropdownActive}
            accountStatus={AccountStatus.GUEST}
            controls={resource.controls}
            favorite={false}
          />
        )}
      </VisibleContent>
      {dropdownActive && resource.recentContent && (
        <div id="expanded-content">
          <Typography.DropdownTitle>Recent Content</Typography.DropdownTitle>
          {resource.recentContent.map((contentItem, index) => (
            <>
              <Thumbnail
                title={contentItem.title}
                image={contentItem.thumbnail}
                link={""}
                description={contentItem.description}
                badges={contentItem.badges}
              />
              {index < resource.recentContent!.length - 1 && (
                <HorizontalRow color={theme.secondaryRow} />
              )}
            </>
          ))}
        </div>
      )}
    </ClassDemoContainer>
  );
};

// TODO: Likely add a `setFavorite()` state function
/**
 * Represents a Card, to be displayed on the Dashboard and various other pages. This card handles its
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
  const translucentBackgroundColor = React.useMemo(() => {
    const rgbColor = hexToRGB(colorMap[resource.type]);
    return `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.2)`;
  }, [resource]);
  const icon = React.useMemo(() => {
    const curIcon = resourceIcons.find(
      (item) => resource.type === (item.type as unknown as ResourceType)
    );
    if (!curIcon) {
      throw new Error("Resource Icon Not Found"); // TODO: This should maybe fail quietly and display some sort of placeholder
    } else return curIcon.icon;
  }, [resource.type]);

  return (
    <Container
      id={resource._id}
      backgroundColor={translucentBackgroundColor}
      theme={theme}
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
          <Typography.Paragraph>
            {resource.shortDescription}
          </Typography.Paragraph>
          <BadgeRow>
            {resource.badges?.map((id, index) => (
              <Badge id={id} key={index} />
            ))}
          </BadgeRow>
        </MainContent>
        {resource.controls && (
          <ControlButtons
            resource={resource}
            setSelectedResource={setSelectedResource}
            dropdownActive={dropdownActive}
            setDropdownActive={setDropdownActive}
            accountStatus={AccountStatus.GUEST} // TODO: This will almost certainly be calculated with Context
            controls={resource.controls}
            favorite={false} // TODO: This depends on the account
          />
        )}
      </VisibleContent>
      {dropdownActive && resource.recentContent && (
        <div id="expanded-content">
          <Typography.DropdownTitle>Recent Content</Typography.DropdownTitle>
          {resource.recentContent.map(
            (
              contentItem, // Horizontal Row
              index
            ) => (
              <>
                <Thumbnail
                  title={contentItem.title}
                  image={contentItem.thumbnail}
                  link={""}
                  description={contentItem.description}
                  badges={contentItem.badges}
                />
                {index < resource.recentContent!.length - 1 && (
                  <HorizontalRow color={theme.secondaryRow} />
                )}
              </>
            )
          )}
        </div>
      )}
    </Container>
  );
};
