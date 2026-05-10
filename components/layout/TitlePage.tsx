export default function TitlePage({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center overflow-hidden px-4">
      <h3
        className="text-center font-black uppercase leading-none tracking-tighter"
        style={{ fontSize: "clamp(60px, 15vw, 200px)" }}
      >
        {title}
      </h3>

      {description && (
        <p className="text-xl font-normal text-foreground/70 z-10 mt-4 text-center">
          {description}
        </p>
      )}
    </div>
  );
}
