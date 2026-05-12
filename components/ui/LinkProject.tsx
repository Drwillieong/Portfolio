import Link from "next/link";

import { ExternalLink, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface LinkProjectProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  color: string;
  className?: string;
}

export default function LinkProject({
  icon: Icon,
  title,
  description,
  link,
  color,
  className,
}: LinkProjectProps) {
  return (
    <Link
      href={link}
      className={cn(
        "group flex flex-row items-center justify-between bg-card border border-border rounded-xl",
        className,
      )}
    >
      <div className="flex w-full items-center justify-between gap-2 p-2 text-left text-sm font-medium outline-none transition-all">
        <div className="flex items-center gap-2">
          <div
            className="flex items-center justify-center size-11 rounded-lg"
            style={{
              backgroundColor: `${color}20`,
              color: color,
            }}
          >
            <Icon size={24} />
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-base font-medium">{title}</span>
            <p className="text-xs font-normal text-muted-foreground">
              {description}
            </p>
          </div>
        </div>

        <div className="text-sm text-white font-medium size-11 flex items-center justify-center">
          <ExternalLink
            size={16}
            className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
      </div>
    </Link>
  );
}
