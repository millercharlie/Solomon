import {
  gospels,
  newTestament,
  oldTestament,
  paulineLetters,
} from "@database/mockData";
import {
  AccountStatus,
  PageType,
  ResourceType,
  RowType,
  type PageData,
  type RowData,
} from "@libs/Types";

const row1: RowData = {
  _id: "commentary_row1",
  type: RowType.LIST,
  content: [
    {
      _id: "daniel",
      name: "Daniel",
      shortDescription:
        "Contains remarkable accounts in the life of the prophet Daniel.",
      type: ResourceType.TOPIC,
      badges: [],
      links: [
        {
          platform: "Website",
          link: "https://enduringword.com/bible-commentary/daniel-1/",
          displayText: "Daniel 1",
          tooltip: "Daniel Trains in Babylon after being exiled from Judah",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "https://enduringword.com/bible-commentary/daniel-3/",
          displayText: "Daniel 3",
          tooltip: "Shadrach, Meshach, and Abednego in the Blazing Furnace",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "https://enduringword.com/bible-commentary/daniel-7/",
          displayText: "Daniel 7",
          tooltip: "Daniel's Dream of Four Beasts",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "https://enduringword.com/bible-commentary/daniel-8/",
          displayText: "Daniel 8",
          tooltip: "Daniel's Vision of the Ram and Goat",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "https://enduringword.com/bible-commentary/daniel-9/",
          displayText: "Daniel 9",
          tooltip: "Daniel's prayer for Israel and Judah",
          icon: "website.svg",
        },
      ],
    },
    {
      _id: "matthew",
      name: "The Gospel According to Matthew",
      type: ResourceType.TOPIC,
      shortDescription:
        "Matthew's recount of the life, ministry, and resurrection of Jesus of Nazareth.",
      badges: [],
      links: [
        {
          platform: "Website",
          link: "https://enduringword.com/bible-commentary/matthew-1/",
          tooltip: "The Geneology and Birth of Jesus Christ",
          displayText: "Matthew 1",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "https://enduringword.com/bible-commentary/matthew-10/",
          tooltip: "Jesus chooses the Twelve disciples",
          displayText: "Matthew 10",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "https://enduringword.com/bible-commentary/matthew-15/",
          tooltip: "Jesus rebukes the Jewish religious leaders (Pharisees)",
          displayText: "Matthew 15",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "https://enduringword.com/bible-commentary/matthew-26/",
          tooltip: "The Betrayal and Arrest of Jesus",
          displayText: "Matthew 26",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "https://enduringword.com/bible-commentary/matthew-28/",
          tooltip: "The Resurrection of Jesus Christ",
          displayText: "Matthew 28",
          icon: "website.svg",
        },
      ],
    },
    {
      _id: "first_samuel",
      name: "1 Samuel",
      type: ResourceType.TOPIC,
      shortDescription:
        "Chronicles the story of Israel and Judah united under various kings",
      badges: [],
      links: [
        {
          platform: "Website",
          link: "https://enduringword.com/bible-commentary/1-samuel-1/",
          tooltip: "The Birth of Samuel the Prophet",
          displayText: "1 Samuel 1",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "https://enduringword.com/bible-commentary/1-samuel-2/",
          tooltip: "Eli the Prophet's Wicked Sons",
          displayText: "1 Samuel 2",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "https://enduringword.com/bible-commentary/1-samuel-3/",
          tooltip: "The LORD Calls Samuel",
          displayText: "1 Samuel 3",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "https://enduringword.com/bible-commentary/1-samuel-4/",
          tooltip: "The Death of Eli the Prophet",
          displayText: "1 Samuel 4",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "https://enduringword.com/bible-commentary/1-samuel-5/",
          tooltip: "The Ark of the Convenant in Phillistine Territory",
          displayText: "1 Samuel 5",
          icon: "website.svg",
        },
      ],
    },
    {
      _id: "book_of_romans",
      name: "Romans",
      type: ResourceType.TOPIC,
      shortDescription:
        "Paul's letter to the church in Rome preaching Salvation through Jesus Christ alone",
      badges: [],
      links: [
        {
          platform: "Website",
          link: "https://enduringword.com/bible-commentary/romans-1/",
          tooltip: "The Birth of Samuel the Prophet",
          displayText: "Romans 1",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "https://enduringword.com/bible-commentary/romans-5/",
          tooltip: "Peace and Hope",
          displayText: "Romans 5",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "https://enduringword.com/bible-commentary/romans-8/",
          tooltip: "Earthly Suffering and Heavenly Glory",
          displayText: "Romans 8",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "https://enduringword.com/bible-commentary/romans-12/",
          tooltip: "Humble Service in the Body of Christ",
          displayText: "Romans 12",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "https://enduringword.com/bible-commentary/romans-18/",
          tooltip: "The Wrath of God Against Sin",
          displayText: "Romans 18",
          icon: "website.svg",
        },
      ],
    },
  ],
};

const row2: RowData = {
  _id: "commentary_row2",
  name: "Specific Topics In-Depth",
  type: RowType.CARD,
  content: [oldTestament, newTestament, gospels, paulineLetters],
};

const row3: RowData = {
  _id: "commentary_row3",
  type: RowType.LIST,
  content: [
    {
      _id: "resources",
      name: "Bible Commentary Websites",
      type: ResourceType.TOPIC,
      shortDescription: "Excellent websites with Bible commentary",
      badges: [],
      links: [
        {
          platform: "Website",
          link: "gotquestions.org/commentary",
          displayText: "GotQuestions.org",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "enduringword.com",
          displayText: "Enduring Word",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "blueletterbible.com",
          displayText: "Blue Letter Bible",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "https://www.biblegateway.com/resources/commentaries/",
          displayText: "Bible Gateway",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "https://www.christianity.com/bible/commentary/",
          displayText: "cristianity.com",
          icon: "website.svg",
        },
      ],
    },
    {
      _id: "study_bibles",
      name: "Study Bibles",
      type: ResourceType.TOPIC,
      shortDescription:
        "Study Bibles typically contain commentary in addition to all the standard content that can be found. Below, study Bibles are listed for various versions.",
      badges: [],
      links: [
        {
          platform: "book",
          link: "",
          displayText: "NIV Study Bible",
          icon: "closed_book.svg",
        },
        {
          platform: "book",
          link: "",
          displayText: "ESV Study Bible",
          icon: "closed_book.svg",
        },
        {
          platform: "book",
          link: "",
          displayText: "NLT Study Bible",
          icon: "closed_book.svg",
        },
        {
          platform: "book",
          link: "",
          displayText: "NASB Study Bible",
          icon: "closed_book.svg",
        },
        {
          platform: "book",
          link: "",
          displayText: "NKJV Study Bible",
          icon: "closed_book.svg",
        },
      ],
    },
    {
      _id: "books_beginners",
      name: "Books for New Believers",
      type: ResourceType.TOPIC,
      doubleWidth: true,
      shortDescription:
        "Are you new to the faith? Check out commentary on some Bible books to help you in your journey!",
      badges: [],
      links: [
        {
          platform: "Video",
          link: "https://youtu.be/G-2e9mMf7E8?si=IXu4UBakv0lHM66M",
          displayText:
            "BibleProject \u2013 Gospel of John Summary: A Complete Animated Overview (Part 1)",
          tooltip: "Explores the deity, life, and resurrection of Jesus",
          icon: "youtube.svg",
        },
        {
          platform: "Website",
          link: "https://bibleproject.com/articles/luke-gospels-savior-lost-people/?gad_source=1&gad_campaignid=15799262782&gbraid=0AAAAADNn2r8spYEvWmVuyrqOyhIzEBZKr&gclid=Cj0KCQiAubrJBhCbARIsAHIdxD-fwQM2qbv16cIhkgl-BCUN7kpelhZGCUvG2JQOxqTMBSOAo52jRr4aAu23EALw_wcB",
          displayText:
            "BibleProject \u2013 Luke: The Gospel of the Savior for Lost People Everywhere",
          tooltip:
            "Luke's account of the life, ministry, and resurrection of Christ",
          icon: "article.svg",
        },
        {
          platform: "Website",
          link: "https://www.gotquestions.org/Book-of-Romans.html",
          displayText: "GotQuestions.org \u2013 Summary of the Book of Romans",
          tooltip: "Paul the Apostle's letter to the church in Rome",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "https://enduringword.com/media/acts/",
          displayText: "David Guzik Sermons through the Book of Acts",
          tooltip: "Luke's account of the early church",
          icon: "church.svg",
        },
        {
          platform: "Video",
          link: "https://youtu.be/ICPdzrMOJME?si=vaf-LGxuLAojKbb8",
          displayText: "GotQuestions.org - A Summary of the Book of 1 Samuel",
          tooltip: "Illustrates the reign of Kings Saul and David",
          icon: "youtube.svg",
        },
      ],
    },
  ],
};

export const commentaryData: PageData = {
  _id: "commentary_page",
  title: "Bible Commentary",
  pageType: PageType.COMMENTARY,
  accountStatus: AccountStatus.GUEST,
  description:
    "The Bible is a massive book that can feel overwhelming to read at first-glance. This page has curated starting points for you to begin reading both the New Testament and Old Testament with confidence! If you wish to dive deeper into specific topics with additional commentary, check out the second row below for a few high-level topics.",
  rows: [row1, row2, row3],
  sidebar: [],
  needsHelp: true,
};
