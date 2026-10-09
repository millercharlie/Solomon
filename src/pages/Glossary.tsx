import styled from "@emotion/styled";
import * as Typography from "@libs/Typography";

import {
  PageType,
  type GlossaryItem,
  type GlossaryPage,
  type ResourceInfo,
} from "@libs/Types";
import React from "react";
import ResourceModal from "@components/modals/ResourceModal";
import { dummyResource } from "@libs/globals";
import Link from "@components/Link";

import { HorizontalRow } from "@components/HorizontalRow";
import PageTemplate from "@pages/PageTemplate";
import { ThemeContext } from "@libs/Context";
import useSWR from "swr";
import { fetcher, getResourceLinkById, getTopicLinkById } from "@libs/utils";
import Spinner from "@components/Spinner";

const ContentBackground = styled.div`
  margin-top: 30px;
  padding-left: 45px;
  padding-right: 45px;
  padding-bottom: 30px;
  gap: 20px;
  z-index: 1;
  min-height: 100vh;
`;
const Heading = styled.div`
  width: 100%;
`;
const Content = styled.div`
  width: 100%;
`;
const ResourcesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const TopicsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

/**
 * Desktop Dashboard when the user is logged out.
 * @returns Desktop Dashboard
 */
const Glossary: React.FC = () => {
  const [selectedResource, setSelectedResource] =
    React.useState<ResourceInfo | null>(null);

  const { theme } = React.useContext(ThemeContext);

  const { data, isLoading } = useSWR(
    `${import.meta.env.VITE_API_URI}/pages/glossary`,
    fetcher,
  ) as { data: GlossaryPage; isLoading: true };

  return isLoading ? (
    <Spinner />
  ) : data ? (
    <PageTemplate pageType={PageType.glossary}>
      <ContentBackground>
        <Heading>
          <Typography.Title>Glossary</Typography.Title>
          <Typography.LargeParagraph>
            All Resources, from A to Z. Topics are in a separate category.
          </Typography.LargeParagraph>
        </Heading>
        <Content>
          <ResourcesContainer>
            {data.data.resources.map((resource) => {
              return (
                resource.content.length > 0 && (
                  <div id={resource.letter}>
                    <Typography.RowHeading style={{ paddingBottom: 10 }}>
                      {resource.letter}
                    </Typography.RowHeading>
                    {resource.content.map((t: GlossaryItem) => (
                      <div id="all-links">
                        <Link
                          item={{
                            platform: t.type || "person",
                            url: getResourceLinkById(t._id),
                            displayText: t.pretty,
                          }}
                          samePage
                        />
                      </div>
                    ))}
                  </div>
                )
              );
            })}
          </ResourcesContainer>
          <HorizontalRow color={theme.secondaryRow} />
          <Typography.RowHeading style={{ paddingBottom: 10 }}>
            All Topics
          </Typography.RowHeading>
          <TopicsContainer>
            {data.data.topics.map((topic) => {
              return (
                topic.content.length > 0 && (
                  <div id={topic.letter}>
                    <Typography.RowHeading style={{ paddingBottom: 10 }}>
                      {topic.letter}
                    </Typography.RowHeading>
                    {topic.content.map((t: GlossaryItem) => (
                      <div id="all-links">
                        <Link
                          item={{
                            platform: "topic",
                            url: getTopicLinkById(t._id),
                            displayText: t.pretty,
                          }}
                          samePage
                        />
                      </div>
                    ))}
                  </div>
                )
              );
            })}
          </TopicsContainer>
        </Content>
      </ContentBackground>
      <ResourceModal
        resource={selectedResource || dummyResource} // TODO: This dummy resource is fine for now, but is a bit jank
        setSelectedResource={setSelectedResource}
        visible={selectedResource !== null}
      />
    </PageTemplate>
  ) : (
    <p>{`Failed to load.`}</p>
  );
};

export default Glossary;
