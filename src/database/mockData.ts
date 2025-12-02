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
export const oldTestament: ResourceInfo = {
  _id: "old_testament",
  image: "old_testament.png",
  name: "The Old Testament",
  shortDescription:
    "Describes the story of humanity and Israel prior to the birth of Jesus. Begins with the creation of the universe, and follows various figures God calls to prophecy, rule, and judge Israel.",
  longDescription:
    "The Old Testament makes up 82% of the Bible. It begins with the Book of Genesis, which describes how God created the universe and humanity. The Old Testament follows the story of Israel, first through Abraham.",
  type: ResourceType.TOPIC,
  badges: [
    "website",
    "video",
    "article",
    "theology",
    "apologetics",
    "commentary",
  ],
  solomonLink: "topics/old_testament",
  controls: [Controls.OPEN_PAGE],
};
export const newTestament: ResourceInfo = {
  _id: "new_testament",
  name: "The New Testament",
  image: "new_testament.png",
  shortDescription:
    "Follows the life, ministry, death, and resurrection of Jesus. After Jesus's ascension to heaven, the New Testament contains records and writings of the early church.",
  longDescription:
    "The New Testament is best known for the Gospels, which include the good news that Jesus is risen! However, there are many other books in the New Testament too that take place after the ascension of Jesus to heaven. The New Testament follows the journey of the early church, beginning with the book of the Acts of the Apostles and ending with The Revelation of the end of the world.",
  type: ResourceType.TOPIC,
  badges: [
    "website",
    "video",
    "article",
    "theology",
    "apologetics",
    "commentary",
  ],
  solomonLink: "topics/new_testament",
  controls: [Controls.OPEN_PAGE],
};
export const gospels: ResourceInfo = {
  _id: "gospels",
  name: "The Gospels",
  image: "gospels.png",
  shortDescription:
    "The Gospels (Matthew, Mark, Luke, and John) all detail the life, ministry, death, and resurrection of Jesus. Each describes the dual nature of Christ as fully God and fully human.",
  type: ResourceType.TOPIC,
  badges: ["topic", "video", "scholarly_article", "book", "apologetics"],
  solomonLink: "topics/gospels",
  controls: [Controls.OPEN_PAGE],
};
export const paulineLetters: ResourceInfo = {
  _id: "pauline_letters",
  name: "The Letters of Paul",
  image: "pauline_letters.png",
  shortDescription:
    "Paul the Apostle wrote 13 letters in the Bible. Most are to various churches around the Roman Empire, but some are to personal companions.",
  type: ResourceType.TOPIC,
  badges: ["topic", "video", "scholarly_article", "book"],
  controls: [Controls.OPEN_PAGE],
};

/**
 *
 *
 *
 */

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
export const martinLuther: ResourceInfo = {
  _id: "martin_luther",
  name: "Martin Luther",
  image: "martin_luther.png",
  type: ResourceType.SCHOLAR,
  shortDescription: "German priest responsible for the Protestant Reformation",
  controls: [Controls.FULLSCREEN],
  badges: ["theology", "historical_figure"],
  mediaType: [],
};
export const ntWright: ResourceInfo = {
  _id: "nt_wright",
  name: "N.T. Wright",
  image: "nt_wright.png",
  type: ResourceType.SCHOLAR,
  shortDescription:
    "Nicholas Thomas (N.T.) Wright is a New Testament scholar and Anglican bishop",
  controls: [Controls.FULLSCREEN],
  badges: ["website", "book", "apologetics", "theology", "church"],
  links: [],
};
export const csLewis: ResourceInfo = {
  _id: "cs_lewis",
  name: "C.S. Lewis",
  image: "cs_lewis.png",
  type: ResourceType.SCHOLAR,
  shortDescription:
    "Clive Staples (C.S.) Lewis was a British scholar and Anglican theologian",
  controls: [Controls.FULLSCREEN],
  badges: ["website", "debate", "book", "apologetics", "theology"],
  links: [],
};
export const johnLennox: ResourceInfo = {
  _id: "john_lennox",
  name: "John Lennox",
  image: "john_lennox.png",
  type: ResourceType.SCHOLAR,
  shortDescription:
    "Northern Irish theologian known for his public debates with Atheists",
  favorite: false,
  controls: [Controls.FULLSCREEN, Controls.DROPDOWN],
  badges: ["video", "book", "theology", "apologetics"],
};
export const mikeWinger: ResourceInfo = {
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
};
export const inspiringPhilosophy: ResourceInfo = {
  _id: "inspiring_philosophy",
  name: "Michael Jones - InspiringPhilosophy",
  image: "inspiring_philosophy.png",
  type: ResourceType.CREATOR,
  shortDescription: '"Helping You Grow Your Faith"',
  longDescription:
    "InspiringPhilosophy is a non-profit Christian organization that brings high-quality content on apologetics, theology, and commentary. The team's mission is to spread the Gospel by proving its truth, and they do this in numerous ways. InspiringPhilosophy's content ranges from rebuttals to Muslim apologists to finding historical evidence for certain Biblical accounts, like the conquest of Caanan.",
  controls: [Controls.FULLSCREEN, Controls.DROPDOWN],
  badges: ["video", "podcast", "apologetics", "theology"],
  recentContent: [
    {
      _id: "ip_v1",
      title: "Easter is NOT Pagan! Get Over it!",
      description:
        "Michael Jones responds to and refutes claims that Easter is a holiday with pagan roots.",
      thumbnail: "ip_v1.png",
      badges: ["debate"],
      link: "https://youtu.be/HMMJ00nPze0?si=NafjIJxu3MZxv7Fi",
    },
    {
      _id: "ip_v2",
      title: "Is Jesus The Only Way to God?",
      description:
        "In this video, Michael responds to Reverend Robertson and his claim Jesus did not state he was the only way to the Father.",
      thumbnail: "ip_v2.png",
      badges: ["question"],
      link: "https://youtu.be/nLFtMIS4N34?si=jjF8ks-5XNvAemX-",
    },
    {
      _id: "ip_v3",
      title: "Are Christian Scholars Biased?",
      description:
        "A common claim among non-Christian scholars is that Christian scholars are biased with any find they present that could support the Bible. But what happened when we dive into the psychology of the bias all scholars have?",
      thumbnail: "ip_v3.png",
      badges: ["question"],
      link: "https://youtu.be/Amk1I3MnPsA?si=FNFoYJH8t7UPFjNL",
    },
  ],
  recommendedContent: [
    {
      _id: "ip_v4",
      title: "The Book of Job Explained",
      description:
        "The Book of Job is one of the most misunderstood books in the Bible. Michael attempts to clear that up by offering a different perspective than most people know today.",
      thumbnail: "ip_v4.png",
      badges: ["commentary"],
      link: "https://youtu.be/kZKuixGmiMw?si=GbV9TXScGk6Y0rKe",
    },
    {
      _id: "ip_v5",
      title: "The Truth about the Council of Nicaea",
      description:
        "What happened at the council of Nicaea? This video answers this question.",
      thumbnail: "ip_v5.png",
      badges: ["topic"],
      link: "https://youtu.be/WSKBGdv07nQ?si=4xN0AKEoIdzJuMPj",
    },
    {
      _id: "ip_v6",
      title: "Biblical Archaeology: Eden",
      description:
        "Michael explores the historical evidence for the location of the Garden of Eden.",
      thumbnail: "ip_v6.png",
      badges: ["apologetics"],
      link: "https://youtu.be/76PWWNDaMb4?si=zE3I3VSyxqZtjgek",
    },
  ],
  links: [
    {
      platform: "YouTube",
      link: "https://www.youtube.com/@InspiringPhilosophy",
      displayText: "youtube/InspiringPhilosophy",
      icon: "youtube.svg",
      priority: true,
    },
    {
      platform: "Personal Website",
      link: "https://www.inspiringphilosophy.com/",
      icon: "website.svg",
      displayText: "inspiringphilosophy.com",
    },
    {
      platform: "X",
      link: "https://x.com/InspiringPhilos",
      icon: "x.svg",
      displayText: "x/InspiringPhilos",
    },
    {
      platform: "Instagram",
      link: "https://www.instagram.com/inspiringphilosophy_/",
      icon: "instagram.svg",
      displayText: "instagram/inspiringphilosophy_",
    },
    {
      platform: "TikTok",
      link: "https://www.tiktok.com/@inspiringphilosophy",
      icon: "tiktok.svg",
      displayText: "tiktok/inspiringphilosophy",
    },
    {
      platform: "Facebook",
      link: "https://www.facebook.com/inspiringphilosophy",
      icon: "facebook.svg",
      displayText: "facebook/inspiringphilosophy",
    },
    {
      platform: "Donate",
      link: "https://www.inspiringphilosophy.com/give",
      icon: "donate.svg",
      displayText: "donations",
    },
  ],
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
      icon: "donate.svg",
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

export const bibleProject: ResourceInfo = {
  _id: "bible_project",
  name: "BibleProject",
  image: "bible_project.png",
  type: ResourceType.CREATOR,
  shortDescription: '"Watch, Read, Listen, and Learn."',
  longDescription:
    "BibleProject is a crowdfunded, non-profit organization that creates high-quality, free resources for Christians. These include commentaries on specific Bible books, podcasts, and more.",
  controls: [Controls.FULLSCREEN, Controls.DROPDOWN],
  recentContent: [
    {
      _id: "bp_v1",
      title: "An Overview of Luke • Luke-Acts Ep. 2",
      description:
        "Following up on part one of their discussion on the gospel of Luke, Tim and Jon continue to unpack the main themes of Luke's unique account of Jesus' life.",
      thumbnail: "bp_v1.png",
      badges: ["commentary"],
      link: "https://youtu.be/E65KV3M8RZE?si=HLBz5QQibQ4PLyhZ",
    },
    {
      _id: "bp_v2",
      title: "Why Cain Builds a City • The City Ep. 2",
      description:
        "In this episode, Tim and Jon explore the theme of the city and the first thing God builds.",
      thumbnail: "bp_v2.png",
      badges: ["question"],
      link: "https://youtu.be/sAHdBY_KNPE?si=JpXxNgqldLsC0cYk",
    },
    {
      _id: "bp_v3",
      title:
        "What Friend Surprises Job and Says Something Different • Wisdom (Episode 7)",
      description:
        "In this episode, Tim and Jon try to tackle some of the glaring questions about the story of Job.",
      thumbnail: "bp_v3.png",
      badges: ["commentary"],
      link: "https://youtu.be/qUuoCXcM9CU?si=KQCfHjNHQqUvWBMm",
    },
  ],
  recommendedContent: [
    {
      _id: "bp_v4",
      title: "The Book of Job's Wisdom on How God Runs the World",
      description:
        "How do you trust God even when life isn't fair and you suffer for no good reason?",
      thumbnail: "bp_v4.png",
      badges: ["theology"],
      link: "https://youtu.be/GswSg2ohqmA?si=-zepjfNi7JlL4m53",
    },
    {
      _id: "bp_v5",
      title: "Book of Genesis Summary: A Complete Animated Overview (Part 1)",
      description:
        "Watch our overview video on Genesis 1-11, which breaks down the literary design of the book and its flow of thought.",
      thumbnail: "bp_v5.png",
      badges: ["commentary"],
      link: "https://youtu.be/GQI72THyO5I?si=9VntbZkoi8YwZnXf",
    },
    {
      _id: "bp_v6",
      title:
        "Book of Revelation Summary: A Complete Animated Overview (Part 1)",
      description:
        "In this video, you're going to learn what the Book of Revelation is all about.",
      thumbnail: "bp_v6.png",
      badges: ["commentary"],
      link: "https://youtu.be/5nvVVcYD-0w?si=EF6whMTxu0yQNLGq",
    },
  ],
  badges: ["video", "podcast", "website", "apologetics", "theology"],
  mediaType: [],
  links: [
    {
      platform: "YouTube",
      link: "https://www.youtube.com/@bibleproject",
      displayText: "youtube/bibleproject",
      icon: "youtube.svg",
      priority: true,
    },
    {
      platform: "Personal Website",
      link: "https://bibleproject.com/",
      icon: "website.svg",
      displayText: "bibleproject.com",
    },
    {
      platform: "X",
      link: "https://x.com/bibleproject",
      icon: "x.svg",
      displayText: "x/bibleproject",
    },
    {
      platform: "Instagram",
      link: "https://www.instagram.com/thebibleproject/",
      icon: "instagram.svg",
      displayText: "instagram/thebibleproject",
    },
    {
      platform: "App",
      link: "https://bibleproject.com/app/",
      icon: "phone.svg",
      displayText: "bibleproject.com/app",
    },
    {
      platform: "TikTok",
      link: "https://www.tiktok.com/@bibleproject",
      icon: "tiktok.svg",
      displayText: "tiktok/bibleproject",
    },
    {
      platform: "Facebook",
      link: "https://www.facebook.com/jointhebibleproject",
      icon: "facebook.svg",
      displayText: "facebook/jointhebibleproject",
    },
    {
      platform: "Donate",
      link: "https://bibleproject.com/",
      icon: "donate.svg",
      displayText: "donations",
    },
  ],
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

/**
 * Mock data to be used on the dashboard for a single row of cards.
 */
const dashboardRowData3: RowData = {
  _id: "deeper_apologetics",
  name: "Deeper Apologetics",
  content: [inspiringPhilosophy, williamLaneCraig, mikeWinger, gavinOrtlund],
  type: RowType.CARD,
};
const dashboardRowData1: RowData = {
  _id: "theology_intro",
  name: "Introduction to Theology",
  content: [ntWright, johnLennox, trinity, williamLaneCraig],
  type: RowType.CARD,
};
const dashboardRowData4: RowData = {
  _id: "topics_new_believers",
  name: "Topics for New Believers",
  content: [resurrectionOfJesus, gospels, oldTestament],
  type: RowType.CARD,
};
const dashboardRowData2: RowData = {
  _id: "bible_commentary",
  name: "High-Level Bible Commentary",
  content: [gotQuestions, newTestament, resurrectionOfJesus, bibleProject],
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
    dashboardRowData1,
    dashboardRowData2,
    dashboardRowData3,
    dashboardRowData4,
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
