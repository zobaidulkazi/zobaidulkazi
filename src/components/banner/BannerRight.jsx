'use client'

import React from 'react'
import Image from 'next/image'
import { BannerData } from '@/config/homeDB'
import Link from 'next/link'

function BannerRight() {
  return (
    <div>
        <div className="mt-60">


        <div class="relative duration-300  hover:-rotate-0  -rotate-12 group border-6 border-sky-900 border-4  overflow-hidden rounded-2xl  sm:h-56 md:h-72 lg:h-80 sm:w-72  lg:w-10/12  bg-sky-800 p-5 flex flex-col items-start gap-4">
  <div class="text-gray-50">
    <span class="font-bold text-5xl">ZK</span>
    <p class="text-xs"> Full Stack JavaScript Developer</p>
  </div>
  <Link
    href='/'
  class="duration-300 hover:bg-sky-900 border hover:text-gray-50 bg-gray-50 font-semibold text-sky-800 px-3 py-2 flex flex-row items-center gap-3">Dowload CV 
    <svg class="w-6 h-6 fill-current" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
 <path d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z" fill-rule="evenodd">
 </path>
</svg>
  </Link>

  





</div>
              
            </div>

    </div>
  )
}

export default BannerRight