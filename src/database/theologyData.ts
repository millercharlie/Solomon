import {
  csLewis,
  gavinOrtlund,
  ntWright,
  resurrectionOfJesus,
  williamLaneCraig,
} from "@database/mockData";
import { trinity } from "@database/mockTopics";
import {
  AccountStatus,
  Controls,
  PageType,
  ResourceType,
  RowType,
  type PageData,
  type RowData,
} from "@libs/Types";

const row1: RowData = {
  _id: "theology_row1",
  content: [
    trinity,
    resurrectionOfJesus,
    {
      _id: "garden_of_eden",
      name: "The Garden of Eden",
      image: "eden.png",
      type: ResourceType.TOPIC,
      shortDescription:
        "The Garden of Eden is found in Genesis, described as a perfect oasis where God and mankind were in perfect communion together. But, what was the nature of this garden? Where was it?",
      controls: [Controls.OPEN_PAGE],
      badges: ["topic", "question", "video"],
      links: [],
    },
    {
      _id: "creation",
      name: "The Creation",
      image: "creation.png",
      type: ResourceType.TOPIC,
      shortDescription:
        "\"And God said, 'let there be light. And there was light'\" - Genesis 1:1",
      controls: [Controls.OPEN_PAGE],
      badges: ["topic", "question", "video"],
      links: [],
    },
  ],
  type: RowType.CARD,
};

const row2: RowData = {
  _id: "theology_row2",
  content: [
    {
      _id: "trending_topics",
      name: "Trending Topics",
      type: ResourceType.QUESTION,
      badges: [],
      links: [
        {
          platform: "Solomon",
          link: "",
          tooltip:
            "Discusses whether the flood mentioned in Genesis literally covered the globe or was localized to the Middle-East",
          displayText: "Noah's Flood: Global or Local?",
          icon: "solomon.svg",
        },
        {
          displayText: "Young Earth v. Old Earth Creationism",
          platform: "Solomon",
          link: "",
          tooltip:
            "How long did it take God to create the Heavens and the Earth?",
          icon: "solomon.svg",
        },
        {
          displayText: "The Garden of Eden",
          platform: "YouTube",
          link: "",
          tooltip:
            "Discusses the Biblical account of the Garden of Eden found in Genesis",
          icon: "youtube.svg",
        },
        {
          displayText: "The Prophecies of Isaiah",
          platform: "Solomon",
          link: "",
          tooltip:
            "The Book of Isaiah was written centuries before the birth of Jesus Christ, yet it contains many fulfilled prophecies",
          icon: "solomon.svg",
        },
        {
          displayText: "Luke the Evangelist",
          platform: "Solomon",
          link: "",
          tooltip:
            "Discusses Luke the Evangelist, who wrote the Gospel According to Luke as well as the Acts of the Apostles",
          icon: "solomon.svg",
        },
      ],
    },
    {
      _id: "beginners",
      name: "Theologians for Beginners",
      type: ResourceType.QUESTION,
      badges: [],
      links: [
        {
          platform: "Solomon",
          link: "",
          tooltip:
            "Discusses whether the flood mentioned in Genesis literally covered the globe or was localized to the Middle-East",
          displayText: "Noah's Flood: Global or Local?",
          icon: "solomon.svg",
        },
        {
          displayText: "Young Earth v. Old Earth Creationism",
          platform: "Solomon",
          link: "",
          tooltip:
            "How long did it take God to create the Heavens and the Earth?",
          icon: "solomon.svg",
        },
        {
          displayText: "The Garden of Eden",
          platform: "YouTube",
          link: "",
          tooltip:
            "Discusses the Biblical account of the Garden of Eden found in Genesis",
          icon: "youtube.svg",
        },
      ],
    },
    {
      _id: "trending_topics",
      name: "Trending Topics",
      type: ResourceType.QUESTION,
      badges: [],
      links: [
        {
          platform: "Solomon",
          link: "",
          tooltip:
            "Discusses whether the flood mentioned in Genesis literally covered the globe or was localized to the Middle-East",
          displayText: "Noah's Flood: Global or Local?",
          icon: "solomon.svg",
        },
        {
          displayText: "Young Earth v. Old Earth Creationism",
          platform: "Solomon",
          link: "",
          tooltip:
            "How long did it take God to create the Heavens and the Earth?",
          icon: "solomon.svg",
        },
        {
          displayText: "The Garden of Eden",
          platform: "YouTube",
          link: "",
          tooltip:
            "Discusses the Biblical account of the Garden of Eden found in Genesis",
          icon: "youtube.svg",
        },
        {
          displayText: "The Prophecies of Isaiah",
          platform: "Solomon",
          link: "",
          tooltip:
            "The Book of Isaiah was written centuries before the birth of Jesus Christ, yet it contains many fulfilled prophecies",
          icon: "solomon.svg",
        },
        {
          displayText: "Luke the Evangelist",
          platform: "Solomon",
          link: "",
          tooltip:
            "Discusses Luke the Evangelist, who wrote the Gospel According to Luke as well as the Acts of the Apostles",
          icon: "solomon.svg",
        },
      ],
    },
    {
      _id: "trending_topics",
      name: "Trending Topics",
      type: ResourceType.QUESTION,
      badges: [],
      links: [
        {
          platform: "Solomon",
          link: "",
          tooltip:
            "Discusses whether the flood mentioned in Genesis literally covered the globe or was localized to the Middle-East",
          displayText: "Noah's Flood: Global or Local?",
          icon: "solomon.svg",
        },
        {
          displayText: "Young Earth v. Old Earth Creationism",
          platform: "Solomon",
          link: "",
          tooltip:
            "How long did it take God to create the Heavens and the Earth?",
          icon: "solomon.svg",
        },
        {
          displayText: "The Garden of Eden",
          platform: "YouTube",
          link: "",
          tooltip:
            "Discusses the Biblical account of the Garden of Eden found in Genesis",
          icon: "youtube.svg",
        },
        {
          displayText: "The Prophecies of Isaiah",
          platform: "Solomon",
          link: "",
          tooltip:
            "The Book of Isaiah was written centuries before the birth of Jesus Christ, yet it contains many fulfilled prophecies",
          icon: "solomon.svg",
        },
        {
          displayText: "Luke the Evangelist",
          platform: "Solomon",
          link: "",
          tooltip:
            "Discusses Luke the Evangelist, who wrote the Gospel According to Luke as well as the Acts of the Apostles",
          icon: "solomon.svg",
        },
      ],
    },
  ],
  type: RowType.LIST,
};

const row3: RowData = {
  _id: "theology_row3",
  name: "Theologians for Beginners",
  content: [williamLaneCraig, ntWright, csLewis, gavinOrtlund],
  type: RowType.CARD,
};

export const theologyData: PageData = {
  _id: "theology_page",
  title: "Theology",
  pageType: PageType.THEOLOGY,
  accountStatus: AccountStatus.GUEST,
  description:
    'Theology is the study of aspects of Scripture and God. Theologians pour over original manuscripts of the Bible to determine the precise meaning of certain passages or phrases. Theologians ask questions such as "what is the nature of God?" and "was Noah\'s flood localized to the Middle East or globally?". Below, you will find some resources on certain topics, in addition to sections of the Bible.',
  rows: [row2, row1, row3],
  sidebar: [],
  needsHelp: true,
};
