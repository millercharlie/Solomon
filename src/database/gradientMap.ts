import { PageType } from "@libs/Types";

export const gradientMap: Record<PageType, string> = {
  [PageType.dashboard]: "background_gradient",
  [PageType.apologetics]: "apologetics_gradient",
  [PageType.theology]: "theology_gradient",
  [PageType.commentary]: "commentary_gradient",
  [PageType.topic]: "topic_gradient",
  [PageType.resource]: "topic_gradient",
  [PageType.bibleBook]: "topic_gradient",
  [PageType.glossary]: "glossary_gradient",
  [PageType.error]: "404_gradient",
  [PageType.about]: "about_gradient",
  [PageType.add]: "create_gradient",
  [PageType.loading]: "about_gradient",
};
