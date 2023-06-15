"use client";
import { createContext, useState } from "react";

interface TweetsContextProps {
  tweets: TweetProps[];
  addTweet: (newTweet: TweetProps) => void;
}

export interface TweetProps {
  userImg: string;
  userName: string;
  tagName: string;
  content: string;
  reply: number;
  retweet: number;
  like: number;
  views: number;
}

export const TweetsContext = createContext({} as TweetsContextProps);

export const TweetsProvider = ({ children }: { children: React.ReactNode }) => {
  const [tweets, setTweets] = useState([
    {
      userImg: "https://github.com/muriloObr.png",
      userName: "Murilo",
      tagName: "muriloObr",
      content: `Achei muito interresante criar um clone do twitter assim!`,
      reply: 10,
      retweet: 4,
      like: 65,
      views: 113,
    },
    {
      userImg: "https://github.com/muriloObr.png",
      userName: "Murilo",
      tagName: "muriloObr",
      content: `É sempre interresante criar interfaces de sites bastante conhecidos, 
      pois nem sempre o que pareçe uma feature SIMPLES, é uma feature simples`,
      reply: 7,
      retweet: 6,
      like: 66,
      views: 76,
    },
    {
      userImg: "https://github.com/diego3g.png",
      userName: "Diego Fernandes",
      tagName: "diego3g",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
      pariatur.`,
      reply: 54,
      retweet: 10,
      like: 542,
      views: 12450,
    },
  ]);

  function addTweet(newTweet: TweetProps) {
    setTweets([newTweet, ...tweets]);
  }

  return (
    <TweetsContext.Provider value={{ tweets, addTweet }}>
      {children}
    </TweetsContext.Provider>
  );
};
