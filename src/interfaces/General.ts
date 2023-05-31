import React from "react";

export type LayoutTypes = {
  title?: string;
  className?: string;
  children: React.ReactNode;
};

export interface ICustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: any;
  href?: string;
  type?: "button" | "reset" | "submit";
  title?: string;
  action?: (e: React.FormEvent<HTMLFormElement>) => void;
  styles?: string;
  isLoading?: boolean;
}

export type ToastProps = {
  message: string;
  position:
    | "bottom-center"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "top-left"
    | "top-right";
};