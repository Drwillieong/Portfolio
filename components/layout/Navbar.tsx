import IconNav from "../Navbar/IconNav";
import MobileNav from "../Navbar/MobileNav";
import NavBarContainer from "../Navbar/NavBarContainer";

export default function Navbar() {
  return (
    <>
      <div className="hidden md:flex fixed z-50 top-4 right-4 left-4 flex-row items-center justify-between gap-4">
        <IconNav />
        <NavBarContainer />
      </div>

      <MobileNav />
    </>
  );
}
