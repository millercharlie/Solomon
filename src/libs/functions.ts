import type { IBadge } from "@libs/Types";
import badges from "../database/badges.json";

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
