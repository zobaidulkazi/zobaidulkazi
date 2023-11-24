import { BannerData } from "@/config/homeDB";
import Link from "next/link";
import React from "react";
import BannerRight from "./BannerRight";

function Banner() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="relative dark:bg-[url(https://cdn1.iconfinder.com/data/icons/characters-and-objects/512/error_404_workflow_support___website_crash_warning_furniture_office_work_maintenance.png)] bg-cover bg-center bg-no-repeat">
          <section className="">
            <div className="mx-auto max-w-screen-2xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="bg-gradient-to-r from-purple-700 via-blue-400 to-yellow-400 bg-clip-text font-extrabold text-transparent sm:text-2xl md:text-3xl lg:text-4xl">
                  {BannerData.title}

                  <span className="font-extrabold text-red-700 sm:block">
                    {" "}
                    {BannerData.subtitle}{" "}
                  </span>
                </h1>

                <p className="text-fuchsia-700 font-semibold sm:text-xl md:text-2xl lg:text-3xl  align-text-top">
                  {BannerData.description}
                </p>

                <div className="mt-8 grid grid-cols-1 gap-10">
                  <Link
                    className="rounded-2xl border border-blue-800 bg-blue-800 sm:px-6 lg:px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black hover:bg-slate-100 hover:border-none focus:outline-none  w-auto sm:w-44 sm:m-auto"
                    href={BannerData.buttonLink1}
                  >
                    {BannerData.buttonText1}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div >
          <BannerRight />
        </div>
      </div>
    </>
  );
}

export default Banner;
