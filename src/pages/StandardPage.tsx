import styled from "@emotion/styled";
import * as Typography from "@libs/Typography";

import { ClassDemoCard } from "@components/Cards";
import {
  RowType,
  type ColorTheme,
  type PageData,
  type ResourceInfo,
} from "@libs/Types";
import * as theme from "@libs/globals";
import React from "react";
import ResourceModal from "@components/modals/ResourceModal";
import { dummyResource } from "@libs/globals";
import Link from "@components/Link";
import Button from "@components/Button";
import Sidebar from "@components/Sidebar";
import PageTemplate from "@pages/PageTemplate";
import { SidebarContext, sidebarKey, ThemeContext } from "@libs/Context";

const ContentBackground = styled.div<{ sidebarOpen: boolean }>`
  margin-top: 30px;
  padding-left: 45px;
  padding-right: 45px;
  display: grid;
  min-height: 100vh;
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
    // TODO: This should be centered
  }
`;

const HelpButton = styled(Button)`
  position: absolute;
  bottom: 30px;
  right: 30px;
`;
const Anchor = styled.a<{ theme: ColorTheme }>`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  transition: all 0.2s;
  :hover {
    text-decoration: underline;
  }
`;

// TODO: Background Gradient should NOT be an SVG - it should be dynamically calculated

/**
 * Desktop Dashboard when the user is logged out.
 * @returns Desktop Dashboard
 */
const StandardPage: React.FC<{ data: PageData }> = ({ data }) => {
  const [selectedResource, setSelectedResource] =
    React.useState<ResourceInfo | null>(null);
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(
    window.localStorage.getItem(sidebarKey) === "true" ? true : false
  );

  const { theme } = React.useContext(ThemeContext);

  return (
    <SidebarContext.Provider
      value={{ open: sidebarOpen, setOpen: setSidebarOpen }}
    >
      <PageTemplate pageType={data.pageType}>
        <ContentBackground sidebarOpen={sidebarOpen}>
          <Content>
            <Heading>
              <Typography.Title>{data.title}</Typography.Title>
              {data.description && (
                <Typography.LargeParagraph>
                  {data.description}
                </Typography.LargeParagraph>
              )}
            </Heading>
            <MainContent>
              {data.rows.map((row, i) => (
                <Row key={i}>
                  <Typography.RowHeading>{row.name}</Typography.RowHeading>
                  {row.type === RowType.CARD ? (
                    <CardRow id={row._id} columns={sidebarOpen ? 3 : 4}>
                      {row.content.map(
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
                  ) : (
                    <CardRow id={row._id} columns={sidebarOpen ? 3 : 4}>
                      {row.content.map((item) => (
                        <div id="all-links">
                          <Anchor href={item.solomonLink} theme={theme}>
                            <Typography.RowHeading style={{ marginBottom: 0 }}>
                              {item.name}
                            </Typography.RowHeading>
                          </Anchor>
                          <Typography.Paragraph style={{ marginTop: 10 }}>
                            {item.shortDescription}
                          </Typography.Paragraph>
                          {item.links!.map((item) => (
                            <Link item={item} />
                          ))}
                        </div>
                      ))}
                    </CardRow>
                  )}
                </Row>
              ))}
            </MainContent>
          </Content>
          {data.sidebar && data.sidebar.length > 0 && (
            <Sidebar
              contents={data.sidebar}
              open={sidebarOpen}
              setOpen={setSidebarOpen}
            />
          )}
        </ContentBackground>
        {/* {data.needsHelp && <HelpButton text="Need Help?" theme={theme} />} */}
        <ResourceModal
          resource={selectedResource || dummyResource} // TODO: This dummy resource is fine for now, but is a bit jank
          setSelectedResource={setSelectedResource}
          visible={selectedResource !== null}
        />
      </PageTemplate>
    </SidebarContext.Provider>
  );
};

export default StandardPage;
