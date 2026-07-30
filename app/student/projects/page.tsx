import HeroCategoryProject from "@/components/section/projets/HeroProject";
import ProjetFav from "@/components/section/projets/ProjetFav";

export default function Projects() {
  return (
    <main className="max-w-220 mx-auto py-12 sm:py-24 px-6 space-y-10">
      <HeroCategoryProject
        title="Mes projets favoris"
        description="Découvrez une sélection de mes travaux les plus significatifs."
      />
      <ProjetFav />
    </main>
  );
}
