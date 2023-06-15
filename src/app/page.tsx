"use client";

import { AsideMenu } from "@/components/AsideMenu";
import { TwitterFeedHeader } from "@/components/TwitterFeedHeader";
import { Tweet } from "@/components/Tweet";
import { RecommendedItem } from "@/components/RecommendItem";
import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { UserContext } from "./contexts/userContext/UserContext";
import { TweetsContext } from "./contexts/newTweetContext/TweetsContext";

export default function Home() {
  const {
    userData: { userName, userTag },
  } = useContext(UserContext);
  const { tweets, addTweet } = useContext(TweetsContext);
  const [searchText, setSearchText] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);
  const [newTweet, setNewTweet] = useState("");

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
  }

  return (
    <div className="grid grid-cols-6 bg-white text-twitter-black mx-auto max-2xl:mx-6 w-2/3">
      <AsideMenu />
      <main className="col-start-2 col-span-5 h-screen w-full max-2xl:w-[85vw] ml-5 grid grid-cols-3 px-8 max-2xl:px-2">
        <div className="border-x-[1px] border-slate-400 w-11/12 max-lg:w-[78vw] col-span-2 max-md:col-span-full grid grid-cols-2 grid-rows-[50px_60px_.16fr_1fr]">
          <TwitterFeedHeader tittle="home" />

          <div className="col-span-2 border-b-[1px] border-slate-400 h-fit p-3 flex flex-wrap gap-2 items-center justify-center">
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
            <input
              type="button"
              value="Tweet"
              className="w-fit h-fit px-4 py-1.5 ml-auto rounded-full bg-twitter-blue text-lg text-white font-bold cursor-pointer hover:brightness-95"
              onClick={addNewTweet}
            />
          </div>
          <div className="col-span-2">
            {tweets.map((tweet, index) => {
              return (
                <Tweet
                  key={index}
                  userImg={tweet.userImg}
                  userName={tweet.userName}
                  tagName={tweet.tagName}
                  content={tweet.content}
                  reply={tweet.reply}
                  retweet={tweet.retweet}
                  like={tweet.like}
                  views={tweet.views}
                />
              );
            })}
          </div>
        </div>
        <div className="py-1 max-lg:hidden">
          <div className="group flex relative items-center gap-x-4 px-5 py-2.5 border-2 bg-twitter-lightGray/80 h-fit w-full rounded-full focus-within:border-twitter-blue">
            <MagnifyingGlass
              size={22}
              className="text-twitter-darkGray group-focus-within:text-twitter-blue"
            />
            <input
              type="text"
              placeholder="Search Twitter"
              value={searchText}
              className="w-5/6 bg-transparent outline-none border-none placeholder:text-twitter-darkGray"
              onInput={(event) =>
                setSearchText((event.target as HTMLInputElement).value)
              }
              onFocus={() => setSearchFocus(true)}
              onBlur={() => setSearchFocus(false)}
            />
            {searchText !== "" && searchFocus ? (
              <X
                size={18}
                className="h-fit w-fit p-1 absolute right-2 bg-twitter-blue text-white rounded-full cursor-pointer"
                onMouseDown={() => setSearchText("")}
              />
            ) : (
              ""
            )}
          </div>
          <aside className="h-full">
            <section className="h-fit mt-3 py-3 bg-twitter-darkGray/40 rounded-2xl">
              <h2 className="text-xl font-bold tracking-tighter mb-3 px-4">
                {"What's happening"}
              </h2>
              <RecommendedItem
                type="happening"
                tag="Brazil - Cascavel"
                tittle="Next, Back-end ou Front-end?"
                recommendArr={[128000, ""]}
              />
              <RecommendedItem
                type="happening"
                tag="World"
                tittle="Functional or OOP?"
                recommendArr={[632000, ""]}
              />
              <RecommendedItem
                type="happening"
                tag="Brazil - Counter Strike"
                tittle="FalleN e Fer na Furia?"
                recommendArr={[52000, ""]}
                trending
              />
              <RecommendedItem
                type="happening"
                tag="World - NBA"
                tittle="Jovic or Butler?"
                recommendArr={[124000, ""]}
                trending
              />
            </section>
            <section className="h-fit mt-3 py-3 bg-twitter-darkGray/40 rounded-2xl">
              <h2 className="mb-3 px-4 text-xl font-bold tracking-tighter">
                Who to follow
              </h2>
              <RecommendedItem
                type="follow"
                tag="NBABrasil"
                tittle="NBA Brasil"
                recommendArr={[
                  0,
                  "https://pbs.twimg.com/profile_images/1665746573555367938/Ufgf7cmZ_400x400.jpg",
                ]}
              />
              <RecommendedItem
                type="follow"
                tag="MagnusCarlsen"
                tittle="Magunus Carlsen"
                recommendArr={[
                  0,
                  "https://pbs.twimg.com/profile_images/1384791850259783681/y9O88Dj8_400x400.jpg",
                ]}
              />
              <RecommendedItem
                type="follow"
                tag="FalleNCS"
                tittle="Gabriel Toledo"
                recommendArr={[
                  0,
                  "https://pbs.twimg.com/profile_images/1598049196057235477/T-HpwJU1_400x400.jpg",
                ]}
              />
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
