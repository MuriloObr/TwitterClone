import Image from "next/image";
import { TweetProps } from "@/app/contexts/newTweetContext/TweetsContext";
import {
  ArrowsClockwise,
  CellSignalFull,
  Chat,
  Heart,
} from "@phosphor-icons/react";

export function verifyThousand(valueToVerify: number) {
  let finalValue;
  valueToVerify > 1000
    ? (finalValue = valueToVerify.toString().slice(0, -3) + "K")
    : (finalValue = valueToVerify);
  return finalValue;
}
export function Tweet({
  userImg,
  userName,
  tagName,
  content,
  reply,
  retweet,
  like,
  views,
}: TweetProps) {
  return (
    <>
      <div className="grid grid-cols-8 grid-rows-[20px_1fr] grid-flow-row items-center justify-center h-fit py-4 px-1 border-b-[1px] border-slate-400 cursor-pointer transition ease-in-out duration-200 hover:bg-gray-600/30">
        <Image
          src={userImg}
          alt="User image"
          height={50}
          width={50}
          className="rounded-lg justify-self-center col-span-1 row-span-2 mb-auto"
        />
        <div className="col-span-7 flex items-start gap-1 text-md font-extrabold tracking-tight">
          {userName}
          <span className="text-slate-500 text-sm font-normal self-end">
            @{tagName}
          </span>
        </div>
        <p className="col-span-7">{`${content}`}</p>

        <span className="flex items-center col-start-2 max-sm:col-span-2 gap-1 mt-4 text-sm select-none cursor-pointer hover:text-twitter-blue group">
          <div className="rounded-full p-1.5 transition-all ease-linear group-hover:bg-twitter-blue/20">
            <Chat size={20} />
          </div>
          {verifyThousand(reply)}
        </span>
        <span className="flex items-center max-sm:col-span-2 gap-1 mt-4 text-sm select-none cursor-pointer hover:text-green-600 group">
          <div className="rounded-full p-1.5 transition-all ease-linear group-hover:bg-green-600/20">
            <ArrowsClockwise size={20} />
          </div>
          {verifyThousand(retweet)}
        </span>
        <span className="flex items-center max-sm:col-span-2 gap-1 mt-4 text-sm select-none cursor-pointer hover:text-red-600 group">
          <div className="rounded-full p-1.5 transition-all ease-linear group-hover:bg-pink-600/20">
            <Heart size={20} />
          </div>
          {verifyThousand(like)}
        </span>
        <span className="flex items-center max-sm:col-span-2 gap-1 mt-4 text-sm select-none cursor-pointer hover:text-twitter-blue group">
          <div className="rounded-full p-1.5 transition-all ease-linear group-hover:bg-twitter-blue/20">
            <CellSignalFull size={20} />
          </div>
          {verifyThousand(views)}
        </span>
      </div>
    </>
  );
}
