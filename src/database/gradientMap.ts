import { PageType } from "@libs/Types";

export const gradientMap: Record<PageType, string> = {
  [PageType.DASHBOARD]: "background_gradient",
  [PageType.APOLOGETICS]: "apologetics_gradient",
  [PageType.THEOLOGY]: "theology_gradient",
  [PageType.COMMENTARY]: "commentary_gradient",
  [PageType.TOPIC]: "topic_gradient",
  [PageType.GLOSSARY]: "glossary_gradient",
  [PageType.NOTFOUND]: "404_gradient",
};
