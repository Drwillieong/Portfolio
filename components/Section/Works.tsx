"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { workData } from "@/data/user";

export default function Works() {
  return (
    <section
      className="max-w-7xl mx-auto relative flex flex-col gap-3"
      id="works"
    >
      <h3 className="text-2xl font-bold">Mes Expériences</h3>

      <Accordion type="single" collapsible className="w-full space-y-1">
        {workData.slice(0, 3).map((work, index) => (
          <AccordionItem
            key={index}
            value={`item-${index + 1}`}
            className="rounded-xl"
          >
            <AccordionTrigger
              imageSrc={work.image}
              title={work.title}
              more={work.type}
              company={work.company}
              className="p-4"
            />
            <AccordionContent className="px-4">
              <div className="flex flex-col gap-1.5">
                <p className="text-sm text-foreground font-medium">
                  {work.date}
                </p>
                <p className="text-foreground">{work.description}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
