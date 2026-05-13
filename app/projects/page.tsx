import CategoryProject from "@/components/SectionProject/CategotyProject";
import HeroCategoryProject from "@/components/SectionProject/HeroCategoryProject";

export default function Projects() {
  return (
    <main className="max-w-212 mx-auto py-12 sm:py-24 px-6 space-y-10">
      <HeroCategoryProject />
      <CategoryProject />
    </main>
  );
}
