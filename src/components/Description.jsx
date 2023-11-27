'use client'

import React from "react";
import { Description01 } from "@/config/manuDB";



function Description() {
  return (

             <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text  font-extrabold text-transparent sm:text-5xl  mt-5 p-5 text-center text-lg lg:text-3xl">
                
        <p className="w-80 md:w-auto lg:w-full">
        
          {Description01.Description}
          

        </p>
        </div>
   
       
 
   
  );
}

export default Description;
