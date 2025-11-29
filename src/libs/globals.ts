import {
  ResourceType,
  Theme,
  type ColorTheme,
  type ResourceInfo,
} from "@libs/Types";

export const Colors: Record<Theme, ColorTheme> = {
  [Theme.LIGHT]: {
    _id: Theme.LIGHT,
    primary: `#FFFFFF`,
    secondary: `#24989E`,
    text: `#252525`,
    navBar: `rgba(222, 222, 222, 0.30);`,
    navHighlight: `#119C26`,
    primaryRow: "#252525",
    secondaryRow: "#434343",
  },
  [Theme.DARK]: {
    _id: Theme.DARK,
    primary: `#000000`,
    secondary: `#14DCE7`,
    text: `#FFFFFF`,
    navBar: `rgba(79, 79, 79, 0.30);`,
    navHighlight: `#2AD143`,
    primaryRow: "#FFFFFF",
    secondaryRow: "#A9A9A9",
  },
};

const SearchBarColors = {
  background: `#FFFFFF`,
  content: `#9B9B9B`,
};

// Screen Breakpoints
export const breakpoints = { xs: 0, sm: 600, md: 960, lg: 1200 };

export const dummyResource: ResourceInfo = {
  _id: "",
  name: "",
  type: ResourceType.SCHOLAR,
  shortDescription: "",
  favorite: false,
  badges: [],
  mediaType: [],
  links: [],
};
