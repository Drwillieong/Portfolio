"use client";

export default function HeroCategoryProject({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="flex justify-center items-center gap-4">
      <div className="w-full flex flex-col gap-2 items-center justify-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {title || "Titre non trouvé"}
        </h2>
        <p className="text-muted-foreground md:text-xl/relaxed w-[80%] text-center lg:text-base/relaxed xl:text-xl/relaxed">
          {description || "Description non trouvée"}
        </p>
      </div>
    </section>
  );
}
