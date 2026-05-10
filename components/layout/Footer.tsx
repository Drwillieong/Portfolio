import FooterCard from "../Footer/FooterCard";

export default function Footer() {
  return (
    <div className="w-full flex flex-col gap-0 p-10 absolute bottom-0 left-0 bg-background text-foreground">
      <FooterCard />

      <hr className="w-full border border-border h-px mt-12 mb-10" />

      <div className="flex flex-row items-center justify-between">
        <p className="text-sm font-normal">
          &copy; {new Date().getFullYear()} Alexis De Jesus. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}
