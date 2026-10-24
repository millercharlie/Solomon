import styled from "@emotion/styled";
import { type ColorTheme, type DataType, PageType } from "@libs/Types";
import { Title } from "@libs/Typography";
import PageTemplate from "@pages/PageTemplate";
import React from "react";
import AddResource from "@pages/AddData/AddResource";
import { ThemeContext } from "@libs/Context";
import { HorizontalRow } from "@components/HorizontalRow";
import AddPage from "@pages/AddData/AddPage";
import AddMiscLink from "@pages/AddData/AddMiscLink";

const Content = styled.div`
  text-align: center;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TabsContainer = styled.div`
  width: 70%;
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

const AddData: React.FC = () => {
  const { theme } = React.useContext(ThemeContext);
  const [dataType, setDataType] = React.useState<DataType>("resource");

  return (
    <PageTemplate pageType={PageType.add}>
      <Content>
        <Title style={{ marginTop: "30px", textAlign: "center" }}>
          Add Data
        </Title>
        <TabsContainer>
          <AllTabs>
            <Tab
              active={dataType === "resource"}
              onClick={() => setDataType("resource")}
              theme={theme}
            >
              Resource
            </Tab>
            <Tab
              active={dataType === "bible"}
              onClick={() => setDataType("bible")}
              theme={theme}
            >
              Bible Book
            </Tab>
            <Tab
              active={dataType === "topic" || dataType === "page"}
              onClick={() => setDataType("topic")}
              theme={theme}
            >
              Topic
            </Tab>
            <Tab
              active={dataType === "question"}
              onClick={() => setDataType("question")}
              theme={theme}
            >
              Question
            </Tab>
            <Tab
              active={dataType === "miscLink"}
              onClick={() => setDataType("miscLink")}
              theme={theme}
            >
              Miscellaneous Link
            </Tab>
          </AllTabs>
          <HorizontalRow color={theme.primaryRow} />
        </TabsContainer>
        {
          {
            resource: <AddResource />,
            bible: <AddPage type="bible" />,
            topic: <AddPage type="topic" />,
            question: <AddPage type="question" />,
            page: <AddPage type="page" />,
            miscLink: <AddMiscLink />,
          }[dataType]
        }
      </Content>
    </PageTemplate>
  );
};
export default AddData;
