"use client";
import NavBar from "@/components/layout/Navbar";
import { Section } from "@/components/layout/Section";

export default function Contact() {
  const handlesubmit = () => {};

  return (
    <div className="flex flex-col flex-1 items-center justify-center text-4xl font-semibold bg-background text-foreground">
      <NavBar />

      <Section className="flex flex-col items-center justify-center gap-8 w-full max-w-xl h-[70vh]">
        <div className="flex flex-col gap-1.5 items-center justify-center">
          <h1 className="text-xl font-bold">Envoyer moi un message</h1>
          <p className="text-foreground-muted font-medium text-sm">
            Votre message sera traité dans les plus brefs délais.
          </p>
        </div>

        <form action={handlesubmit} className="flex flex-col gap-4 w-full">
          <Input id="name" label="Name" type="text" placeholder="Votre nom" />
          <Input
            id="email"
            label="Email"
            type="email"
            required
            placeholder="Votre email"
          />
          <Input
            id="message"
            label="Message"
            type="textarea"
            required
            placeholder="Votre message"
          />

          <button
            type="submit"
            className="bg-foreground text-sm text-background hover:bg-foreground/60 rounded-lg py-3 px-4 mt-2 cursor-pointer transition-colors duration-300 font-medium"
          >
            Envoyer
          </button>
        </form>
      </Section>
    </div>
  );
}

function Input({
  id,
  label,
  type,
  required,
  placeholder,
}: {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label htmlFor={id} className="font-medium text-sm text-foreground">
        {label}{" "}
        <span
          className={`ml-0.5 text-xs font-normal ${required ? "text-red-500" : "text-foreground-muted"}`}
        >
          {required ? "*" : "(optional)"}
        </span>
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="bg-input-bg border font-normal text-sm border-input-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-input-border focus:border-transparent"
        required={required}
      />
    </div>
  );
}
