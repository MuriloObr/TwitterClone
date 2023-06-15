import { UserContext } from "@/app/contexts/userContext/UserContext";
import { X } from "@phosphor-icons/react";
import { useRef, useContext, useEffect, useState } from "react";

export function UserDialog({ opened }: { opened: number }) {
  const thatDialog = useRef(null);
  const [profileName, setProfileName] = useState("");
  const [githubName, setGithubName] = useState("");
  const { setUserData } = useContext(UserContext);

  useEffect(() => {
    const dialog = thatDialog.current as unknown as HTMLDialogElement;

    if (opened > 0) dialog.showModal();
  }, [opened]);

  function closeModal() {
    const dialog = thatDialog.current as unknown as HTMLDialogElement;
    dialog.close();
  }

  return (
    <dialog
      ref={thatDialog}
      className="h-fit w-2/6 p-6 backdrop:bg-zinc-700/40 rounded-xl max-lg:w-5/6"
    >
      <div className="flex flex-col gap-2 relative">
        <h3 className="text-2xl font-bold mb-5">User Settings</h3>
        <X
          size={30}
          className="p-1 hover:bg-zinc-500/50 rounded-full transition-all cursor-pointer absolute right-0 top-0"
          onClick={closeModal}
        />
        <label htmlFor="githubName" className="text-lg font-semibold">
          Github Profile Name:
        </label>
        <input
          type="text"
          name="githubName"
          value={githubName}
          className="text-lg outline-transparent px-4 py-2 border-2 bg-twitter-lightGray/80 rounded-full focus:border-twitter-blue"
          onInput={(event) => {
            const input = event.target as HTMLInputElement;
            setGithubName(input.value);
          }}
        />
        <label htmlFor="profileName" className="text-lg font-semibold">
          User Name:
        </label>
        <input
          type="text"
          name="profileName"
          value={profileName}
          className="text-lg outline-transparent px-4 py-2 border-2 bg-twitter-lightGray/80 rounded-full focus:border-twitter-blue"
          onInput={(event) => {
            const input = event.target as HTMLInputElement;
            setProfileName(input.value);
          }}
        />
        <button
          className="w-fit h-fit px-4 py-1.5 ml-auto rounded-full bg-twitter-blue text-lg text-white font-bold cursor-pointer hover:brightness-95"
          onClick={() => {
            if (profileName.trim() === "" && githubName.trim() === "") return;

            setUserData({
              userName: profileName,
              userTag: githubName,
            });
            setGithubName("");
            setProfileName("");
            closeModal();
          }}
        >
          Save
        </button>
      </div>
    </dialog>
  );
}
