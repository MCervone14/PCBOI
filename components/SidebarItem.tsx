import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  label: string;
  active: boolean;
  href: string;
}

const SidebarItem = ({ label, active, href }: SidebarItemProps) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1`,
        active && `text-white`
      )}
    >
      <p className="truncate w-full">{label}</p>
    </Link>
  );
};

export default SidebarItem;
