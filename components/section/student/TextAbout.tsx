import { TextLink } from "@/components/utils/TextLink";

export default function TextAboutStud() {
  return (
    <div className="flex flex-col gap-4 text-sm text-muted-foreground">
      <p>
        Étudiant en{" "}
        <span className="text-foreground font-medium">BTS SIO option SLAM</span>{" "}
        à Ynov Campus Paris, je me forme au développement Full-Stack avec une
        vraie passion pour la création d&apos;applications web modernes et
        performantes. Je travaille principalement avec{" "}
        <TextLink text="React" url="#stack" />,{" "}
        <TextLink text="Tailwind CSS" url="#stack" />,{" "}
        <TextLink text="TypeScript" url="#stack" />,{" "}
        <TextLink text="Next.js" url="#stack" />,{" "}
        <TextLink text="Vite" url="#stack" /> et{" "}
        <TextLink text="Express.js" url="#stack" />.
      </p>
      <p>
        En parallèle de mes études, je multiplie les projets personnels pour
        progresser plus vite que le rythme scolaire : applications de gestion,
        plateformes web, outils internes... J&apos;apprends aussi actuellement
        Angular en vue de mon prochain stage chez 6TEAM en tant que développeur
        Full-Stack.
      </p>
      <p>
        Je suis actuellement à la recherche d&apos;une alternance en
        développement Full-Stack / Backend à partir de septembre 2026, en
        Île-de-France.
      </p>
    </div>
  );
}
