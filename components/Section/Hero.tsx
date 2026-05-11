"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { socials } from "@/data/user";

function Hero() {
  return (
    <section className="flex justify-between items-center gap-4">
      <div className="flex flex-col gap-3 justify-start items-start">
        <h1 className="md:text-5xl text-3xl font-bold">
          Salut, je suis Alexis <Coucou />
        </h1>
        <p className="lg:text-base md:text-lg max-w-[75%]">
          Développeur Full-Stack passionné par la création d’applications web
          modernes et performantes. Toujours en train d’apprendre et de créer.
          Connectons-nous sur
          <a
            href={socials.linkedin}
            className="text-sz underline-offset-2 underline mx-1"
          >
            LinkedIn
          </a>
          ou
          <a
            href={socials.github}
            className="text-sz underline-offset-2 underline mx-1"
          >
            GitHub
          </a>
        </p>
      </div>
      <div className="flex items-center justify-center shrink-0">
        <Image
          src="https://avatars.githubusercontent.com/u/150966588?v=4"
          alt="Image de profil Flytzi"
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>
    </section>
  );
}

export function Coucou() {
  return (
    <motion.div
      className="inline-block origin-[70%_70%] text-6xl cursor-pointer"
      animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      👋
    </motion.div>
  );
}

export default Hero;
