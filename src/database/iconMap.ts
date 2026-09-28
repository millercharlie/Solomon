import type { IconComponent } from "@libs/Types";

// For badge icons
const badgeModules = import.meta.glob<IconComponent>("@assets/icons/badges/*", {
  eager: true,
  query: "?react",
  import: "default",
});
export const badgeIconMap: Record<string, IconComponent> = Object.fromEntries(
  Object.entries(badgeModules).map(([path, Component]) => {
    const key = path.split("/assets/icons/")[1];
    return [key, Component];
  }),
);

// For platforms
const platformModules = import.meta.glob<IconComponent>(
  "@assets/icons/platforms/*.svg",
  {
    eager: true,
    query: "?react",
    import: "default",
  },
);
export const platformIconMap: Record<string, IconComponent> =
  Object.fromEntries(
    Object.entries(platformModules).map(([path, Component]) => {
      const key = path.split("/assets/icons/platforms/")[1].split(".svg")[0];
      return [key, Component];
    }),
  );

// For other icons
const iconModules = import.meta.glob<IconComponent>("@assets/icons/*.svg", {
  eager: true,
  query: "?react",
  import: "default",
});
export const iconMap: Record<string, IconComponent> = Object.fromEntries(
  Object.entries(iconModules).map(([path, Component]) => {
    const key = path.split("/assets/icons/")[1];
    return [key, Component];
  }),
);
