import { noOp } from "@libs/functions";
import React from "react";
import { type ColorTheme, Theme } from "@libs/Types";
import { Colors } from "@libs/globals";

export const themeKey = "theme";
export const sidebarKey = "sidebar";

// TODO: In the future, this can maybe hold more information
export const ModalContext = React.createContext({
  visible: true,
  setVisible: () => {},
});
export const ThemeContext = React.createContext<{
  theme: ColorTheme;
  setTheme: React.Dispatch<React.SetStateAction<ColorTheme>>;
}>({
  theme:
    window.localStorage.getItem(themeKey) === Theme.LIGHT
      ? Colors[Theme.LIGHT]
      : Colors[Theme.DARK],
  setTheme: noOp,
});

export const SidebarContext = React.createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  open: window.localStorage.getItem(sidebarKey) === "true" ? true : false,
  setOpen: noOp,
});
