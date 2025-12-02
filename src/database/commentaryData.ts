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
  _id: "commentary_row1",
  type: RowType.LIST,
  content: [
    {
      _id: "daniel",
      name: "The Book of Daniel",
      shortDescription:
        "Contains remarkable accounts in the life of the prophet Daniel.",
      type: ResourceType.TOPIC,
      badges: [],
      links: [
        {
          platform: "Website",
          link: "",
          displayText: "Daniel 1",
          tooltip: "Daniel Exiled from Judah",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "",
          displayText: "Daniel 3",
          tooltip: "Shadrach, Meshach, and Abednego in the Blazing Furnace",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "",
          displayText: "Daniel 7",
          tooltip: "The Prophecy of Daniel",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "",
          displayText: "Daniel 8",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "",
          displayText: "Daniel 9",
          tooltip: "Daniel's vision of the end of the world",
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
          link: "",
          displayText: "Matthew 1",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "",
          displayText: "Matthew 10",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "",
          displayText: "Matthew 15",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "",
          displayText: "Matthew 26",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "",
          displayText: "Matthew 32",
          icon: "website.svg",
        },
      ],
    },
    {
      _id: "books_beginners",
      name: "Books for New Believers",
      type: ResourceType.TOPIC,
      shortDescription:
        "Are you new to the faith? Check out commentary on some great books to help you in your journey!",
      badges: [],
      links: [
        {
          platform: "Website",
          link: "",
          displayText: "The Gospel of John",
          tooltip: "Explores the deity, life, and resurrection of Jesus",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "",
          displayText: "The Gospel According to Luke",
          tooltip:
            "Luke's account of the life, ministry, and resurrection of Christ",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "",
          displayText: "Romans",
          tooltip: "Paul the Apostle's letter to the church in Rome",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "",
          displayText: "Acts of the Apostles",
          tooltip: "Luke's account of the early church",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "",
          displayText: "1 Samuel",
          tooltip: "Illustrates the reign of Kings Saul and David",
          icon: "website.svg",
        },
      ],
    },
  ],
};

const row2: RowData = {
  _id: "commentary_row2",
  type: RowType.CARD,
  content: [
    {
      _id: "ot",
      image: "ot.png",
      name: "The Old Testament",
      shortDescription:
        "Describes the story of humanity and Israel prior to the birth of Jesus. Begins with the creation of the universe, and follows various figures God calls to prophecy, rule, and judge Israel.",
      longDescription:
        "The Old Testament makes up 82% of the Bible. It begins with the Book of Genesis, which describes how God created the universe and humanity. The Old Testament follows the story of Israel, first through Abraham.",
      type: ResourceType.TOPIC,
      badges: [],
      links: [],
      solomonLink: "topics/old_testament",
      controls: [Controls.OPEN_PAGE],
    },
    {
      _id: "nt",
      name: "The New Testament",
      image: "nt.png",
      shortDescription:
        "Follows the life, ministry, death, and resurrection of Jesus. After Jesus's ascension to heaven, the New Testament contains records and writings of the early church",
      longDescription:
        "The New Testament is best known for the Gospels, which include the good news that Jesus is risen! However, there are many other books in the New Testament too that take place after the ascension of Jesus to heaven. The New Testament follows the journey of the early church, beginning with the book of the Acts of the Apostles and ending with The Revelation of the end of the world.",
      type: ResourceType.TOPIC,
      badges: [],
      links: [],
      solomonLink: "topics/new_testament",
      controls: [Controls.OPEN_PAGE],
    },
    {
      _id: "gospels",
      name: "The Gospels",
      image: "gospels.png",
      shortDescription:
        "The Gospels (Matthew, Mark, Luke, and John) all detail the life, ministry, death, and resurrection of Jesus. Each describes the dual nature of Christ as fully God and fully human.",
      type: ResourceType.TOPIC,
      badges: [],
      links: [],
      solomonLink: "topics/gospels",
      controls: [Controls.OPEN_PAGE],
    },
  ],
};

const row3: RowData = {
  _id: "commentary_row3",
  type: RowType.LIST,
  content: [
    {
      _id: "resources",
      name: "Bible Commentary Websites",
      type: ResourceType.TOPIC,
      shortDescription:
        "If you're looking for excelltnt websites with Bible commentary, please check any of th elinks below!",
      badges: [],
      links: [
        {
          platform: "Website",
          link: "gotquestions.org/commentary",
          displayText: "GotQuestions.org",
          tooltip: "Ministry created by ___ for ___.",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "enduringword.com",
          displayText: "Enduring Word",
          tooltip: "Ministry created by ___ for ___.",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "blueletterbible.com",
          displayText: "Blue Letter Bible",
          tooltip: "Ministry created by ___ for ___.",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "gotquestions.org/commentary",
          displayText: "GotQuestions.org",
          tooltip: "Ministry created by ___ for ___.",
          icon: "website.svg",
        },
        {
          platform: "Website",
          link: "gotquestions.org/commentary",
          displayText: "GotQuestions.org",
          tooltip: "Ministry created by ___ for ___.",
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
          icon: "book.svg",
        },
        {
          platform: "book",
          link: "",
          displayText: "ESV Study Bible",
          icon: "book.svg",
        },
        {
          platform: "book",
          link: "",
          displayText: "NLT Study Bible",
          icon: "book.svg",
        },
        {
          platform: "book",
          link: "",
          displayText: "NASB Study Bible",
          icon: "book.svg",
        },
        {
          platform: "book",
          link: "",
          displayText: "NKJV Study Bible",
          icon: "book.svg",
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
  rows: [row1, row2, row3],
  sidebar: [],
  needsHelp: true,
};
