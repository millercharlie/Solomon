import { allTopicPages } from "@database/mockTopics";
import { AccountStatus, PageType } from "@libs/Types";
import StandardPage from "@pages/StandardPage";
import React from "react";
import { useParams } from "react-router";

/**
 * Single Topic Page
 * @returns {JSX.Element}
 */
const Topic: React.FC = () => {
  const params = useParams();

  const data = React.useMemo(() => {
    const topic = allTopicPages.find(
      (topic) => topic.solomonLink === `topics/${params.topicName}` // TODO: Likely switch this to just 'topic/...'
    );
    if (!topic) {
      throw new Error("Topic not found");
    }
    return topic;
  }, [params.topicName]);

  return (
    <StandardPage
      data={{
        _id: data._id,
        title: data.title,
        pageType: PageType.TOPIC,
        description: data.description,
        accountStatus: AccountStatus.GUEST,
        rows: data.rows,
        sidebar: data.sidebar,
        needsHelp: data.needsHelp,
      }}
    />
  );
};

export default Topic;
