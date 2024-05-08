import React from "react"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

export default function WantToPartner() {
  return (
    <section
      id="want"
      className={cn(
        "w-full",
        "py-10 lg:py-20",
        "bg-want bg-contain bg-bottom bg-no-repeat"
      )}
    >
      <div className={cn("container mx-auto")}>
        <div
          className={cn(
            "relative z-10",
            "flex items-center justify-between",
            "flex-wrap sm:flex-nowrap"
          )}
        >
          <div className={cn("w-full sm:w-2/5", "mb-5 sm:mb-0")}>
            <Image
              width={811}
              height={787}
              alt=""
              src="/assets/images/want.png"
              className={cn("h-auto w-full")}
            />
          </div>
          <div className={cn("w-full sm:w-3/5")}>
            <h2
              className={cn(
                "font-black uppercase text-gray-900",
                "mb-5",
                "w-full lg:w-10/12",
                "text-[22px] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
              )}
            >
              Want to partner with us on this project?
            </h2>
            <p
              className={cn(
                "font-normal capitalize tracking-tighter",
                "w-full lg:w-4/5 2xl:w-3/5",
                "text-base",
                "mb-5"
              )}
            >
              We can help you meet your capital needs for your career, engage
              with your target audience, build a community of supporters, and
              benefit from new income sources. We&apos;d love to hear from you.
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
        </div>
      </div>
    </section>
  )
}
