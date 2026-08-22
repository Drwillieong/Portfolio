import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-8 sm:py-12 min-h-screen flex flex-col justify-between">
      <div className="flex flex-col gap-4 items-center justify-center grow text-center">
        <h1 className="text-9xl font-bold tracking-tight">404</h1>
        <p className="text-muted-foreground text-sm">
          The page you are looking for does not exist.
        </p>
        <Link href="/">
          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/85 px-4 cursor-pointer"
          >
            Back to Home
          </Button>
        </Link>
      </div>
    </main>
  );
}
