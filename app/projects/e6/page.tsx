"use client";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/Navbar";
import TitlePage from "@/components/layout/TitlePage";

export default function ProjectsE6() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center text-4xl font-semibold bg-background text-foreground">
      <NavBar />

      <TitlePage
        title="Projets E6"
        description="Découvrez mes projets et réalisations E6 !"
      />

      <Footer />
    </div>
  );
}
