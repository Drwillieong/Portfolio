import { ChevronRight } from "lucide-react";
import BadgeProject from "./BadgeProject";

export interface InfosProjectProps {
  title: string;
  description: string;
  color: string;
  list: { title: string; link: string }[];
  stack: string[];
}

export default function InfosProject({
  title,
  description,
  color,
  list,
  stack,
}: InfosProjectProps) {
  return (
    <div className="flex flex-col gap-4 w-[35%] h-full">
      <h2 className="text-3xl font-bold">{title}</h2>

      <p className="text-foreground-muted text-base font-normal">
        {description}
      </p>

      <ul className="flex flex-col gap-1 font-medium">
        {list.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="flex flex-row gap-2 items-center justify-start text-sm text-foreground-muted"
          >
            <ChevronRight size={14} style={{ color: color }} />
            {item.title}
          </a>
        ))}
      </ul>

      <div className="flex flex-row flex-wrap gap-2">
        {stack.map((item, index) => (
          <BadgeProject key={index} name={item} />
        ))}
      </div>
    </div>
  );
}
