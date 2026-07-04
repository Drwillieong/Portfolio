import { TitleCategoryProps } from "@/types/types";

export default function TitleCategory({
  id,
  title,
  children,
}: TitleCategoryProps) {
  return (
    <section className="flex flex-col gap-2" id={id}>
      <h2 className="text-xs font-semibold text-muted-foreground">{title}</h2>

      {children}
    </section>
  );
}
