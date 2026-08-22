"use client";

import TitleCategory from "@/components/layout/TitleCategory";
import TextAboutPro from "@/components/section/professional/TextAbout";
import TextAboutStud from "@/components/section/student/TextAbout";
import { usePathname } from "next/navigation";

export default function About() {
  const pathname = usePathname();
  const isProfessional = pathname.startsWith("/professional");

  return (
    <TitleCategory id="about" title="About">
      {/* function that changes the text based on the selected category at the start */}
      {/* if the link is /professional use TextAboutPro */}
      {/* if the link is /student use TextAboutStud */}
      {isProfessional ? <TextAboutPro /> : <TextAboutStud />}
    </TitleCategory>
  );
}
