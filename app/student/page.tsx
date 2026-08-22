import About from "@/components/section/all/about";
import Hero from "@/components/section/all/Hero";
import { workData } from "@/data/work";
import CompXp from "@/components/xp";
import { educationData } from "@/data/school";
import Footer from "@/components/section/all/footer";
import Skills from "@/components/section/all/skills";
import ProjectStud from "@/components/section/student/ProjectStud";

export default function StudPage() {
  return (
    <main className="max-w-220 mx-auto py-12 sm:py-24 px-6 space-y-10">
      <Hero />
      <About />
      <CompXp data={workData} id="work" title="Professional Experience" />
      <CompXp data={educationData} id="school" title="Formation" />
      <ProjectStud />
      <Skills />
      <Footer />
    </main>
  );
}
