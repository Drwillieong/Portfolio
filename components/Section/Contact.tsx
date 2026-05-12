"use client";

import { socials } from "@/data/user";

export default function Contact() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-6">
      <h3 className="md:text-5xl font-bold text-center">Contact Me</h3>
      <p className="text-center text-md w-[80%] text-white">
        Une question ou un projet ? Contactez-moi directement sur{" "}
        <a
          href={socials.linkedin}
          className="text-sz underline-offset-2 underline mx-1"
        >
          LinkedIn
        </a>{" "}
        et je vous répondrai dès que possible.
      </p>
      <div></div>
    </div>
  );
}
