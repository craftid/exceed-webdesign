import React from "react"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

export default function Reshaping() {
  return (
    <section className={cn("relative w-full", "py-10 lg:py-20")}>
      <div className={cn("container mx-auto")}>
        <div
          className={cn(
            "flex items-center justify-between",
            "flex-wrap sm:flex-nowrap"
          )}
        >
          <div className={cn("w-full sm:w-4/6")}>
            <h2
              className={cn(
                "mb-5",
                "font-black uppercase text-gray-900 ",
                "text-[22px] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl",
                "w-full sm:w-11/12"
              )}
            >
              Reshaping the Dynamics Between Creators and Their True Fans
            </h2>
            <p
              className={cn(
                "tracking-[-0.32px] text-neutral-600",
                "w-full sm:w-4/5 2xl:w-3/5",
                "text-base",
                "mb-5"
              )}
            >
              Exceed combines fandom with real financial investment. Fans invest
              in their favorite Talent, become part of an exclusive community of
              investors and gain access to unique benefits, along with real
              financial gains driven by the Talent success.
            </p>
            <Link
              href="#"
              className={cn(
                "relative block w-fit ",
                "border-violet-500 bg-violet-500 px-12 py-5 text-base font-bold text-white transition-all duration-300 hover:bg-gray-900",
                "after:absolute after:-z-10 after:h-14 after:w-full after:border after:border-gray-900 after:content-['']",
                "after:-bottom-1 after:-right-1 after:transition-all after:duration-300 hover:after:bottom-0 hover:after:right-0"
              )}
            >
              Get Started
            </Link>
          </div>
          <div className={cn("w-full sm:w-2/6", "relative", "mt-5 sm:mt-0")}>
            <Image
              width={481}
              height={728}
              alt=""
              src="/assets/images/reshape.webp"
              className={cn("h-auto w-full")}
            />
            <Image
              width={31}
              height={59}
              alt=""
              src="/assets/images/and.png"
              className={cn(
                "absolute -right-10 -top-10",
                "h-14 w-7",
                "hidden sm:block"
              )}
            />
          </div>
        </div>
      </div>
      <Image
        width={1146}
        height={749}
        alt=""
        src="/assets/images/pattern.webp"
        className={cn(
          "absolute bottom-0 right-0",
          "h-[250px] w-auto md:h-[300px] lg:h-[400px] 2xl:h-[700px]",
          " -z-10 object-contain"
        )}
      />
    </section>
  )
}
