import Link from "next/link";

export default function ContactNav() {
  return (
    <Link
      href="/contact"
      className="text-[13px] font-normal px-3.5 h-full rounded-full flex flex-row items-center justify-center transition-all duration-500 bg-linear-to-t from-nav-item-bg-active/50 to-nav-item-bg-active text-nav-item-text-active hover:text-nav-item-text-active/80"
    >
      Contact
    </Link>
  );
}
