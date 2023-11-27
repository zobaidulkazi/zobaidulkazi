'use client'

import Link from "next/link";
import React from "react";

import { mainDB } from "@/config/manuDB";

function ProjectSkillsBlog() {
  return (
    <div className="m-10 p-5  grid  text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
     
     {
        mainDB.map((item, index) => (
            <div key={item.name}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300  hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
    

      <Link href={item.link}  className={`mb-3 text-2xl font-semibold`}>
        {item.name}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
     
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        {item.title}
      </p>
      </Link>
  
          </div>
        ))
     }



    </div>
  );
}

export default ProjectSkillsBlog;


