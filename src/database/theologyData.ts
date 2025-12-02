import {
  csLewis,
  gavinOrtlund,
  martinLuther,
  ntWright,
  resurrectionOfJesus,
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
      _id: "christophanies",
      name: "Christophanies",
      shortDescription:
        "Studies manifestations of Jesus Christ in the Old Testament.",
      type: ResourceType.TOPIC,
      badges: [],
      links: [
        {
          platform: "YouTube",
          link: "https://youtu.be/1CDOSbzd6Uk?si=cEnf3tw5kNjIo4JZ",
          displayText: "Mike Winger \u2013 Examples of Christophanies",
          icon: "youtube.svg",
        },
        {
          platform: "Website",
          link: "https://www.gotquestions.org/theophany-Christophany.html",
          displayText: "GotQuestions.org \u2013 What is a Christophany?",
          icon: "question.svg",
        },
        {
          platform: "Question",
          link: "https://www.gotquestions.org/angel-of-the-Lord.html",
          displayText: 'GotQuestions.org \u2013 Who is the "angel of the LORD"',
          icon: "question.svg",
        },
      ],
    },
    {
      _id: "top_rated_theologians",
      name: "Top-Rated Theologians",
      type: ResourceType.TOPIC,
      badges: [],
      links: [
        {
          platform: "Scholar",
          link: "",
          displayText: "C.S. Lewis",
          icon: "scholar.svg",
        },
        {
          platform: "Person",
          link: "",
          displayText: "Augustine of Hippo",
          icon: "historical_figure.svg",
        },
        {
          platform: "Person",
          link: "",
          displayText: "Thomas Aquinas",
          icon: "historical_figure.svg",
        },
        {
          platform: "Scholar",
          link: "",
          displayText: "N.T. Wright",
          icon: "scholar.svg",
        },
        {
          platform: "Scholar",
          link: "",
          displayText: "N.T. Wright",
          icon: "scholar.svg",
        },
        {
          platform: "Person",
          link: "",
          displayText: "John Calvin",
          icon: "historical_figure.svg",
        },
      ],
    },
  ],
  type: RowType.LIST,
};

const row2: RowData = {
  _id: "theology_row1",
  name: "Introduction to Theology",
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

const row3: RowData = {
  _id: "theology_row3",
  name: "Theologians for Beginners",
  content: [martinLuther, ntWright, csLewis, gavinOrtlund],
  type: RowType.CARD,
};

export const theologyData: PageData = {
  _id: "theology_page",
  title: "Theology",
  pageType: PageType.THEOLOGY,
  accountStatus: AccountStatus.GUEST,
  description:
    'Theology is the study of aspects of Scripture and God. Theologians pour over original manuscripts of the Bible to determine the precise meaning of certain passages or phrases. Theologians ask questions such as "what is the nature of God?" and "was Noah\'s flood localized to the Middle East or globally?". Below, you will find some resources on certain topics, in addition to sections of the Bible.',
  rows: [row1, row2, row3],
  sidebar: [],
  needsHelp: true,
};
