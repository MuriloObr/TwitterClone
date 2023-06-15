"use client";
import { createContext, useState } from "react";

interface UserContextProps {
  userData: {
    userName: string;
    userTag: string;
  };
  setUserData: Function;
}

export const UserContext = createContext({} as UserContextProps);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userData, setUserData] = useState({
    userName: "Murilo",
    userTag: "muriloObr",
  });
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
