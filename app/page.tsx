import About from "@/components/Section/About";
import GithubGraph from "@/components/Section/GithubGraph";
import Hero from "@/components/Section/Hero";

export default function Home() {
  return (
    <main className="max-w-212 mx-auto py-12 sm:py-24 px-6 space-y-10">
      <Hero />
      <About />
      <GithubGraph />
    </main>
  );
}
