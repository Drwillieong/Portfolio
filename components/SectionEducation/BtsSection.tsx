import { bts_data, bts_option_data } from "@/data/stud";
import { Clock } from "lucide-react";
import Link from "next/link";

export default function BtsSection() {
  return (
    <section className="flex flex-col gap-3">
      <div className="rounded-lg p-4 sm:p-6 bg-muted/10 flex flex-col gap-2 border border-border transition-colors duration-300 hover:bg-muted/35 hover:border-border-hover">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm flex-1 min-w-0">
          <span>{bts_data.designation}</span>
          <span className="text-sz">•</span>
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <Clock size={12} />
            <span>{bts_data.time}</span>
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-semibold wrap-break-word">
          {bts_data.name}
        </h3>
        <p className="overflow-hidden text-muted-foreground text-sm leading-relaxed">
          {bts_data.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {bts_option_data.map((option, index) => (
          <OptionCard key={index} {...option} />
        ))}
      </div>
    </section>
  );
}

function OptionCard({
  name,
  designation,
  description,
  jobs,
  url,
}: {
  name: string;
  designation: string;
  description: string;
  jobs: string[];
  url: string;
}) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg p-4 bg-muted/10 flex flex-col gap-3 justify-between border border-border transition-colors duration-300 hover:bg-muted/35 hover:border-border-hover"
    >
      <div className="flex flex-col gap-1">
        <p className="text-xs text-muted-foreground">{designation}</p>
        <h4 className="text-base font-semibold">{name}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-1">
        {jobs.map((job) => (
          <span
            key={job}
            className="inline-flex items-center rounded-md border font-semibold transition-colors border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]"
          >
            {job}
          </span>
        ))}
      </div>
    </Link>
  );
}
