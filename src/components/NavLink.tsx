import Link from "next/link";

interface NavLinkProps {
  icon: React.JSX.Element;
  href: string;
  name: string;
}

export function NavLink({ icon, href, name }: NavLinkProps) {
  return (
    <Link
      href={`./${href}`}
      className="flex items-center w-fit gap-3 p-3 max-xl:py-3 rounded-full transition-all ease-in-out duration-200 hover:bg-zinc-500/40"
    >
      {icon}
      <span className="hidden xl:inline">{name}</span>
    </Link>
  );
}
