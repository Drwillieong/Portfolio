import Link from "next/link";
import { Logo } from "../Icons/icon";

export default function IconNav() {
  return (
    <Link
      href="/"
      className="h-10.5 aspect-square border border-nav-border bg-nav-bg flex items-center justify-center rounded-full"
    >
      <Logo color="var(--foreground)" size={22} />
    </Link>
  );
}
