"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

import { Carousel } from "@/components/ui/carousel"

import { PartnerSlider } from "./partners-slider"

const MotionImage = motion(Image)

export default function Partners() {
  return (
    <section className={cn("w-full", "py-10 lg:py-20")}>
      <div className={cn("container mx-auto", "mb-5 sm:mb-0")}>
        <div className={cn("flex items-center justify-center", "text-center")}>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={cn(
              "font-black uppercase text-gray-900",
              "text-[22px] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl",
              "mr-2 sm:mr-0"
            )}
          >
            our
          </motion.h2>
          <MotionImage
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
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
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={cn(
              "font-black uppercase text-gray-900",
              "text-[22px] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
            )}
          >
            partners
          </motion.h2>
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
