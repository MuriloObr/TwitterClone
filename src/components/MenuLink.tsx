interface MenuLinkProps {
  linkName: string;
  activeLink?: boolean;
}

export function MenuLink({ linkName, activeLink }: MenuLinkProps) {
  const boldOrNot = activeLink
    ? " font-bold after:block after:absolute after:inset-x-0 after:bottom-1 after:mx-auto after:bg-twitter-blue after:w-14 after:h-1 after:rounded-full"
    : "";
  return (
    <div
      className={
        "h-fit p-4 relative border-b-[1px] border-slate-400 tracking-tighter text-center cursor-pointer transition ease-in-out duration-200 hover:bg-gray-600/30" +
        boldOrNot
      }
    >
      {linkName}
    </div>
  );
}
