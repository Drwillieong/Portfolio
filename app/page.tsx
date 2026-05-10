"use client";

import { useState } from "react";

import NavBar from "@/components/layout/Navbar";

export default function Home() {
  const [active, setActive] = useState(false);

  return (
    <div className="flex flex-col flex-1 items-center justify-center text-4xl font-semibold bg-background text-foreground">
      <NavBar />

      {/* <div className="flex flex-col gap-0 items-center justify-center select-none">
        <h1
          className={`font-black uppercase text-foreground text-[350px] ${active ? "animate-spin" : "animation-none "}`}
        >
          Alexis
        </h1>
        <h4 className="text-2xl font-light text-foreground/70">
          Full Stack Developer{" "}
          <button onClick={() => setActive(!active)}>/</button> Student
        </h4>
      </div> */}
    </div>
  );
}
