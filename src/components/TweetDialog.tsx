import Image from "next/image";
import { useEffect, useRef, useState, useContext } from "react";
import { TweetsContext } from "@/app/contexts/newTweetContext/TweetsContext";
import { UserContext } from "@/app/contexts/userContext/UserContext";
import { X } from "@phosphor-icons/react";

export function TweetDialog({ opened }: { opened: number }) {
  const thatDialog = useRef(null);
  const {
    userData: { userName, userTag },
  } = useContext(UserContext);
  const { addTweet } = useContext(TweetsContext);
  const [newTweet, setNewTweet] = useState("");

  useEffect(() => {
    const dialog = thatDialog.current as unknown as HTMLDialogElement;

    if (opened > 0) dialog.showModal();
  }, [opened]);

  function closeModal() {
    const dialog = thatDialog.current as unknown as HTMLDialogElement;
    dialog.close();
  }

  function addNewTweet() {
    if (newTweet.trim() === "") return;
    addTweet({
      userImg: `https://github.com/${userTag}.png`,
      userName: userName,
      tagName: userTag,
      content: newTweet,
      reply: 0,
      retweet: 0,
      like: 0,
      views: 0,
    });
    setNewTweet("");
    closeModal();
  }

  return (
    <dialog
      ref={thatDialog}
      className="h-fit w-2/6 p-6 backdrop:bg-zinc-700/40 rounded-xl absolute -top-2/3"
    >
      <div className="flex flex-col flex-wrap gap-4">
        <X
          size={30}
          className="p-1 hover:bg-zinc-500/50 rounded-full transition-all cursor-pointer"
          onClick={closeModal}
        />
        <div className="flex gap-4">
          <Image
            src={`https://github.com/${userTag}.png`}
            height={50}
            width={50}
            alt="User Image"
            className="rounded-full self-start"
          />
          <textarea
            name="whatIsHappening"
            id="whatIsHappening"
            placeholder="What is Happening?!"
            value={newTweet}
            className="h-8 w-10/12 mt-2 pb-4 text-xl outline-0 resize-none focus:border-b-[1px] focus:border-slate-400"
            onInput={(event) => {
              const textarea = event.target as HTMLInputElement;
              textarea.style.height = "auto";
              const scHeight = textarea.scrollHeight;
              textarea.style.height = `${scHeight}px`;

              setNewTweet(textarea.value);
            }}
          />
        </div>
        <input
          type="button"
          value="Tweet"
          className="w-fit h-fit px-4 py-1.5 ml-auto rounded-full bg-twitter-blue text-lg text-white font-bold cursor-pointer hover:brightness-95"
          onClick={addNewTweet}
        />
      </div>
    </dialog>
  );
}
