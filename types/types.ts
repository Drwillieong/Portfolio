import type { ComponentType } from "react";

export type UserSocial = {
  name: string;
  url: string;
  icon: ComponentType<{ size?: number; color?: string }>;
};
