import React from "react"
import Image from "next/image"

import { Carousel } from "@/components/ui/carousel"

import { PartnerSlider } from "./partners-slider"

export default function Partners() {
  return (
    <section className="w-full py-10 lg:py-20">
      <div className="container mx-auto">
        <div className="flex items-center justify-center text-center">
          <h2 className="text-[22px] font-black uppercase text-gray-900 md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            our
          </h2>
          <Image
            width={448}
            height={448}
            alt=""
            src="/assets/images/brm.png"
            className="relative mx-5 h-auto w-60 xl:w-80 2xl:w-96"
          />
          <h2 className="text-[22px] font-black uppercase text-gray-900 md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            partners
          </h2>
        </div>
      </div>
      <Image
        width={1532}
        height={1023}
        alt=""
        src="/assets/images/partner.png"
        className="relative -mt-36 h-[300px] w-auto object-contain"
      />
      <div className="border-b border-t border-gray-900 py-8">
        <PartnerSlider />
      </div>
    </section>
  )
}
