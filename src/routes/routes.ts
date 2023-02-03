import React from "react";
import {
  MdHome,
  MdMessage,
  MdLogout,
  MdOutlineSettings,
  MdPeopleOutline,
  MdPersonOutline,
  MdOutlineGroups,
} from "react-icons/md";

export enum RoutePath {
  LOG_IN = "/login",
  FORGOT_PASSWORD = "/forgot_password",
  SIGN_UP = "/sign_up",
  HOME = "/",
  MESSAGES = "/messages",
  STAFF = "/staff",
  STUDENTS = "/students",
  GROUPS = "/groups",
  SETTINGS = "/settings",
  LOG_OUT = "/log_out",
}

export const defaultSidebarNavItems: SidebarNavItem[] = [
  {
    name: "home",
    path: RoutePath.HOME,
    icon: MdHome,
  },
  {
    name: "messages",
    path: RoutePath.MESSAGES,
    icon: MdMessage,
  },
  {
    name: "staff",
    path: RoutePath.STAFF,
    icon: MdPeopleOutline,
  },
  {
    name: "students",
    path: RoutePath.STUDENTS,
    icon: MdPersonOutline,
  },
  {
    name: "groups",
    path: RoutePath.GROUPS,
    icon: MdOutlineGroups,
  },
  {
    name: "settings",
    path: RoutePath.SETTINGS,
    icon: MdOutlineSettings,
  },
  {
    name: "logout",
    path: RoutePath.LOG_OUT,
    icon: MdLogout,
  }
];

export interface SidebarNavItem {
  name: string;
  path: string;
  icon: React.ComponentType;
}

export interface Route {
  name: string;
  path: string;
  SidebarNavItems?: SidebarNavItem[];
  component: React.ComponentType;
}
