import { trinity } from "@database/mockTopics";
import {
  AccountStatus,
  Controls,
  PageType,
  ResourceType,
  RowType,
  type DashboardData,
  type PageData,
  type ResourceInfo,
  type RowData,
  type SidebarLink,
} from "@libs/Types";

export const resurrectionOfJesus: ResourceInfo = {
  _id: "jesus_resurrection",
  name: "The Resurrection of Jesus",
  image: "resurrection.png",
  type: ResourceType.TOPIC,
  shortDescription: "Did Jesus really rise from the dead?",
  favorite: true,
  solomonLink: "topics/resurrection",
  controls: [Controls.OPEN_PAGE],
  badges: [
    "topic",
    "question",
    "video",
    "website",
    "scholarly_article",
    "article",
    "documentary",
    "book",
    "apologetics",
    "theology",
  ],
  mediaType: [],
  links: [],
};

export const sidebarData: SidebarLink[] = [
  {
    title: "Trending Topics",
    icon: "fire.svg",
    items: [
      {
        link: "https://youtu.be/8AoLYeFi2ms?si=Kl8RD2TAj-jeF11h",
        displayText: "Young Earth v. Old Earth Creationism",
        platform: "YouTube",
      },
      {
        link: "",
        displayText: "Did Jesus claim to be God in Mark 2?",
        platform: "YouTube",
      },
      {
        link: "",
        displayText: "Noah's Flood: Local or Global?",
        platform: "YouTube",
      },
      {
        link: "",
        displayText: "The Messianic Prophecies of Isaiah",
        platform: "Scholarly Article",
      },
      {
        link: "",
        displayText: "Where was the Garden of Eden?",
        platform: "YouTube",
      },
    ],
  },
  {
    title: "Recently Added",
    icon: "recent_clock.svg",
    items: [
      {
        link: "https://www.gotquestions.org/",
        displayText: "gotquestions.org",
        platform: "Ministry",
      },
      {
        link: "https://biblethinker.org/",
        displayText: "BibleThinker \u2013 Mike Winger",
        platform: "Ministry",
      },
      {
        link: "",
        displayText: "The Case for Christ \u2013 Lee Strobel",
        platform: "Book",
      },
    ],
  },
  {
    title: "Verse of the Day", // TODO: Add indicator for Bible version
    icon: "open_book.svg",
    items: [
      {
        link: "",
        displayText:
          "“Do not be overcome by evil, but overcome evil with good” \u2013 Romans 12:21",
        platform: "",
      },
    ],
  },
  {
    title: "Top-Rated Sources", // TODO: Should the link only appear for external sources?
    icon: "star.svg",
    items: [
      {
        link: "https://biblethinker.org/",
        displayText: "BibleThinker \u2013 Mike Winger",
        platform: "Ministry",
      },
      {
        link: "https://www.inspiringphilosophy.com/",
        displayText: "InspiringPhilosophy \u2013 Michael Jones",
        platform: "Ministry",
      },
      {
        link: "https://truthunites.org/",
        displayText: "Truth Unites \u2013 Gavin Ortlund",
        platform: "Ministry",
      },
      {
        link: "https://www.cslewis.com/us/",
        displayText: "C.S. Lewis",
        platform: "Scholar",
      },
      {
        link: "https://www.voddiebaucham.org/",
        displayText: "VBM \u2013 Voddie Baucham",
        platform: "Ministry",
      },
    ],
  },
  {
    title: "Commentary Starting Verses",
    icon: "message.svg",
    items: [
      {
        link: "",
        displayText: "John 3:16",
        platform: "Commentary",
      },
      {
        link: "",
        displayText: "Acts of the Apostles 2",
        platform: "Commentary",
      },
      {
        link: "https://truthunites.org/",
        displayText: "Revelation 7:1-9",
        platform: "Commentary",
      },
    ],
  },
  {
    title: "By Church",
    icon: "church.svg",
    items: [
      {
        link: "",
        displayText: "Baptist",
        platform: "",
      },
      {
        link: "",
        displayText: "Presbyterian",
        platform: "",
      },
      {
        link: "",
        displayText: "Methodist/Wesleyan",
        platform: "",
      },
      {
        link: "",
        displayText: "Non-Denominational",
        platform: "",
      },
      {
        link: "",
        displayText: "Roman Catholic",
        platform: "",
      },
      {
        link: "",
        displayText: "Eastern Orthodox",
        platform: "",
      },
      {
        link: "",
        displayText: "Anabaptist",
        platform: "",
      },
      {
        link: "",
        displayText: "Anglican",
        platform: "",
      },
    ],
  },
];

export const apologeticsSidebar: SidebarLink[] = [
  {
    title: "Trending Topics",
    icon: "fire.svg",
    items: [
      {
        link: "",
        displayText: "The Existence of God",
        platform: "Topic",
      },
      {
        link: "",
        displayText: "The Prophecies of Daniel",
        platform: "Topic",
      },
      {
        link: "",
        displayText: "The Reliability of the Synoptic Gospels",
        platform: "Topic",
      },
    ],
  },
  {
    title: "Recently Added",
    icon: "recent_clock.svg",
    items: [
      {
        link: "",
        displayText: "Does the Bible have 40,000 Contradictions?",
        platform: "YouTube",
      },
      {
        link: "",
        displayText: "Adam and Eve",
        platform: "Topic",
      },
      {
        link: "",
        displayText: "Jesus v. Horus",
        platform: "YouTube",
      },
    ],
  },
  {
    title: "Verse of the Day", // TODO: Add indicator for Bible version
    icon: "open_book.svg",
    items: [
      {
        link: "",
        displayText:
          "“Do not be overcome by evil, but overcome evil with good” \u2013 Romans 12:21",
        platform: "",
      },
    ],
  },
  {
    title: "Favorites",
    icon: "topic.svg",
    items: [
      {
        link: "",
        displayText: "The Resurrection of Christ",
        platform: "Topic",
      },
      {
        link: "",
        displayText: "Who was Luke the Evangelist?",
        platform: "Topic",
      },
      {
        link: "",
        displayText: "Who was Paul the Apostle?",
        platform: "Topic",
      },
    ],
  },
  {
    title: "By Church",
    icon: "church.svg",
    items: [
      {
        link: "",
        displayText: "Baptist",
        platform: "",
      },
      {
        link: "",
        displayText: "Presbyterian",
        platform: "",
      },
      {
        link: "",
        displayText: "Methodist/Wesleyan",
        platform: "",
      },
      {
        link: "",
        displayText: "Non-Denominational",
        platform: "",
      },
      {
        link: "",
        displayText: "Roman Catholic",
        platform: "",
      },
      {
        link: "",
        displayText: "Eastern Orthodox",
        platform: "",
      },
      {
        link: "",
        displayText: "Anabaptist",
        platform: "",
      },
      {
        link: "",
        displayText: "Anglican",
        platform: "",
      },
    ],
  },
];

export const gotQuestions: ResourceInfo = {
  _id: "got_questions",
  name: "GotQuestions.org",
  image: "got_questions.png",
  mainLink: "https://www.gotquestions.org",
  type: ResourceType.MINISTRY,
  shortDescription: "Website housing Bible commentaries and explainers.",
  controls: [Controls.EXTERNAL_LINK],
  badges: ["website", "theology", "commentary"],
};
export const williamLaneCraig: ResourceInfo = {
  _id: "william_lane_craig",
  name: "William Lane Craig",
  image: "william_lane_craig.png",
  type: ResourceType.SCHOLAR,
  shortDescription:
    "Reformed Theologian focusing on apologetics, debates, and more",
  controls: [Controls.FULLSCREEN],
  badges: ["video", "website", "apologetics", "theology"],
  mediaType: [],
  links: [],
};
export const ntWright: ResourceInfo = {
  _id: "nt_wright",
  name: "N.T. Wright",
  image: "nt_wright.png",
  type: ResourceType.SCHOLAR,
  shortDescription: "[BIO HERE]",
  controls: [Controls.FULLSCREEN],
  badges: ["website", "book", "apologetics", "theology"],
  links: [],
};
export const csLewis: ResourceInfo = {
  _id: "cs_lewis",
  name: "C.S. Lewis",
  image: "cs_lewis.png",
  type: ResourceType.SCHOLAR,
  shortDescription: "[BIO HERE]",
  controls: [Controls.FULLSCREEN],
  badges: ["website", "debate", "book", "apologetics", "theology"],
  links: [],
};
export const gavinOrtlund: ResourceInfo = {
  _id: "gavin_ortlund",
  name: "Truth Unites with Gavin Ortlund",
  image: "truth_unites.png",
  type: ResourceType.CREATOR,
  shortDescription:
    "\u201CPromoting Gospel Assurance Through Theological Depth\u201D",
  longDescription:
    "Gavin Ortlund (PhD, Fuller Theological Seminary) is President of Truth Unites, Visiting Professor of Historical Theology at Phoenix Seminary, and Theologian-in-Residence at Immanuel Nashville. He is also an Evangelical theologian and content creator focusing on Christian doctrine, with a particular emphasis on the historical church.\n\nHis content includes refuting particular doctrines, such as the Papacy, responding to other theologions such as C.S. Lewis and Trent Horn, and defending Evangelical and Protestant beliefs, such as Sola Scriptura. All of his content is available for free on YouTube and other podcast sites, and he also sells books online",
  favorite: true,
  controls: [Controls.FULLSCREEN, Controls.DROPDOWN],
  recentContent: [
    {
      _id: "go_v1",
      title: "Did Jesus Descend into Hell?",
      description:
        "In this video, Gavin Ortlund and William Lane Craig discuss their differing views of the eucharist.",
      thumbnail: "go_v1.png",
      badges: ["question"],
      link: "",
    },
    {
      _id: "go_v2",
      title: "Should Christians use Profanity?",
      description:
        'In this video, Gavin Ortlund explores what it means that Jesus "descended to hell".',
      thumbnail: "go_v2.png",
      badges: ["question"],
      link: "",
    },
    {
      _id: "go_v3",
      title: "Craig and Ortlund Clash on the Eucharist",
      description:
        "In this video, Gavin Ortlund and William Lane Craig discuss their differing views of the eucharist.",
      thumbnail: "go_v3.png",
      badges: ["theology"],
      link: "",
    },
  ],
  recommendedContent: [
    {
      _id: "go_v2",
      title: "Should Christians use Profanity?",
      description:
        "In this video, Gavin Ortlund and Joe Rigney discuss whether Christians should use profanity.",
      thumbnail: "go_v2.png",
      badges: ["question"],
      link: "",
    },
    {
      _id: "go_v1",
      title: "Did Jesus Descend into Hell?",
      description:
        'In this video, Gavin Ortlund explores what it means that Jesus "descended to hell".',
      thumbnail: "go_v1.png",
      badges: ["question"],
      link: "",
    },
    {
      _id: "go_v3",
      title: "Craig and Ortlund Clash on the Eucharist",
      description:
        "In this video, Gavin Ortlund and Joe Rigney discuss whether Christians should use profanity.",
      thumbnail: "go_v3.png",
      badges: ["theology"],
      link: "",
    },
  ],
  badges: ["video", "podcast", "website", "apologetics", "theology"],
  mediaType: [],
  links: [
    {
      platform: "YouTube",
      link: "https://www.youtube.com/@TruthUnites",
      displayText: "youtube/truthunites",
      icon: "youtube.svg",
      priority: true,
    },
    {
      platform: "Personal Website",
      link: "https://truthunites.org",
      icon: "website.svg",
      displayText: "truthunites.org",
    },
    {
      platform: "X",
      link: "twitter.com/gavinortlund",
      icon: "x.svg",
      displayText: "x/gavinortlund",
    },
    {
      platform: "Instagram",
      link: "instagram.com/truth.unites",
      icon: "instagram.svg",
      displayText: "instagram/truth.unites",
    },
    {
      platform: "Books",
      link: "truthunites.org/mypublications",
      icon: "closed_book.svg",
      displayText: "truthunites.org/mypublications",
    },
    {
      platform: "Spotify",
      link: "",
      icon: "spotify.svg",
      displayText: "spotify/truth-unites",
    },
    {
      platform: "Apple Podcasts",
      link: "",
      icon: "applepodcasts.svg",
      displayText: "apple-podcasts/truth-unites",
    },
    {
      platform: "Patreon",
      link: "",
      icon: "patreon.svg",
      displayText: "patreon/truthunites",
    },
    {
      platform: "Donate",
      link: "",
      icon: "youtube.svg",
      displayText: "donations",
    },
    {
      platform: "Facebook",
      link: "facebook.com/TruthUnitesPage",
      icon: "facebook.svg",
      displayText: "facebook/TruthUnitesPage",
    },
  ],
};

/**
 * Mock data to be used on the dashboard for a single row of cards.
 */
const dashboardRowData1: RowData = {
  _id: "apologetics_beginners",
  name: "Apologetics for Beginners",
  content: [
    williamLaneCraig,
    {
      _id: "mike_winger",
      name: "Mike Winger",
      image: "bible_thinker.png",
      type: ResourceType.CREATOR,
      shortDescription: '"Think Biblically About Everything"',
      favorite: false,
      controls: [Controls.FULLSCREEN],
      badges: ["video", "podcast", "apologetics", "theology"],
      mediaType: [],
      links: [],
    },
    resurrectionOfJesus,
    {
      _id: "inspiring_philosophy",
      name: "Michael Jones",
      image: "inspiring_philosophy.png",
      type: ResourceType.CREATOR,
      shortDescription: '"Helping You Grow Your Faith"',
      favorite: false,
      controls: [Controls.FULLSCREEN, Controls.DROPDOWN],
      badges: ["video", "podcast", "apologetics", "theology"],
      links: [],
    },
  ],
  type: RowType.CARD,
};
const dashboardRowData2: RowData = {
  _id: "theology_intro",
  name: "Introduction to Theology",
  content: [
    gavinOrtlund,
    {
      _id: "john_lennox",
      name: "John Lennox",
      image: "john_lennox.png",
      type: ResourceType.SCHOLAR,
      shortDescription:
        "Northern Irish theologian known for his public debates with Atheists",
      favorite: false,
      controls: [Controls.FULLSCREEN, Controls.DROPDOWN],
      badges: ["video", "book", "theology", "apologetics"],
      mediaType: [],
      links: [],
    },
    trinity,
  ],
  type: RowType.CARD,
};
const dashboardRowData3: RowData = {
  _id: "topics_new_believers",
  name: "Topics for New Believers",
  content: [
    resurrectionOfJesus,
    {
      _id: "gospels_reliability",
      name: "The Reliability of the Gospels",
      image: "gospels.png",
      type: ResourceType.TOPIC,
      shortDescription:
        "Discusses the reliability of the Gospel accounts according to Matthew, Mark, Luke, and John",
      favorite: false,
      controls: [Controls.OPEN_PAGE],
      badges: ["topic", "video", "scholarly_article", "book", "apologetics"],
      mediaType: [],
      links: [],
    },
    {
      _id: "old_testament_explained",
      name: "The Old Testament: Explained",
      image: "ot.png",
      type: ResourceType.TOPIC,
      shortDescription:
        "A high-level overview of the Old Testament, beginning with Genesis",
      favorite: false,
      controls: [Controls.OPEN_PAGE],
      badges: ["topic", "video", "book", "commentary"],
      mediaType: [],
      links: [],
    },
  ],
  type: RowType.CARD,
};
const dashboardRowData4: RowData = {
  _id: "bible_commentary",
  name: "High-Level Bible Commentary",
  content: [
    gotQuestions,
    {
      _id: "got_uq",
      name: "Mike Winger",
      image: "bible_thinker.png",
      type: ResourceType.CREATOR,
      shortDescription: '"Think Biblically About Everything"',
      favorite: false,
      controls: [Controls.FULLSCREEN],
      badges: ["video", "podcast", "apologetics", "theology"],
      mediaType: [],
      links: [],
    },
    resurrectionOfJesus,
    {
      _id: "inspiring_philosophy",
      name: "Michael Jones",
      image: "inspiring_philosophy.png",
      type: ResourceType.CREATOR,
      shortDescription: '"Helping You Grow Your Faith"',
      favorite: false,
      controls: [Controls.FULLSCREEN, Controls.DROPDOWN],
      badges: ["video", "podcast", "apologetics", "theology"],
      links: [],
    },
  ],
  type: RowType.CARD,
};

const apologeticsRowData1: RowData = {
  _id: "apologetics_row1",
  content: [
    {
      _id: "God_existence",
      name: "The Existence of God",
      type: ResourceType.TOPIC,
      shortDescription: "Arguments to support the existence of God",
      badges: [],
      solomonLink: "topics/existence_of_god",
      mediaType: [],
      links: [
        {
          platform: "YouTube",
          link: "",
          displayText: "The Fine-Tuning of the Universe",
          icon: "youtube.svg",
        },
        {
          platform: "YouTube",
          link: "",
          displayText: "Why does anything exist?",
          icon: "youtube.svg",
        },
        {
          platform: "YouTube",
          link: "",
          displayText: "What caused the Universe?",
          icon: "youtube.svg",
        },
        {
          platform: "YouTube",
          link: "",
          displayText: "What gives us morality?",
          icon: "youtube.svg",
        },
      ],
    },
    {
      _id: "Jesus_of_nazareth",
      name: "Jesus of Nazereth",
      type: ResourceType.TOPIC,
      shortDescription: "Is Jesus who He claimed to be?",
      favorite: false,
      badges: [],
      mediaType: [],
      links: [
        {
          platform: "Solomon",
          link: "www.wisdomofsolomon.org/topics/resurrection",
          displayText: "The Resurrection",
          icon: "topic.svg",
        },
        {
          platform: "Solomon",
          link: "",
          displayText: "Is Jesus God?",
          icon: "youtube.svg",
        },
        {
          platform: "Solomon",
          link: "",
          displayText: "Is Jesus the Messiah?",
          icon: "topic.svg",
        },
        {
          platform: "YouTube",
          link: "https://youtu.be/HCstm5DYnb4?si=qC3SGh8h68DI_XVd",
          displayText: "Jesus in The Revelation",
          icon: "youtube.svg",
        },
      ],
    },
    {
      _id: "browse_by_topic",
      name: "Browse by Topic",
      type: ResourceType.TOPIC,
      shortDescription: "",
      favorite: false,
      badges: [],
      mediaType: [],
      links: [
        {
          platform: "Solomon",
          link: "",
          displayText: "Was Paul the Apostle a Roman spy?",
          icon: "question.svg",
        },
        {
          platform: "Solomon",
          link: "topics/resurrection",
          displayText: "The Resurrection of Jesus",
          icon: "topic.svg",
        },
        {
          platform: "Solomon",
          link: "topics/gospels_reliability",
          displayText: "The Reliability of the Gospels",
          icon: "topic.svg",
        },
        {
          platform: "Solomon",
          link: "topics/existence_of_god",
          displayText: "The Existence of God",
          icon: "topic.svg",
        },
        {
          platform: "Solomon",
          link: "",
          displayText: "The Truth about the Council of Nicaea",
          icon: "youtube.svg",
        },
      ],
    },
  ],
  type: RowType.LIST,
};
const apologeticsRowData2: RowData = {
  _id: "apologetics_row2",
  name: "Notable Apologists",
  content: [
    {
      _id: "william_lane_craig",
      name: "William Lane Craig",
      type: ResourceType.SCHOLAR,
      shortDescription:
        "Reformed Theologian focusing on apologetics, debates, and more",
      favorite: false,
      controls: [Controls.FULLSCREEN],
      badges: ["video", "website", "apologetics", "theology"],
      mediaType: [],
      links: [],
    },
    {
      _id: "mike_winger",
      name: "Mike Winger",
      type: ResourceType.CREATOR,
      shortDescription: "Think Biblically About Everything",
      favorite: false,
      controls: [Controls.FULLSCREEN, Controls.DROPDOWN],
      badges: ["video", "podcast", "apologetics", "theology"],
      mediaType: [],
      links: [],
    },
    {
      _id: "wesley_huff",
      name: "Wesley (Wes) Huff",
      type: ResourceType.CREATOR,
      shortDescription: "Teach. Reach. Encourage. Equip.",
      favorite: false,
      controls: [Controls.FULLSCREEN, Controls.DROPDOWN],
      badges: ["video", "podcast", "apologetics", "theology"],
      mediaType: [],
      links: [
        {
          platform: "website",
          link: "Teach. Reach. Encourage. Equip",
          displayText: "Personal Website",
        },
      ],
    },
  ],
  type: RowType.CARD,
};
const apologeticsRowData3: RowData = {
  _id: "apologetics_row3",
  name: "Suggested Topics",
  content: [
    resurrectionOfJesus,
    {
      _id: "gospels_reliability",
      name: "The Reliability of the Gospels",
      type: ResourceType.TOPIC,
      shortDescription:
        "Discusses the reliability of the Gospel accounts according to Matthew, Mark, Luke, and John",
      favorite: false,
      controls: [Controls.OPEN_PAGE],
      badges: ["topic", "video", "scholarly_article", "book", "apologetics"],
      mediaType: [],
      links: [],
    },
  ],
  type: RowType.CARD,
};

export const loggedOutDashboardData: DashboardData = {
  accountStatus: AccountStatus.GUEST,
  rows: [
    dashboardRowData2,
    dashboardRowData4,
    dashboardRowData1,
    dashboardRowData3,
  ],
};
export const loggedOutApologeticsData: PageData = {
  _id: "apologetics_page",
  title: "Apologetics",
  pageType: PageType.APOLOGETICS,
  accountStatus: AccountStatus.GUEST,
  rows: [apologeticsRowData1, apologeticsRowData2, apologeticsRowData3],
  sidebar: apologeticsSidebar,
  needsHelp: true,
};
