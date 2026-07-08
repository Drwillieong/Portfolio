export default function Footer() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden border-t border-border/80 pt-10">
      <p className="z-10 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.
      </p>
    </div>
  );
}
