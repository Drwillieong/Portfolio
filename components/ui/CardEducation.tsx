import Image from "next/image";

export function CardEducation({
  imageSrc,
  title,
  company,
  date,
}: {
  imageSrc: string;
  title: string;
  company: string;
  date?: string;
}) {
  return (
    <div className="flex flex-row items-center justify-between rounded-xl">
      <div className="group flex flex-col md:flex-row w-full items-start md:items-center justify-between gap-4 p-4 text-left text-sm font-medium outline-none transition-all">
        <div className="flex flex-row items-center gap-4">
          <Image
            src={imageSrc}
            width={44}
            height={44}
            alt="icon"
            className="h-11 w-11 rounded-full object-cover"
          />
          <div className="flex flex-col gap-0.5">
            <span className="text-base font-medium">{company}</span>
            <p className="text-xs font-normal text-muted-foreground">{title}</p>
          </div>
        </div>

        <p className="text-sm text-foreground font-normal">{date}</p>
      </div>
    </div>
  );
}
