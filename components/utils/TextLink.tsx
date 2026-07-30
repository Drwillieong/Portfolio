import { TextLinkProps } from "@/types/types";
import Link from "next/link";

export function TextLink({ text, url }: TextLinkProps) {
  return (
    <Link
      href={url}
      className="text-foreground font-medium underline-offset-2 underline"
    >
      {text}
    </Link>
  );
}
