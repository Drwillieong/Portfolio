import { pages } from "@/data/navbar";
import ItemsNav from "./ItemsNav";
import SwitchTheme from "./SwitchTheme";
import ContactNav from "./ContactNav";
import DropNav from "./DropNav";

export default function NavBar() {
  return (
    <div className="h-10.5 w-fit border border-nav-border bg-nav-bg rounded-full flex flex-row items-center justify-center gap-1.5 p-1.5">
      {pages.map((page) => (
        <ItemsNav key={page.id} title={page.name} link={page.url} />
      ))}

      <DropNav />

      <div className="h-[70%] rounded-full w-px border-l border-nav-border" />

      <SwitchTheme />
      <ContactNav />
    </div>
  );
}
