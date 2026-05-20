import Badge from "@components/Badge";
import ControlButtons from "@components/ControlButtons";
import { HorizontalRow } from "@components/HorizontalRow";
import Link from "@components/Link";
import Modal from "@components/modals/Modal";
import Thumbnail from "@components/Thumbnail";
import { colorMap } from "@database/colorMap";
import styled from "@emotion/styled";
import { ThemeContext } from "@libs/Context";
import { noOp } from "@libs/functions";
import { breakpoints } from "@libs/globals";
import { AccountStatus, type ResourceInfo } from "@libs/Types";
import * as Typography from "@libs/Typography";
import React from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Body = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const ContentContainer = styled.div`
  margin-top: 15px;

  @media (max-width: ${breakpoints.md}px) {
    display: block;
  }
`;
const ResourceContent = styled.div`
  @media (max-width: ${breakpoints.md}px) {
    padding-bottom: 20px;
  }
`;

const TabsContainer = styled.div`
  width: 100%;
`;
const AllTabs = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Tab = styled.div<{ active?: boolean }>`
  font-family: "fira-sans", "avenir", sans-serif;
  font-size: 14px;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  font-variant: all-small-caps;

  color: ${({ active }) => (active ? "#ffffff" : "#cecece")};
  cursor: pointer;
  margin-bottom: -7px;

  :hover {
    text-decoration: underline;
  }
`;

const LargeControlButtons = styled(ControlButtons)`
  position: absolute;
  top: 30px;
  right: 30px;
`;

const BadgeRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`;

/**
 * Represents a modal for a single resource, such as a historian or non-profit.
 */
const ResourceModal: React.FC<{
  resource: ResourceInfo;
  setSelectedResource: React.Dispatch<
    React.SetStateAction<ResourceInfo | null>
  >;
  visible: boolean;
}> = ({ resource, setSelectedResource, visible }) => {
  const { theme } = React.useContext(ThemeContext);
  const [active, setActive] = React.useState<number>(0);

  return (
    <Modal visible={visible} backgroundColor={colorMap[resource.type]}>
      <Container>
        <Typography.ResourceTitle style={{ marginBottom: 10 }}>
          {resource.name}
        </Typography.ResourceTitle>
        <Typography.Description
          fontSize="20px"
          italic={true}
          style={{ marginTop: 0, marginBottom: 30 }}
        >
          {resource.shortDescription}
        </Typography.Description>
        <Body>
          <TabsContainer>
            <AllTabs>
              <Tab active={active === 0} onClick={() => setActive(0)}>
                About
              </Tab>
              <Tab active={active === 1} onClick={() => setActive(1)}>
                Recent Content
              </Tab>
              <Tab active={active === 2} onClick={() => setActive(2)}>
                Recommended for You
              </Tab>
              <Tab active={active === 3} onClick={() => setActive(3)}>
                Links
              </Tab>
            </AllTabs>
            <HorizontalRow />
          </TabsContainer>
          {active === 0 && (
            <Typography.Description fontSize="14px">
              {resource.longDescription}
            </Typography.Description>
          )}
          {active > 0 && (
            <ContentContainer>
              {resource.recentContent && active === 1 && (
                <ResourceContent>
                  {resource.recentContent?.map((item, index) => (
                    <>
                      <Thumbnail
                        key={index}
                        title={item.title}
                        image={item.thumbnail}
                        link={item.link}
                        badges={item.badges}
                        description={item.description}
                        large={true}
                      />
                      {index < resource.recentContent!.length - 1 && (
                        <HorizontalRow color={theme.secondaryRow} />
                      )}
                    </>
                  ))}
                </ResourceContent>
              )}
              {resource.recommendedContent && active === 2 && (
                <ResourceContent>
                  {resource.recommendedContent?.map((item, index) => (
                    <>
                      <Thumbnail
                        key={index}
                        title={item.title}
                        image={item.thumbnail}
                        link={item.link}
                        badges={item.badges}
                        description={item.description}
                        large={true}
                      />
                      {index < resource.recommendedContent!.length - 1 && (
                        <HorizontalRow color={theme.secondaryRow} />
                      )}
                    </>
                  ))}
                </ResourceContent>
              )}
              {resource.links && resource.links.length > 0 && active === 3 && (
                <div id="all-links">
                  {resource.links.map((item) => (
                    <Link item={item} />
                  ))}
                </div>
              )}
            </ContentContainer>
          )}
          {resource.controls && (
            <LargeControlButtons
              resource={resource}
              favorite={resource.favorite || false}
              setSelectedResource={setSelectedResource}
              controls={resource.controls}
              dropdownActive={false}
              setDropdownActive={noOp}
              large={true}
              accountStatus={AccountStatus.GUEST} // TODO: This will almost certainly be calculated with Context
            />
          )}
          <div style={{ width: "100%", marginBottom: -7 }}>
            <HorizontalRow />
          </div>
          <BadgeRow>
            {resource.badges?.map((id, index) => (
              <Badge id={id} key={index} />
            ))}
          </BadgeRow>
        </Body>
      </Container>
    </Modal>
  );
};

export default ResourceModal;
