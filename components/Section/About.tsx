"use client";

import Link from "next/link";

function About() {
  return (
    <section
      className="flex justify-start items-start gap-1.5 flex-col"
      id="about"
    >
      <h3 className="text-2xl font-bold">À Propos</h3>
      <p className="text-foreground text-sm">
        Je suis étudiant en{" "}
        <span className="text-foreground font-medium">BTS SIO option SLAM</span>{" "}
        et développeur
        <span className="text-foreground font-medium mx-1">Full-Stack</span>
        passionné par la création d’applications web modernes, rapides et
        responsives. Je travaille principalement avec <TextLink text="React" />,{" "}
        <TextLink text="Tailwind CSS" />, <TextLink text="TypeScript" />,{" "}
        <TextLink text="Next.js" />, <TextLink text="Vite" />,{" "}
        <TextLink text="Express.js" /> et les technologies modernes du web.
        J’aime apprendre continuellement, expérimenter de nouvelles technologies
        et développer des projets concrets autour du web et du logiciel.
      </p>
    </section>
  );
}

function TextLink({ text }: { text: string }) {
  return (
    <Link
      href="#stack"
      className="text-foreground font-medium underline-offset-2 underline"
    >
      {text}
    </Link>
  );
}

export default About;
