// import Image from "next/image";
// import { ExternalLink } from "lucide-react";
// import Link from "next/link";
import { certifications } from "@/data/certification";

// export default function Certifications() {
//   return (
//     <section className="flex flex-col gap-3">
//       <h3 className="text-2xl font-bold">Mes Certifications</h3>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//         {certifications.map((cert) => (
//           <Link
//             key={cert.id}
//             href={cert.pdf}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group flex w-full items-center justify-between gap-2 p-2 bg-card border border-border rounded-xl"
//           >
//             <div className="flex items-center gap-2">
//               <div className="flex items-center justify-center size-11 rounded-lg bg-muted shrink-0">
//                 <Image
//                   src={cert.image}
//                   width={28}
//                   height={28}
//                   alt={cert.issuer}
//                   className="object-contain"
//                 />
//               </div>
//               <div className="flex flex-col gap-0.5">
//                 <span className="text-base font-medium">{cert.title}</span>
//                 <p className="text-xs font-normal text-muted-foreground">
//                   {cert.issuer} · {cert.date}
//                 </p>
//               </div>
//             </div>
//             <div className="size-11 flex items-center justify-center shrink-0">
//               <ExternalLink
//                 size={16}
//                 className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//               />
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AccordionTrigger2,
} from "@/components/ui/accordion";
import { workData } from "@/data/user";

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
