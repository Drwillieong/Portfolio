"use client";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/Navbar";
import TitlePage from "@/components/layout/TitlePage";

export default function Projects() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center text-4xl font-semibold bg-background text-foreground">
      <NavBar />

      <TitlePage
        title="Projets"
        description="Découvrez mes projets et réalisations !"
      />

      <Footer />
    </div>
  );
}
