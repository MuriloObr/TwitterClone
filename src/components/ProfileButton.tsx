import Image from "next/image";
import { UserDialog } from "./UserDialog";
import { useState } from "react";

export function ProfileButton({
  imgSrc,
  userName,
  userTag,
}: {
  imgSrc: string;
  userName: string;
  userTag: string;
}) {
  const [dialog, setDialog] = useState(0);
  return (
    <>
      <div
        className="flex items-center gap-2 w-full mt-48 max-2xl:mt-20 p-3 max-xl:p-0 rounded-full cursor-pointer hover:bg-zinc-500/40"
        onClick={() => setDialog((curr) => curr + 1)}
      >
        <Image
          src={`https://github.com/${imgSrc}.png`}
          alt="User Image"
          height={50}
          width={50}
          className="rounded-full"
        />
        <div className="flex flex-col max-lg:hidden ">
          <h3 className="text-lg font-bold leading-5">{userName}</h3>
          <span className="">@{userTag}</span>
        </div>
      </div>
      <UserDialog opened={dialog} />
    </>
  );
}
