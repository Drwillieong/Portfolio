import type { ComponentType } from "react";

export type UserSocial = {
  name: string;
  url: string;
  icon: ComponentType<{ size?: number; color?: string }>;
};

export type TitleCategoryProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export type TextLinkProps = {
  text: string;
  url: string;
};
