import { footerLinks } from "@/data/footer";
import Link from "next/link";

export default function FooterCard() {
  return (
    <div className="w-full rounded-2xl bg-bg-card py-8 px-10 md:py-12 md:px-14 flex flex-col xl:flex-row gap-10 2xl:gap-30">
      <div className="flex flex-col gap-4 w-full xl:w-125 shrink-0">
        <h2 className="text-3xl md:text-4xl font-bold">
          Alexis <span>De Jesus</span>
        </h2>
        <p className="text-foreground-muted text-sm md:text-base font-medium ">
          Développeur passionné par la création d’expériences web modernes et
          intuitives. J’aime transformer des idées en applications concrètes,
          alliant design, performance et utilité. Du front-end à la logique
          back-end, chaque ligne de code est pensée pour créer quelque chose de
          fluide.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 md:gap-0 md:grid-cols-4 w-full mt-4 xl:mt-0">
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className="flex flex-col gap-4">
            <h3 className="font-medium text-base text-foreground-muted">
              {category}
            </h3>
            <div className="flex flex-col gap-2.5">
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={link.link}
                  className="text-foreground hover:text-foreground/60 text-sm font-semibold transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
