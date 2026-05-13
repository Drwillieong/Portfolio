import Image from "next/image";

export default function CardDataEducation({
  src,
  title,
  subtitle,
  titleDescription,
  description,
  list,
}: {
  src: string;
  title: string;
  subtitle: string;
  titleDescription: string;
  description: string;
  list: string[];
}) {
  return (
    <div className="w-full flex flex-col gap-4 p-4 ">
      <div className="group flex w-full items-center justify-between gap-4 text-left text-sm font-medium outline-none transition-all cursor-pointer">
        <div className="flex items-center gap-4">
          <Image
            src={src}
            alt="icon"
            width={44}
            height={44}
            className="h-11 w-11 rounded-lg object-cover"
          />
          <div className="flex flex-col gap-0.5">
            <span className="text-base font-medium">{title}</span>
            <p className="text-xs font-normal text-muted-foreground">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
      <div className="overflow-hidden text-sm">
        <div className="pt-0 pb-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-foreground font-medium">
              {titleDescription}
            </p>
            <p className="text-foreground">{description}</p>
            <div className="flex flex-wrap gap-1">
              {list.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center rounded-md border-transparent bg-secondary text-secondary-foreground px-1.5 py-0.5 text-[10px] font-semibold"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
