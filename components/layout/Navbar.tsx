import IconNav from "../Navbar/IconNav";
import NavBar from "../Navbar/NavBarContainer";

export default function Page() {
  return (
    <div className="fixed z-50 top-4 right-4 left-4 flex flex-row items-center justify-between gap-4">
      <IconNav />

      <NavBar />
    </div>
  );
}
