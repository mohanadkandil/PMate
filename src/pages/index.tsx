import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>PMate</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#303a52] w-screen h-screen relative">
        <nav className="flex justify-between items-center px-20 py-10 font-medium text-xl text-white">
          <span className="text-[30px]">P<span className="text-[#21E6C1]">Mate</span></span>
          <ul className="flex space-x-10">
            <li>Home</li>
            <li>About</li>
          </ul>
        </nav>
          <section className="px-20 py-10 mt-40 flex justify-center">
            <div className="flex flex-col w-full h-full justify-center items-center space-y-10">
            <input type='text' placeholder="presnetation about...." className="rounded-[10px] py-3 px-2 w-1/4" /> 
            <button className="bg-[#21E6C1] text-xl font-medium py-2 px-4 rounded-md focus:outline-none">Generate</button>
          </div>
        </section> 
        <div className="bg-[#574B90] blur-[600px] rounded-full h-[150px] w-full absolute bottom-0"></div>
      </main> 
      </>
    );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
