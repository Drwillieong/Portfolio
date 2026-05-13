import { certifications } from "@/data/certification";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger2,
} from "@/components/ui/accordion";

export default function Certifications() {
  return (
    <section
      className="max-w-7xl mx-auto relative flex flex-col gap-3"
      id="works"
    >
      <h3 className="text-2xl font-bold">Mes Certifications</h3>

      <Accordion type="single" collapsible className="w-full space-y-1">
        {certifications.map((cert, index) => (
          <AccordionItem
            key={cert.id}
            value={`item-${index + 1}`}
            className="rounded-xl"
          >
            <AccordionTrigger2
              imageSrc={cert.image}
              title={cert.title}
              more={cert.issuer}
              company={cert.issuer}
              className="p-4"
            />
            <AccordionContent className="px-4">
              <div className="flex flex-col gap-1.5">
                <p className="text-sm text-foreground font-medium">
                  {cert.date}
                </p>
                <p className="text-foreground">{cert.description}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
