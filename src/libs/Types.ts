/**
 * Data that makes up a sidebar link
 */
export type SidebarLink = {
  title: string;
  icon: string;
  items: ResourceLink[];
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

export type BadgeTypes =
  | "platform"
  | "ministry"
  | "topic"
  | "contentType"
  | "contentTheme";
export type IBadge = {
  _id: string;
  type: BadgeTypes;
  text: string;
  icon: string;
};
export type BadgeAtts = {
  type: BadgeTypes;
  text: string;
  icon: string;
  color: string;
};

/**
 * All data required for displaying a resource.
 */
export type ResourceInfo = {
  _id: string;
  name: string;
  image?: string;
  color?: string;
  type: ResourceType;
  shortDesc?: string;
  longDesc?: string;
  recentContent?: Content[];
  recommendedContent?: Content[]; // TODO: This will change as more functionality is added (eg: user recommendations)
  favorite?: boolean;
  controls?: Controls[];
  badges: string[];
  links?: ResourceLink[];
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
  _id: string;
  title: string;
  solomonLink?: string; // TODO: This is likely temporary
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
  EXTERNAL_LINK = "EXTERNAL_LINK",
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
  ABOUT = "about",
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
