import Spinner from "@components/Spinner";
import styled from "@emotion/styled";
import { breakpoints } from "@libs/globals";
import {
  PageType,
  type ColorTheme,
  type ResourceInfo,
  type ResourceLink,
  type YouTubeData,
} from "@libs/Types";
import { fetcher } from "@libs/utils";
import React from "react";
import { useParams } from "react-router";
import useSWR from "swr";
import * as Typography from "@libs/Typography";
import { ThemeContext } from "@libs/Context";
import { HorizontalRow } from "@components/HorizontalRow";
import Thumbnail from "@components/Thumbnail";
import Link from "@components/Link";
import Badge from "@components/Badge";
import PageTemplate from "@pages/PageTemplate";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 60px);
  margin-top: 30px;
  padding-left: 45px;
  padding-right: 45px;
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
const Tab = styled.div<{ active?: boolean; theme: ColorTheme }>`
  font-family: "fira-sans", "avenir", sans-serif;
  font-size: 14px;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  /* font-variant: all-small-caps; */

  color: ${({ active, theme }) => (active ? theme.text : theme.secondaryText)};
  cursor: pointer;
  margin-bottom: -7px;

  :hover {
    text-decoration: underline;
  }
`;

const BadgeRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`;

const Photo = styled.img`
  border-radius: 50%;
  max-width: 100px;
  position: absolute;
  float: left;
  margin-top: 30px;
  margin-left: 45px;
`;

// TODO: Right now, ResourceModal and ResourcePage largely duplicate each other.
/**
 * Single Resource Page
 * @returns JSX.Element
 */
const ResourcePage: React.FC = () => {
  const params = useParams();
  const {
    data: resource,
    error,
    isLoading,
  } = useSWR(
    `${import.meta.env.VITE_API_URI}/resource/${params.resourceId}`,
    fetcher,
  ) as { data: ResourceInfo; error: string; isLoading: boolean };

  const { theme } = React.useContext(ThemeContext);
  const [active, setActive] = React.useState<number>(0);

  const { data } = useSWR<YouTubeData>(
    resource.api && resource.api?.queryParam
      ? `${import.meta.env.VITE_API_URI}/youtube/${resource.api.queryParam}`
      : null,
    fetcher,
    { suspense: false, shouldRetryOnError: false },
  );

  const priorityLink = React.useMemo((): ResourceLink | undefined => {
    return resource && resource.links.find((l) => l.priority);
  }, [resource]);

  return isLoading ? (
    <Spinner />
  ) : resource ? (
    <PageTemplate pageType={PageType.resource}>
      {data?.pfp && data?.pfp !== "" && (
        <Photo src={data.pfp} alt="pfp" referrerPolicy="no-referrer" />
      )}
      <Container>
        <Typography.ResourceTitle style={{ marginBottom: 10 }}>
          {resource.creator
            ? `${resource.name} - ${resource.creator}`
            : resource.name}
        </Typography.ResourceTitle>
        <Typography.Description
          fontSize="20px"
          italic={true}
          style={{ marginTop: 0, marginBottom: 30 }}
        >
          {resource.shortDesc}
        </Typography.Description>
        <Body>
          <TabsContainer>
            <AllTabs>
              <Tab
                active={active === 0}
                onClick={() => setActive(0)}
                theme={theme}
              >
                About
              </Tab>
              <Tab
                active={active === 1}
                onClick={() => setActive(1)}
                theme={theme}
              >
                Recent Content
              </Tab>
              <Tab
                active={active === 2}
                onClick={() => setActive(2)}
                theme={theme}
              >
                Links
              </Tab>
            </AllTabs>
            <HorizontalRow color={theme.primaryRow} />
          </TabsContainer>
          {active === 0 && (
            <Typography.Description fontSize="14px">
              {resource.longDesc}
            </Typography.Description>
          )}
          {active > 0 && (
            <ContentContainer>
              {data?.recentContent && active === 1 && (
                <ResourceContent>
                  {data.recentContent.map((item, index) => (
                    <>
                      <Thumbnail
                        key={index}
                        title={item.title}
                        imageUrl={item.thumbnail}
                        link={item.url}
                        description={item.description}
                        large={true}
                      />
                      {index < data.recentContent.length - 1 && (
                        <HorizontalRow color={theme.secondaryRow} />
                      )}
                    </>
                  ))}
                </ResourceContent>
              )}
              {resource.links.length > 0 && active === 2 && (
                <div id="all-links">
                  {resource.links.map((item) => (
                    <Link item={item} />
                  ))}
                </div>
              )}
            </ContentContainer>
          )}
          {active === 0 && (
            <>
              <div style={{ width: "100%", marginBottom: -7 }}>
                <HorizontalRow color={theme.primaryRow} />
              </div>
              <BadgeRow>
                {resource.badges?.map((id, index) => (
                  <Badge _id={id} key={index} themeId={theme._id} />
                ))}
              </BadgeRow>
            </>
          )}
          {priorityLink && (
            <>
              <div style={{ width: "100%", marginBottom: -7 }}>
                <HorizontalRow color={theme.primaryRow} />
              </div>
              <div style={{ width: "100%" }}>
                <Link item={priorityLink} />
              </div>
            </>
          )}
        </Body>
      </Container>
    </PageTemplate>
  ) : (
    <p>{`Failed to load. ${error}`}</p>
  );
};

export default ResourcePage;
