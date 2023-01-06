import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
       <div className="bg-[#303a52]">
        <nav className="flex justify-between items-center px-20 py-10 font-medium text-xl text-white">
            <span className="text-[30px]">P<span className="text-[#21E6C1]">Mate</span></span>
            <ul className="flex space-x-10">
              <li>Home</li>
              <li>About</li>
            </ul>
          </nav>
        <Component {...pageProps} />
       </div>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
