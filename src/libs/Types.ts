// TODO: Change SidebarItem to SidebarItem
/**
 * Data that makes up a sidebar link
 */
export type SidebarItem = {
  title: string;
  icon: string;
  content: ResourceLink[];
};

export type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;
export type ResourceIcon = {
  type: ResourceType;
  icon: string;
};

export type ColorTheme = {
  _id: Theme;
  primary: string;
  secondary: string;
  text: string;
  secondaryText: string;
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
  url: string;
  displayText: string;
  priority?: boolean;
  tooltip?: string;
};

export type Content = {
  _id: string;
  title: string;
  description?: string;
  thumbnail: string;
  badges?: string[];
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
  _id: string;
  type: BadgeTypes;
  text: string;
  icon: string;
  color: string;
};

/**
 * API to be called. Can only be YouTube for now.
 */
type ResourceAPI = {
  platform: "youtube"; // | 'amazon' | 'tiktok'
  queryParam: string; // For YouTube, this will be a username
};

/**
 * All data required for displaying a resource.
 */
export type ResourceInfo = {
  _id: string;
  name: string;
  creator?: string;
  color?: string;
  type: ResourceType;
  shortDesc?: string;
  longDesc?: string;
  // recommendedContent?: Content[]; // Recommended content will be mostly used for historical figures (Martin Luther, Charles Spurgeon, etc.) where no "recent content" would be relevant
  badges: BadgeTypes[]; // Badges are just _id strings, and are displayed on the frontend
  links: ResourceLink[]; // All associated links
  tags: string[];
  api?: ResourceAPI;
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
  shortDesc?: string;
  color?: string;
  longDesc?: string;
  accountStatus: AccountStatus;
  rows: RowData[];
  sidebarItems: SidebarItem[];
  needsHelp: boolean;
  sub?: string[];
  related?: string[];
};

// Varius Enumerations

export enum Controls {
  fullscreen = "fullscreen",
  open_page = "open_page",
  dropdown = "dropdown",
  // external_link = "external_link", TODO: In the future, there should be some sort of mechanism that pops up a warning to the user about going to an external link
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
  RESOURCE = "resource",
  GLOSSARY = "glossary",
  ABOUT = "about",
  NOTFOUND = "404",
  ADD = "add",
}
export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}
/**
 * Type of resource (ex: "ministry")
 */
export enum ResourceType {
  // SCHOLAR = "scholar",
  // CREATOR = "creator",
  PERSON = "person",
  MINISTRY = "ministry",
  CONTENT = "content",
  TOPIC = "topic",
  QUESTION = "question",
}

export type GlossaryItem = {
  _id: string;
  pretty: string;
  type?: string;
};
export type GlossaryData = {
  letter: string;
  content: GlossaryItem[];
};
export type GlossaryPage = {
  _id: string;
  data: { resources: GlossaryData[]; topics: GlossaryData[] };
};
