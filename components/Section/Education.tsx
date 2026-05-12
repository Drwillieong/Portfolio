import { educationData } from "@/data/user";
import Image from "next/image";

export default function Education() {
  return (
    <section className="max-w-7xl mx-auto relative flex flex-col gap-3">
      <h3 className="text-2xl font-bold">Mes Études</h3>

      <div className="w-full space-y-1">
        {educationData.map((edu, index) => (
          <CardEducation
            key={index}
            imageSrc={edu.image}
            title={edu.title}
            company={edu.company}
            date={edu.date}
          />
        ))}
      </div>
    </section>
  );
}

function CardEducation({
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
    <div className="flex flex-row items-center justify-between bg-white/3 rounded-xl">
      <div className="group flex w-full items-center justify-between gap-4 p-4 text-left text-sm font-medium outline-none transition-all">
        <div className="flex items-center gap-4">
          <Image
            src={imageSrc}
            width={44}
            height={44}
            alt="icon"
            className="h-11 w-11 rounded-full object-cover"
          />
          <div className="flex flex-col gap-0.5">
            <span className="text-base font-medium">{title}</span>
            <p className="text-xs font-normal text-muted-foreground">
              {company}
            </p>
          </div>
        </div>

        <p className="text-sm text-white font-medium">{date}</p>
      </div>
    </div>
  );
}
