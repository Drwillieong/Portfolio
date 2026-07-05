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

export type XpMission = {
  title: string;
  bulletPoints: string[];
};

export type ArticleXpProps = {
  company: string;
  startDate: string;
  endDate: string;
  titleJob: string;
  stack: string;
  missions: XpMission[];
};

export type ShowMoreButtonProps = {
  isOpen: boolean;
  onClick: () => void;
  labelMore?: string;
  labelLess?: string;
};

export type CompXpProps = {
  data: ArticleXpProps[];
  id: string;
  title: string;
};
