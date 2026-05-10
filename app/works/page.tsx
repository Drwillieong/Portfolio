"use client";
import NavBar from "@/components/layout/Navbar";
import TitlePage from "@/components/layout/TitlePage";

export default function Works() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center text-4xl font-semibold bg-background text-foreground">
      <NavBar />

      <TitlePage
        title="Formations"
        description="Découvrez ma formation et mon entreprise !"
      />
    </div>
  );
}
