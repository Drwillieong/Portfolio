import About from "@/components/section/all/about";
import Hero from "@/components/section/all/Hero";

export default function StudPage() {
  return (
    <main className="max-w-220 mx-auto py-12 sm:py-24 px-6 space-y-10">
      <Hero />
      <About />
    </main>
  );
}
