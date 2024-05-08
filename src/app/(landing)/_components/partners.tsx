import React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

import { Carousel } from "@/components/ui/carousel"

import { PartnerSlider } from "./partners-slider"

export default function Partners() {
  return (
    <section className={cn("w-full", "py-10 lg:py-20")}>
      <div className={cn("container mx-auto", "mb-5 sm:mb-0")}>
        <div className={cn("flex items-center justify-center", "text-center")}>
          <h2
            className={cn(
              "font-black uppercase text-gray-900",
              "text-[22px] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl",
              "mr-2 sm:mr-0"
            )}
          >
            our
          </h2>
          <Image
            width={448}
            height={448}
            alt=""
            src="/assets/images/brm.png"
            className={cn(
              "relative mx-5",
              "h-auto w-60 xl:w-80 2xl:w-96",
              "hidden sm:block"
            )}
          />
          <h2
            className={cn(
              "font-black uppercase text-gray-900",
              "text-[22px] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
            )}
          >
            partners
          </h2>
        </div>
      </div>
      <Image
        width={1532}
        height={1023}
        alt=""
        src="/assets/images/partner.png"
        className={cn(
          "relative object-contain",
          "h-[300px] w-auto",
          "-mt-36",
          "hidden sm:block"
        )}
      />
      <div className={cn("border-b border-t border-gray-900", "py-8")}>
        <PartnerSlider />
      </div>
    </section>
  )
}
