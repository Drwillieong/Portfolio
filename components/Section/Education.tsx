import { educationData } from "@/data/user";
import { CardEducation } from "../ui/CardEducation";

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
