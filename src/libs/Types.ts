/**
 * Data that makes up a sidebar link
 */
export type SidebarLink = {
  title: string;
  icon: string;
  items: ResourceLink[];
};

/**
 * All data required for displaying a badge.
 */
export type BadgeAttributes = {
  text: string;
  icon: string;
  backgroundColor: string;
  textColor: string;
};

export type ResourceIcon = {
  type: ResourceType;
  icon: string;
};

export type ColorTheme = {
  _id: Theme;
  primary: string;
  secondary: string;
  text: string;
  navBar: string;
  navHighlight: string;
  primaryRow: string;
  secondaryRow: string;
};

// TODO: Finish this map
export const BadgeMap: Record<string, string> = {
  video: "video",
};

/**
 * Resource link which includes a platform and the actual link.
 */
export type ResourceLink = {
  platform: string;
  link: string;
  displayText: string;
  icon?: string;
  priority?: boolean;
  tooltip?: string;
};

type Content = {
  _id: string;
  title: string;
  description?: string;
  thumbnail: string;
  badges: string[]; // TODO: Maybe make badge type an enum or interface
  link: string;
};

type ListContent = {
  title: string;
  content: ResourceInfo[];
};
/**
 * All data required for displaying a resource.
 */
export type ResourceInfo = {
  _id: string;
  name: string;
  image?: string;
  solomon_link?: string;
  ministry?: string;
  type: ResourceType;
  shortDescription?: string;
  longDescription?: string;
  recentContent?: Content[];
  recommendedContent?: Content[]; // TODO: This will change as more functionality is added (eg: user recommendations)
  favorite?: boolean;
  controls?: Controls[];
  badges: string[];
  mediaType?: string[]; // TODO: This might not be needed except for topics which can map through them
  links: ResourceLink[];
};

// TODO: Clean up these types

export type RowData = {
  _id: string;
  type: RowType;
  name?: string;
  content: ResourceInfo[];
};

export interface DashboardData {
  accountStatus: AccountStatus;
  rows: RowData[];
}

export type PageData = {
  title: string;
  pageType: PageType;
  description?: string;
  accountStatus: AccountStatus;
  rows: RowData[];
  sidebar: SidebarLink[];
  needsHelp: boolean;
};

// Varius Enumerations

export enum Controls {
  FULLSCREEN = "fullscreen",
  OPEN_PAGE = "open_page",
  DROPDOWN = "dropdown",
}
/**
 * Account Status
 */
export enum AccountStatus {
  GUEST,
  USER,
  ADMIN,
}
export enum RowType {
  CARD = "card",
  LIST = "list",
}
export enum PageType {
  DASHBOARD = "dashboard",
  APOLOGETICS = "apologetics",
  THEOLOGY = "theology",
  COMMENTARY = "commentary",
  TOPIC = "topic",
  GLOSSARY = "glossary",
  NOTFOUND = "404",
}
export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}
/**
 * Type of resource (ex: "scholar")
 */
export enum ResourceType {
  SCHOLAR = "scholar",
  CREATOR = "creator",
  MINISTRY = "ministry",
  BOOK = "book",
  TOPIC = "topic",
  QUESTION = "question",
}
