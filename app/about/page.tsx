import AboutProfile from "@/components/SectionAbout/About";
import Certifications from "@/components/SectionAbout/Certification";
import HeroAbout from "@/components/SectionAbout/Hero";

export default function About() {
  return (
    <main className="max-w-212 mx-auto py-12 sm:py-24 px-6 space-y-10">
      <HeroAbout />
      <AboutProfile />
      <Certifications />
    </main>
  );
}
