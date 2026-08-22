import { TextLink } from "@/components/utils/TextLink";

export default function TextAboutStud() {
  return (
    <div className="flex flex-col gap-4 text-sm text-muted-foreground">
      <p>
        Student in{" "}
        <span className="text-foreground font-medium">BTS SIO option SLAM</span>{" "}
        at Ynov Campus Paris, I am training in Full-Stack development with a
        real passion for building modern and performant web applications. I
        primarily work with{" "}
        <TextLink text="React" url="#stack" />,{" "}
        <TextLink text="Tailwind CSS" url="#stack" />,{" "}
        <TextLink text="TypeScript" url="#stack" />,{" "}
        <TextLink text="Next.js" url="#stack" />,{" "}
        <TextLink text="Vite" url="#stack" /> et{" "}
        <TextLink text="Express.js" url="#stack" />.
      </p>
      <p>
        Alongside my studies, I take on many personal projects to
        progress faster than the school pace: management applications,
        web platforms, internal tools... I&apos;m also currently
        learning Angular ahead of my upcoming internship at 6TEAM as a developer
        Full-Stack.
      </p>
      <p>
        I am currently looking for a work-study program in
        Full-Stack / Backend development starting September 2026, in
        Île-de-France.
      </p>
    </div>
  );
}
