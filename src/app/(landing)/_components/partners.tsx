import React from "react"

import { Carousel } from "@/components/ui/carousel"

import { PartnerSlider } from "./partners-slider"

export default function Partners() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto">
        <div className="flex items-center justify-center text-center">
          <h2 className="text-5xl font-black uppercase text-gray-900 2xl:text-6xl">
            our
          </h2>
          <img
            src="/assets/images/brm.png"
            className="relative mx-5 h-auto w-80 2xl:w-96"
          />
          <h2 className="text-5xl font-black uppercase text-gray-900 2xl:text-6xl">
            partners
          </h2>
        </div>
      </div>
      <img
        src="/assets/images/partner.png"
        className="relative -mt-36 h-[300px] w-auto object-contain"
      />
      <div className="border-b border-t border-gray-900 py-8">
        <PartnerSlider />
      </div>
    </section>
  )
}
