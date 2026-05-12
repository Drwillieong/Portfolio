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
    <div
      className={cn(
        "flex flex-row items-center justify-between bg-white/3 rounded-xl",
        className,
      )}
    >
      <div className="group flex w-full items-center justify-between gap-4 p-4 text-left text-sm font-medium outline-none transition-all">
        <div className="flex items-center gap-4">
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

        <Link
          href={link}
          className="text-sm text-white font-medium size-11 flex items-center justify-center"
        >
          <ExternalLink size={16} />
        </Link>
      </div>
    </div>
  );
}
