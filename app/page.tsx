import About from "@/components/Section/About";
import Education from "@/components/Section/Education";
import Galerie from "@/components/Section/Galerie";
import GithubGraph from "@/components/Section/GithubGraph";
import Hero from "@/components/Section/Hero";
import Skills from "@/components/Section/Skills";
import Works from "@/components/Section/Works";

export default function Home() {
  return (
    <main className="max-w-212 mx-auto py-12 sm:py-24 px-6 space-y-10">
      <Hero />
      <About />
      <GithubGraph />
      <Galerie />
      <Works />
      <Education />
      <Skills />
    </main>
  );
}
