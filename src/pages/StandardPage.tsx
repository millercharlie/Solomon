import styled from "@emotion/styled";
import * as Typography from "@libs/Typography";

import { RowType, type PageData, type ResourceInfo } from "@libs/Types";
import React from "react";
import ResourceModal from "@components/modals/ResourceModal";
import { breakpoints, dummyResource } from "@libs/globals";
import Link from "@components/Link";
import Sidebar from "@components/Sidebar";
import PageTemplate from "@pages/PageTemplate";
import {
  AnimationContext,
  SidebarContext,
  sidebarKey,
  ThemeContext,
} from "@libs/Context";
import Carousel from "@components/Carousel";
import useIsMobile from "@hooks/useIsMobile";

const ContentBackground = styled.div<{ sidebarOpen: boolean }>`
  margin-top: 30px;
  padding-left: 45px;
  padding-right: 45px;
  display: flex;
  min-height: 100vh;
  gap: 20px;
  z-index: 1;
`;
const Heading = styled.div`
  width: 100%;
`;

const Content = styled.div<{ isMobile: boolean }>`
  width: ${({ isMobile }) => (isMobile ? "100%" : `calc(100% - 90px)`)};
  min-width: 0;
`;
const MainContent = styled.div`
  margin-top: 30px;
`;
const Row = styled.div`
  margin-bottom: 30px;
`;

const ListRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: ${breakpoints.md}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${breakpoints.sm}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

/**
 * Desktop Dashboard when the user is logged out.
 * @returns Desktop Dashboard
 */
const StandardPage: React.FC<{ data: PageData }> = ({ data }) => {
  const [selectedResource, setSelectedResource] =
    React.useState<ResourceInfo | null>(null);

  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(
    window.localStorage.getItem(sidebarKey) === "true" && !isMobile
      ? true
      : false,
  );
  const { theme } = React.useContext(ThemeContext);
  const { doAnim } = React.useContext(AnimationContext);

  React.useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    }
    if (!data.sidebarItems || data.sidebarItems.length === 0) {
      setSidebarOpen(false);
    }
  }, [data.sidebarItems, isMobile]);

  return (
    <SidebarContext.Provider
      value={{ open: sidebarOpen, setOpen: setSidebarOpen }}
    >
      <PageTemplate pageType={data.pageType} color={data.color}>
        <ContentBackground sidebarOpen={sidebarOpen}>
          <Content isMobile={isMobile}>
            <Heading>
              {doAnim && (
                <Typography.Title>
                  {data.longTitle ?? data.title}
                </Typography.Title>
              )}
              {data.longDesc && (
                <Typography.LargeParagraph style={{ textWrap: "wrap" }}>
                  {data.longDesc}
                </Typography.LargeParagraph>
              )}
            </Heading>
            <MainContent>
              {data.rows.map((row, i) => (
                <Row key={i}>
                  {row.type === RowType.card ? (
                    <>
                      <Typography.RowHeading>{row.title}</Typography.RowHeading>
                      <Carousel
                        row={row}
                        setSelectedResource={setSelectedResource}
                        theme={theme}
                      />
                    </>
                  ) : (
                    <ListRow id={row._id}>
                      {row.content.map((item) => {
                        return (
                          <div id="all-links">
                            <Typography.RowHeading style={{ marginBottom: 0 }}>
                              {item.name}
                            </Typography.RowHeading>
                            <Typography.Paragraph
                              style={{
                                marginTop: 5,
                                marginBottom: 10,
                                lineHeight: "115%",
                                fontStyle: "italic",
                              }}
                            >
                              {item.shortDesc}
                            </Typography.Paragraph>
                            {item.links.map((item) => (
                              <Link item={item} />
                            ))}
                          </div>
                        );
                      })}
                    </ListRow>
                  )}
                </Row>
              ))}
            </MainContent>
          </Content>
          {data.sidebarItems && data.sidebarItems.length > 0 && !isMobile && (
            <Sidebar
              contents={data.sidebarItems}
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
