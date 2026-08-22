import { TextLink } from "@/components/utils/TextLink";

export default function TextAboutStud() {
  return (
    <div className="flex flex-col gap-4 text-sm text-muted-foreground">
      <p>
        Student in{" "}
        <span className="text-foreground font-medium">
          Bachelor of Science in Information Technology
        </span>{" "}
        at City College of Calamba (2023&ndash;Present), I am training in
        Full-Stack development with a real passion for building modern and
        performant web applications. I primarily work with{" "}
        <TextLink text="React" url="#skills" />,{" "}
        <TextLink text="Tailwind CSS" url="#skills" />,{" "}
        <TextLink text="TypeScript" url="#skills" />,{" "}
         <TextLink text="PHP" url="#skills" />,{" "}
        <TextLink text="MySql" url="#skills" />,{" "}
       
       
        <TextLink text="Node.js" url="#skills" /> and{" "}
     
      </p>
      <p>
        Alongside my studies, I take on many personal and school projects to
        progress faster &mdash; employee loan systems, laundry booking apps,
        POS &amp; inventory tools, and interactive portfolios &mdash; applying
        what I learn to build concrete, user-friendly solutions.
      </p>
      <p>
        I am constantly exploring new technologies and best practices to grow as
        a developer and deliver sustainable, high-quality web applications.
      </p>
    </div>
  );
}
