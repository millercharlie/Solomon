import {
  ResourceType,
  Theme,
  type ColorTheme,
  type ResourceInfo,
} from "@libs/Types";

export const Colors: Record<Theme, ColorTheme> = {
  [Theme.LIGHT]: {
    _id: Theme.LIGHT,
    primary: "#ffffff",
    secondary: "#24989e",
    text: "#252525",
    secondaryText: "#4a4a4a",
    navBar: "rgba(222, 222, 222, 0.30);",
    navHighlight: "#119c26",
    primaryRow: "#252525",
    secondaryRow: "#434343",
  },
  [Theme.DARK]: {
    _id: Theme.DARK,
    primary: "#000000",
    secondary: "#14dce7",
    text: "#ffffff",
    secondaryText: "#cecece",
    navBar: "rgba(79, 79, 79, 0.30);",
    navHighlight: "#2ad143",
    primaryRow: "#ffffff",
    secondaryRow: "#a9a9a9",
  },
};

// const SearchBarColors = {
//   background: `#FFFFFF`,
//   content: `#9B9B9B`,
// };

// Screen Breakpoints
export const breakpoints = { xs: 0, sm: 600, md: 960, lg: 1200 };

export const dummyResource: ResourceInfo = {
  _id: "",
  name: "",
  resourceType: ResourceType.PERSON,
  shortDesc: "",
  badges: [],
  links: [],
  tags: [],
};
