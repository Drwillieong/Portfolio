import React from "react";
import { CardSkill } from "../ui/CardSkill";
import { Frameworks, Languages, Logiciels } from "@/data/stacks";

export default function Skills() {
  return (
    <div className="flex flex-col gap-3" id="skills">
      <h3 className="text-2xl font-bold">Compétences</h3>

      <div className="flex flex-col gap-4" id="stacks">
        <div className="w-full flex flex-col gap-1.5">
          <h5 className="text-md font-medium">Langage</h5>

          <div className="flex flex-row gap-2 flex-wrap">
            {Languages.map((skill) => (
              <CardSkill
                key={skill.id}
                image={skill.image}
                title={skill.name}
              />
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col gap-1.5" id="frameworks">
          <h5 className="text-md font-medium">Frameworks & Technologie</h5>

          <div className="flex flex-row gap-2 flex-wrap">
            {Frameworks.map((skill) => (
              <CardSkill
                key={skill.id}
                image={skill.image}
                title={skill.name}
              />
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col gap-1.5" id="software">
          <h5 className="text-md font-medium">Logiciel</h5>

          <div className="flex flex-row gap-2 flex-wrap">
            {Logiciels.map((skill) => (
              <CardSkill
                key={skill.id}
                image={skill.image}
                title={skill.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
