import { verifyThousand } from "./Tweet";
import Image from "next/image";

interface RecommendedProps {
  type: "happening" | "follow";
  tag: string;
  tittle: string;
  recommendArr: [number, string];
  trending?: true;
}

export function RecommendedItem({
  type,
  tag,
  tittle,
  recommendArr,
  trending,
}: RecommendedProps) {
  const trendClass = trending ? " uppercase" : "";
  if (type === "happening") {
    return (
      <div className="w-full py-2 px-4 tracking-tight cursor-pointer transition ease-in-out hover:bg-gray-400/30">
        <span className="text-sm text-twitter-darkGray">{tag}</span>
        <h3 className={"leading-5 font-bold" + trendClass}>{tittle}</h3>
        <span className="text-sm text-twitter-darkGray">
          {verifyThousand(recommendArr[0])} Tweets
        </span>
      </div>
    );
  } else {
    return (
      <div className="flex gap-3 w-full py-4 px-4 tracking-tight cursor-pointer transition ease-in-out hover:bg-gray-400/30">
        <Image
          src={recommendArr[1]}
          alt="Recommended User Image"
          height={50}
          width={50}
          className="rounded-full"
        />
        <h3 className="flex flex-col leading-5 font-bold hover:underline">
          {tittle}
          <span className="font-normal text-twitter-darkGray underline decoration-[#C1C9CF]">
            @{tag}
          </span>
        </h3>
        <input
          type="button"
          value="Follow"
          className="w-fit h-fit px-4 py-1.5 ml-auto my-auto rounded-full bg-black text-white text-md font-bold cursor-pointer hover:brightness-105 self-end"
        />
      </div>
    );
  }
}
