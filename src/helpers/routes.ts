import React from "react";
import {
  MdHome,
  MdLogout,
  MdOutlineSettings,
  MdPersonOutline,
} from "react-icons/md";

export enum RoutePath {
  LOG_IN = "/login",
  FORGOT_PASSWORD = "/forgot_password",
  SIGN_UP = "/sign_up",
  HOME = "/",
  EMPLOYEES = "/employees",
  MY_ACCOUNT = "/my_account",
  MY_SALARY = "/my_salary",
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
    name: "my_account",
    path: RoutePath.MY_ACCOUNT,
    icon: MdPersonOutline,
  },
  {
    name: "my_salary",
    path: RoutePath.MY_SALARY,
    icon: MdPersonOutline,
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
  },
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
