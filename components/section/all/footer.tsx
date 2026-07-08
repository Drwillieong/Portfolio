export default function Footer() {
  return (
    <div className="relative mt-10 flex w-full flex-col items-center justify-center overflow-hidden border-t border-border/80 py-10">
      <p className="z-10 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.
      </p>
    </div>
  );
}
