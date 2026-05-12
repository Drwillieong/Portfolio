import Image from "next/image";

export function CardSkill({ image, title }: { image: string; title: string }) {
  return (
    <div className="flex flex-row items-center justify-center gap-1 px-3 py-1 pl-2 rounded-lg bg-card border border-border text-sm text-white">
      <Image src={image} alt={title} width={30} height={30} />
      <p className="text-sm text-white">{title}</p>
    </div>
  );
}
