export default function BadgeProject({ name }: { name: string }) {
  return (
    <div className="border border-badge-border bg-badge-bg rounded-lg px-2 py-1 gap-1.5 flex flex-row items-center">
      <div className="size-4 rounded-full bg-red-500" />
      <p className="text-xs font-normal text-foreground">{name}</p>
    </div>
  );
}
