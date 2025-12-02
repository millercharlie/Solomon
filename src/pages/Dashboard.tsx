import styled from "@emotion/styled";
import * as Typography from "@libs/Typography";
import logogram from "@assets/logos/logogram.svg";
import { sidebarData } from "@database/mockData";
import Sidebar from "@components/Sidebar";

import { ClassDemoCard } from "@components/Cards";
import { PageType, type DashboardData, type ResourceInfo } from "@libs/Types";
import * as theme from "@libs/globals";
import React from "react";
import ResourceModal from "@components/modals/ResourceModal";
import { dummyResource } from "@libs/globals";
import { DefaultIcon } from "@libs/Icons";
import PageTemplate from "@pages/PageTemplate";
import { sidebarKey } from "@libs/Context";

const ContentBackground = styled.div<{ sidebarOpen: boolean }>`
  margin-top: 30px;
  padding-left: 45px;
  padding-right: 45px;
  display: grid;
  grid-template-columns: ${({ sidebarOpen }) =>
    sidebarOpen ? "3fr 1fr" : "1000fr 1fr"};
  gap: 20px;
  z-index: 1;
`;
const Heading = styled.div`
  width: 100%;
`;
const Content = styled.div`
  /* width: 70vw; */
`;
const MainContent = styled.div`
  margin-top: 30px;
`;
const Logogram = styled(DefaultIcon)`
  width: 300px;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;

const Row = styled.div`
  margin-bottom: 30px;
`;
const CardRow = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  gap: 30px;

  @media screen and (max-width: ${theme.breakpoints.md}px) {
    grid-template-columns: repeat(
      1,
      1fr
    ); // TODO: This is okay for now, but will immediately break once more resources are added
  }
`;

// TODO: Background Gradient should NOT be an SVG - it should be dynamically calculated

/**
 * Desktop Dashboard when the user is logged out.
 * @returns Desktop Dashboard
 */
const Dashboard: React.FC<{ data: DashboardData }> = ({ data }) => {
  const [selectedResource, setSelectedResource] =
    React.useState<ResourceInfo | null>(null);

  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(
    window.localStorage.getItem(sidebarKey) === "true" ? true : false
  );
  return (
    <PageTemplate pageType={PageType.DASHBOARD}>
      <ContentBackground sidebarOpen={sidebarOpen}>
        <Content>
          <Heading>
            <TitleContainer>
              <Typography.RowHeading style={{ marginBottom: -20 }}>
                Welcome to
              </Typography.RowHeading>
              <Logogram src={logogram} width={300} height={130} hover={false} />
            </TitleContainer>
            <Typography.LargeParagraph id="description">
              Solomon is a convenient platform with resources on apologetics,
              theology, and Bible commentaries. We hope you can use this
              platform to discover new resources, engage with theologians, and
              dive deeper into your faith!
              <br />
              <br />
              Below, you will find curated introductory resources to apologetics
              and theology, but feel free to explore and find your own
              resources!
              <br />
              <br />
              If you wish for additional functionality (such as recommendations,
              favorites) be sure to create an account with us!
            </Typography.LargeParagraph>
          </Heading>
          <MainContent>
            {data.rows.map((row, i) => (
              <Row key={i}>
                <Typography.RowHeading>{row.name}</Typography.RowHeading>
                <CardRow id={row._id} columns={sidebarOpen ? 3 : 4}>
                  {row.content.slice(0, sidebarOpen ? 3 : 4).map(
                    (
                      item, // TODO: This needs to be more dynamic - only the cards can fit on the page should be displayed
                      j
                    ) => (
                      <ClassDemoCard
                        resource={item}
                        key={j}
                        setSelectedResource={setSelectedResource}
                      />
                    )
                  )}
                </CardRow>
              </Row>
            ))}
          </MainContent>
        </Content>
        <Sidebar
          contents={sidebarData}
          open={sidebarOpen}
          setOpen={setSidebarOpen}
        />
      </ContentBackground>
      {/*
      <BackgroundGradient
        src={backgroundGradient}
        alt="background-gradient"
        draggable="false"
      />
      */}
      <ResourceModal
        resource={selectedResource || dummyResource}
        setSelectedResource={setSelectedResource}
        visible={selectedResource !== null}
      />
    </PageTemplate>
  );
};

export default Dashboard;
