"use client";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/Navbar";
import TitlePage from "@/components/layout/TitlePage";

export default function About() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center text-4xl font-semibold bg-background text-foreground">
      <NavBar />

      <TitlePage
        title="À propos"
        description="Découvrez mon parcours et mes compétences !"
      />

      <Footer />
    </div>
  );
}
