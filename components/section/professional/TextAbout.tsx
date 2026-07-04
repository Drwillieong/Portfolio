import { TextLink } from "@/components/utils/TextLink";

export default function TextAboutPro() {
  return (
    <div className="flex flex-col gap-4 text-sm text-muted-foreground">
      <p>
        Développeur Full-Stack spécialisé dans la création d&apos;applications
        web modernes, performantes et responsives. Je travaille avec{" "}
        <TextLink text="React" url="#stack" />,{" "}
        <TextLink text="Tailwind CSS" url="#stack" />,{" "}
        <TextLink text="TypeScript" url="#stack" />,{" "}
        <TextLink text="Next.js" url="#stack" />,{" "}
        <TextLink text="Vite" url="#stack" /> et{" "}
        <TextLink text="Express.js" url="#stack" />
        {" et l'écosystème moderne du web."}
      </p>
      <p>
        Autonome sur l&apos;ensemble d&apos;un projet - de l&apos;architecture
        backend à l&apos;interface utilisateur - j&apos;accorde une attention
        particulière à la qualité du code, aux performances et à
        l&apos;expérience utilisateur. Curieux et en veille constante,
        j&apos;aime explorer de nouvelles technologies pour construire des
        solutions concrètes et pérennes.
      </p>
    </div>
  );
}
