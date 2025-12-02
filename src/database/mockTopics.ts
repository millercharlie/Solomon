import {
  AccountStatus,
  Controls,
  PageType,
  ResourceType,
  RowType,
  type PageData,
  type ResourceInfo,
  type RowData,
} from "@libs/Types";

export const trinity: ResourceInfo = {
  _id: "trinity",
  name: "The Trinity",
  solomonLink: "topics/trinity",
  image: "trinity.png",
  type: ResourceType.TOPIC,
  shortDescription:
    "Discusses the true nature of God, in the form of three co-equal persons in the Trinity",
  longDescription:
    "The Trinity is the true God in the form of three, co-equal persons: the Father, the Son, and the Holy Spirit. It cannot be explained by human metaphors or worldly aspects, and each person of the Trinity is eternal, 100% God, and have different functions in the Bible. But, what exactly is the Trinity? Is it possible to wrap our heads around the nature of God?",
  controls: [Controls.OPEN_PAGE],
  badges: [
    "topic",
    "video",
    "scholarly_article",
    "article",
    "book",
    "theology",
  ],
  links: [
    {
      platform: "YouTube",
      link: "https://youtube.com/playlist?list=PL1mr9ZTZb3TUDsgjzdyFz8f38YxV3QdX0&si=Cu7ZH5MqbqOr2LbV",
      displayText: "InspiringPhilosophy - The Reliability of the Gospels",
      icon: "playlist.svg",
    },
  ],
};

const trinityRow1: RowData = {
  _id: "trinity_row_1",
  type: RowType.LIST,
  content: [
    {
      _id: "father",
      name: "God the Father",
      type: ResourceType.TOPIC,
      badges: [],
      links: [
        {
          platform: "YouTube",
          link: "youtube/",
          displayText: "God in the Old Testament",
        },
        {
          platform: "Article",
          link: "youtube/",
          displayText: "Who is God the Father?",
        },
      ],
    },
    {
      _id: "son",
      name: "God the Son",
      type: ResourceType.TOPIC,
      badges: [],
      links: [
        {
          platform: "Solomon",
          link: "",
          displayText: "TOPIC - Jesus Christ",
        },
        {
          platform: "Article",
          link: "youtube/",
          displayText: "Who is God the Son?",
        },
        {
          platform: "Solomon",
          link: "",
          displayText: "TOPIC - Christophonies",
        },
      ],
    },
    {
      _id: "holy_spirit",
      name: "God the Holy Spirit",
      type: ResourceType.TOPIC,
      badges: [],
      links: [
        {
          platform: "Solomon",
          link: "",
          displayText: "TOPIC - The Holy Spirit",
        },
        {
          platform: "Article",
          link: "youtube/",
          displayText: "Who is God the Holy Spirit?",
        },
        {
          platform: "Website",
          link: "acts",
          displayText: "Acts of the Apostles Commentary",
        },
      ],
    },
  ],
};

const resurrectionRow1: RowData = {
  _id: "resurrection_row_1",
  type: RowType.LIST,
  content: [
    {
      _id: "evidence",
      name: "Evidence for the Resurrection",
      type: ResourceType.TOPIC,
      badges: [],
      links: [
        {
          platform: "YouTube",
          link: "youtube/",
          displayText:
            "InspiringPhilosophy \u2013 Did Jesus rise from the Dead?",
        },
        {
          platform: "Article",
          link: "",
          displayText: "Evidence for the Resurrection",
        },
      ],
    },
    {
      _id: "significance",
      name: "Significance of the Resurrection",
      type: ResourceType.TOPIC,
      badges: [],
      links: [
        {
          platform: "Solomon",
          link: "",
          displayText:
            "Gavin Ortlund \u2013 Which Atonement Theory is Correct?",
        },
      ],
    },
    {
      _id: "prophecy",
      name: "The Resurrection Prophecied",
      type: ResourceType.TOPIC,
      badges: [],
      links: [
        {
          platform: "Solomon",
          link: "",
          displayText: "The Prophecies of Isaiah",
        },
        {
          platform: "Solomon",
          link: "",
          displayText: "The Prophecies of David",
        },
      ],
    },
    {
      _id: "prove",
      name: "What Actually Happened?",
      type: ResourceType.TOPIC,
      badges: [],
      links: [
        {
          platform: "YouTube",
          link: "",
          displayText: "How did Jesus die?",
        },
      ],
    },
  ],
};

const trinityPage: PageData = {
  _id: "trinity_page",
  title: "The Trinity",
  solomonLink: "topics/trinity",
  description:
    "The Trinity is the true God in the form of three, co-equal persons: the Father, the Son, and the Holy Spirit. It cannot be explained by human metaphors or worldly aspects, and each person of the Trinity is eternal, 100% God, and have different functions in the Bible. But, what exactly is the Trinity? Is it possible to wrap our heads around the nature of God?",
  pageType: PageType.TOPIC,
  accountStatus: AccountStatus.GUEST,
  rows: [trinityRow1],
  sidebar: [],
  needsHelp: false,
};
const resurrectionPage: PageData = {
  _id: "resurrection_page",
  title: "The Resurrection of Jesus Christ",
  solomonLink: "topics/resurrection",
  description:
    "Jesus of Nazareth is the most important figure in human history. He claimed to be the unique Son of God and the Messiah of the world. The Bible records accounts of his triumphant resurrection. But can a man really rise from the dead? Are the claims about Jesus's resurrection true?",
  pageType: PageType.TOPIC,
  accountStatus: AccountStatus.GUEST,
  rows: [resurrectionRow1],
  sidebar: [],
  needsHelp: false,
};

// TODO: This is also extremely temporary
export const allTopicPages: PageData[] = [trinityPage, resurrectionPage];
