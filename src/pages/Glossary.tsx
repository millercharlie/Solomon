import styled from "@emotion/styled";
import * as Typography from "@libs/Typography";

import { PageType, type ResourceInfo } from "@libs/Types";
import React from "react";
import ResourceModal from "@components/modals/ResourceModal";
import { dummyResource } from "@libs/globals";
import Link from "@components/Link";

import data from "@database/all_data.json";
import topics from "@database/all_topics.json";
import { HorizontalRow } from "@components/HorizontalRow";
import PageTemplate from "@pages/PageTemplate";
import { ThemeContext } from "@libs/Context";

const ContentBackground = styled.div`
  margin-top: 30px;
  padding-left: 45px;
  padding-right: 45px;
  gap: 20px;
  z-index: 1;
  height: 100vh;
`;
const Heading = styled.div`
  width: 100%;
`;
const Content = styled.div`
  width: 100%;
`;

const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

/**
 * Desktop Dashboard when the user is logged out.
 * @returns Desktop Dashboard
 */
const Glossary: React.FC = () => {
  const [selectedResource, setSelectedResource] =
    React.useState<ResourceInfo | null>(null);

  const { theme } = React.useContext(ThemeContext);

  // TODO: `data` here is hardcoded for now, but should eventually use the database
  const findAllSourcesFromLetter = React.useCallback<
    (letter: string) => ResourceInfo[]
  >(
    (letter) =>
      data.filter(
        (item) =>
          item._id!.charAt(0).toLocaleLowerCase() === letter.toLocaleLowerCase()
      ) as ResourceInfo[],
    []
  );
  const findAllTopicsFromLetter = React.useCallback<
    (letter: string) => ResourceInfo[]
  >(
    (letter) =>
      topics.filter(
        (item) =>
          item._id!.charAt(0).toLocaleLowerCase() === letter.toLocaleLowerCase()
      ) as ResourceInfo[],
    []
  );

  return (
    <PageTemplate pageType={PageType.GLOSSARY}>
      <ContentBackground>
        <Heading>
          <Typography.Title>Glossary</Typography.Title>
          <Typography.LargeParagraph>
            All Sources, from A to Z. Topics are in a separate category.
          </Typography.LargeParagraph>
        </Heading>
        <Content>
          {alphabet.map((letter) => {
            const sources = findAllSourcesFromLetter(letter);
            return (
              <div id={letter}>
                {sources.map((resource: ResourceInfo) => (
                  <div id="all-links">
                    <Typography.RowHeading style={{ paddingBottom: 10 }}>
                      {letter}
                    </Typography.RowHeading>
                    <Link
                      item={{
                        platform: resource.type,
                        link: resource.links![0].link, // TODO: This needds to be modified to support an onClick() for the expanded card
                        displayText: resource.name,
                        icon: resource.type,
                      }}
                    />
                  </div>
                ))}
              </div>
            );
          })}
          <HorizontalRow color={theme.secondaryRow} />
          <Typography.RowHeading style={{ paddingBottom: 10 }}>
            All Topics
          </Typography.RowHeading>
          {alphabet.map((letter) => {
            const topicsByLetter = findAllTopicsFromLetter(letter);
            return (
              <div id={letter}>
                {topicsByLetter.map((topic: ResourceInfo) => (
                  <Link
                    item={{
                      platform: topic.type,
                      link: topic.links![0].link,
                      displayText: topic.name,
                      icon: topic.type,
                    }}
                  />
                ))}
              </div>
            );
          })}
        </Content>
      </ContentBackground>
      <ResourceModal
        resource={selectedResource || dummyResource} // TODO: This dummy resource is fine for now, but is a bit jank
        setSelectedResource={setSelectedResource}
        visible={selectedResource !== null}
      />
    </PageTemplate>
  );
};

export default Glossary;
