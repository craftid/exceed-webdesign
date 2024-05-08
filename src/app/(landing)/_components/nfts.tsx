import React from "react"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

const artists = [
  {
    image: "/assets/images/artist-1.png",
  },
  {
    image: "/assets/images/artist-1.png",
  },
  {
    image: "/assets/images/artist-1.png",
  },
]

export default function Nfts() {
  return (
    <section className={cn("relative w-full", "py-10 lg:py-20")}>
      <div className={cn("container mx-auto")}>
        <h2
          className={cn(
            "text-center font-black uppercase text-gray-900",
            "text-[22px] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl",
            "mb-20"
          )}
        >
          NFTs for Artists Launching Soon
        </h2>
        <div
          className={cn(
            "flex justify-center",
            "mx-auto",
            "relative",
            "flex-wrap sm:flex-nowrap"
          )}
        >
          <Image
            width={19}
            height={20}
            alt=""
            src="/assets/images/frame.png"
            className={cn("absolute -top-10 right-72", "h-auto w-auto")}
          />
          {artists.map((data, index) => (
            <div
              key={index}
              className={cn(
                "relative z-20 overflow-hidden rounded-3xl",
                "first-of-type:mt-12 sm:first-of-type:-mr-10 sm:first-of-type:-rotate-[20deg]",
                "last-of-type:z-10 sm:last-of-type:-ml-10 sm:last-of-type:mt-12 sm:last-of-type:rotate-[20deg]",
                "my-5 sm:my-0",
                "h-auto w-full sm:h-60 sm:w-80 lg:h-96"
              )}
            >
              <Image
                width={389}
                height={455}
                alt=""
                src={data.image}
                className={cn("z-10", "object-cover", "h-full w-full")}
              />
              <div
                className={cn(
                  "absolute bottom-0 left-0 right-0 top-0",
                  "flex items-center justify-center",
                  "h-full w-full",
                  "backdrop-blur-md transition-all hover:backdrop-blur-0"
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="191"
                  height="186"
                  viewBox="0 0 191 186"
                  fill="none"
                >
                  <path
                    opacity="0.55"
                    d="M171.549 114.745L131.117 79.9339L139.784 26.8388L114.392 36.081L106.851 88.7658L126.572 106.434L107.555 113.356L100.8 107.302L92.8943 162.578L28.8393 185.892L40.7726 112.816L0.431899 78.0859L19.6521 71.0903L59.9928 105.821L51.3217 158.907L76.7145 149.665L84.2583 96.9889L64.6169 79.395L83.6338 72.4734L90.3007 78.4563L98.2749 23.3408L162.321 0.0300659L150.328 72.9417L190.77 107.749L171.549 114.745Z"
                    fill="#8F59FF"
                  />
                </svg>
              </div>
            </div>
          ))}
          <Image
            width={31}
            height={59}
            alt=""
            src="/assets/images/and.png"
            className={cn(
              "absolute bottom-0 left-0",
              "h-auto w-auto",
              "hidden sm:block"
            )}
          />
        </div>
        <Link
          href="#"
          className={cn(
            "relative mx-auto block w-fit",
            "mt-5 sm:mt-0",
            "border-violet-500 bg-violet-500 px-12 py-5 text-base font-bold text-white transition-all duration-300 hover:bg-gray-900",
            "after:absolute after:-z-10 after:h-14 after:w-full after:border after:border-gray-900 after:content-['']",
            "after:-bottom-1 after:-right-1 after:transition-all after:duration-300 hover:after:bottom-0 hover:after:right-0"
          )}
        >
          Get Started
        </Link>
      </div>

      <Image
        width={1920}
        height={590}
        alt=""
        src="/assets/images/pattern-2.png"
        className={cn("-mt-12 object-cover", "h-80 w-full")}
      />
    </section>
  )
}
