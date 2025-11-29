import { loggedOutApologeticsData } from "@database/mockData";
import { AccountStatus, PageType, type PageData } from "@libs/Types";
import StandardPage from "@pages/StandardPage";
import React from "react";
import { useParams } from "react-router";

const Topic: React.FC<any> = () => {
  const params = useParams();

  const data: PageData = {
    title: "The Resurrection of Jesus",
    description:
      'Over 2,000 years ago, Jesus claimed to be the Messiah (Christ) of the world and the Son of God. There is a unanimous consensus among all scholars, Christian and not, that Jesus lived and claimed these titles.\n\nChristianity is unique among world religions in leveraging its founding basis entirely on a single historical event - the Resurrection of Jesus of Nazareth. Paul even writes in 1 Corinthians 14:15 that "if Christ has not been raised, our preaching is useless and so is [our] faith" \n\nBut, is this claim of the Resurrection true? Did Jesus really rise from the dead and conquer sin?',
    pageType: PageType.TOPIC,
    accountStatus: AccountStatus.GUEST,
    rows: [],
    sidebar: [],
    needsHelp: false,
  };

  // TODO: The "topicName" will extract the data from the database. For now, it just uses mock data
  React.useEffect(() => {
    console.log(params);
  }, [params]);

  return (
    <StandardPage
      data={{
        title: data.title,
        pageType: PageType.TOPIC,
        description: data.description,
        accountStatus: AccountStatus.GUEST,
        rows: loggedOutApologeticsData.rows, // TODO: This is very temporary
        sidebar: data.sidebar,
        needsHelp: data.needsHelp,
      }}
    />
  );
};

export default Topic;
