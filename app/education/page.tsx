import HeroEducation from "@/components/SectionEducation/Bts";
import BtsSection from "@/components/SectionEducation/BtsSection";
import YnovSection from "@/components/SectionEducation/YnovSection";

export default function Education() {
  return (
    <main className="max-w-212 mx-auto py-12 sm:py-24 px-6 space-y-10">
      <HeroEducation />
      <BtsSection />
      <YnovSection />
    </main>
  );
}
