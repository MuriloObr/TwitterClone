import { NavLink } from "@/components/NavLink";
import { ProfileButton } from "./ProfileButton";
import { TweetDialog } from "./TweetDialog";
import Image from "next/image";
import Link from "next/link";
import twitterLogo from "../assets/twitter-logo.svg";
import { useContext, useState } from "react";
import { UserContext } from "@/app/contexts/userContext/UserContext";
import {
  House,
  Hash,
  Bell,
  EnvelopeSimple,
  FileText,
  BookmarkSimple,
  User,
  DotsThreeCircle,
  Pencil,
} from "@phosphor-icons/react";

export function AsideMenu() {
  const {
    userData: { userName, userTag },
  } = useContext(UserContext);
  const [dialog, setDialog] = useState(0);
  return (
    <>
      <aside
        className="h-screen fixed"
        onKeyDown={(event) => {
          console.log(event.key);
        }}
      >
        <div className="w-fit h-fit my-0.5 p-3 cursor-pointer rounded-full transition-all ease-out hover:bg-zinc-500/40">
          <Image src={twitterLogo} alt="twitterLogo" className="h-8 w-8" />
        </div>
        <nav className="flex flex-col text-xl font-medium gap-y-2 justify-center flex-wrap my-5 tracking-normal">
          <NavLink icon={<House size={32} />} href="" name="Home" />
          <NavLink icon={<Hash size={32} />} href="explore" name="Explore" />
          <NavLink
            icon={<Bell size={32} />}
            href="notifications"
            name="Notifications"
          />
          <NavLink
            icon={<EnvelopeSimple size={32} />}
            href="messages"
            name="Messages"
          />
          <NavLink icon={<FileText size={32} />} href="lists" name="Lists" />
          <NavLink
            icon={<BookmarkSimple size={32} />}
            href="home"
            name="Bookmarks"
          />
          <NavLink icon={<User size={32} />} href="profile" name="Profile" />
          <NavLink
            icon={<DotsThreeCircle size={32} />}
            href="more"
            name="More"
          />
        </nav>
        <button
          className="w-fit h-fit px-24 max-2xl:px-16 max-xl:p-3 max-xl:right-0 py-3.5 rounded-full bg-twitter-blue text-lg text-white font-bold flex relative right-5 hover:brightness-95"
          onClick={() => {
            setDialog((curr) => curr + 1);
          }}
        >
          <span className="hidden xl:inline">Tweet</span>
          <Pencil size={32} className="inline xl:hidden" />
        </button>
        <ProfileButton imgSrc={userTag} userName={userName} userTag={userTag} />
      </aside>
      <TweetDialog opened={dialog} />
    </>
  );
}
