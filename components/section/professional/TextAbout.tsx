import { TextLink } from "@/components/utils/TextLink";

export default function TextAboutPro() {
  return (
    <div className="flex flex-col gap-4 text-sm text-muted-foreground">
      <p>
        Full-Stack Developer specialized in building modern,
        performant and responsive web applications. I work with{" "}
        <TextLink text="React" url="#skills" />,{" "}
        <TextLink text="Tailwind CSS" url="#skills" />,{" "}
        <TextLink text="TypeScript" url="#skills" />,{" "}
        <TextLink text="Next.js" url="#skills" />,{" "}
        <TextLink text="Node.js" url="#skills" /> and{" "}
        <TextLink text="Express.js" url="#skills" />
        {" and the modern web ecosystem."}
      </p>
      <p>
        Autonomous across the entire project - from backend architecture to the
        user interface - I pay particular attention to code quality,
        performance and user experience. Curious and constantly keeping up with
        the latest trends, I enjoy exploring new technologies to build concrete
        and sustainable solutions.
      </p>
    </div>
  );
}
