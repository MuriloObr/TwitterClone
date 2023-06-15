import { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Head from "next/head";
import { UserProvider } from "./contexts/userContext/UserContext";
import { TweetsProvider } from "./contexts/newTweetContext/TweetsContext";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
});

export const metadata = {
  title: {
    default: "Twitter Clone",
    template: "%s | Twitter Clone",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <TweetsProvider>
        <html lang="en">
          <Head>
            <link rel="icon" href="favicon.ico" />
          </Head>
          <body className={roboto.className}>{children}</body>
        </html>
      </TweetsProvider>
    </UserProvider>
  );
}
