"use client";

import React from "react";
import Link from "next/link";

function HeaderAndFooter() {
  return (
   
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-lg lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center bg-gradient-to-b  pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border  lg:p-4 lg:dark:bg-zinc-800/30">
          Hi, Welcome &nbsp;
          <code className="font-mono font-bold">
            I am Zobaidul Kazi
          </code>
        </p>

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-slate-700 via-gray-600 dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Link
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Power By:
            <p className=" text-red-600 hover:bg-slate-600">KaziByte</p>
          </Link>
        </div>
      </div>
  
  );
}

export default HeaderAndFooter;
