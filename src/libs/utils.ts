import {
  Controls,
  ResourceType,
  Theme,
  type IBadge,
  type ResourceInfo,
} from "@libs/Types";
import badges from "../database/badges.json";
import axios, { isAxiosError } from "axios";

export const hexToRGB = (hex: string) => {
  const conversion = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!conversion || conversion.length < 4) {
    throw new Error("Invalid Conversion Attempted");
  }
  return {
    r: parseInt(conversion[1], 16),
    g: parseInt(conversion[2], 16),
    b: parseInt(conversion[3], 16),
  };
};
export const noOp = () => {};
export const findBadgeById = (id: string): IBadge | undefined =>
  badges.find((b) => b._id === id) as IBadge;
export const isDarkTheme = (themeId: string): boolean => {
  return themeId === Theme.DARK;
};

// Controls
/**
 * Returns the required controls for each given resource;
 */
export const findControls = (resource: ResourceInfo): Controls[] => {
  const controls: Controls[] = [];
  if (
    resource.resourceType === ResourceType.TOPIC ||
    resource.resourceType === ResourceType.QUESTION ||
    resource.resourceType === ResourceType.BIBLEBOOK
  ) {
    controls.push(Controls.open_page);
  } else {
    controls.push(Controls.fullscreen);
  }
  if (resource.api) {
    controls.push(Controls.dropdown);
  }
  return controls;
};

/**
 * Retrieves an external link for a resource if applicable
 */
export const getLink = (resource: ResourceInfo): string => {
  if (resource.resourceType === ResourceType.BIBLEBOOK)
    return `${import.meta.env.VITE_FRONTEND_URI}/bible/book/${resource._id}`;
  if (
    resource.resourceType === ResourceType.TOPIC ||
    resource.resourceType === ResourceType.QUESTION
  ) {
    return `${import.meta.env.VITE_FRONTEND_URI}/topic/${resource._id}`;
  } // TODO: In the future, maybe a ministry's link could be immediately visible in the card
  else {
    return `${import.meta.env.VITE_FRONTEND_URI}/resource/${resource._id}`;
  }
};
/**
 * Retrieves an external link for a resource by its ID
 */
export const getResourceLinkById = (resourceId: string): string =>
  `${import.meta.env.VITE_FRONTEND_URI}/resource/${resourceId}`;
/**
 * Retrieves an external link for a topic by its ID
 */
export const getTopicLinkById = (topicId: string): string =>
  `${import.meta.env.VITE_FRONTEND_URI}/topic/${topicId}`;

/**
 * Fetches data from the backend.
 * @returns Promise of data (can vary)
 */
export const fetcher = async (
  url: string,
  attempts: number = 4,
): Promise<any> => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (e) {
    if (isAxiosError(e)) {
      const retry =
        !e.response ||
        ([502, 503, 504].includes(e.response.status) && attempts > 1);

      if (retry && attempts > 1) {
        await new Promise((r) => setTimeout(r, 3000));
        return fetcher(url, attempts - 1);
      }
      throw new Error(e.response?.data?.error || `Request Failed.`);
    }
    throw e;
  }
};

/**
 * Fetches data from the backend, with a timeout.
 * @returns Promise of data (can vary)
 */
export const timeoutFetcher = (url: string, timeout: number) =>
  axios.get(url, { timeout }).then((res) => res.data);
