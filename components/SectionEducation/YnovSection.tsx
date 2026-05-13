"use client";

import { team6_data, ynov_data } from "@/data/stud";
import CardDataEducation from "../ui/CardDataEducation";

export default function YnovSection() {
  return (
    <section
      className="max-w-7xl mx-auto relative flex flex-col gap-3"
      id="works"
    >
      <h3 className="text-2xl font-bold">Mon École & Mon Entreprise</h3>

      <CardDataEducation
        src={ynov_data.image}
        title={ynov_data.name}
        subtitle={`${ynov_data.location} - ${ynov_data.type}`}
        titleDescription={`${ynov_data.start} - ${ynov_data.end}`}
        description={ynov_data.description}
        list={ynov_data.specialisations}
      />

      <CardDataEducation
        src={team6_data.image}
        title={team6_data.name}
        subtitle={`${team6_data.location} - ${team6_data.type}`}
        titleDescription={`${team6_data.start} - ${team6_data.end}`}
        description={team6_data.description}
        list={team6_data.stacks}
      />
    </section>
  );
}
