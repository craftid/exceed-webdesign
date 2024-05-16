"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const MotionImage = motion(Image)

const stats = [
  {
    number: "130",
    desc: "Years of combined experience",
  },
  {
    number: "$7M",
    desc: "Out of $25M Goal Invested so far in Talent",
  },
  {
    number: "8",
    desc: "Talents engaged (and just getting started)",
  },
  {
    number: "9",
    desc: "Industry awards won by our Talents",
  },
]

export default function Stats() {
  return (
    <section className={cn("w-full", "py-10 lg:py-20", "px-5 2xl:px-0")}>
      <div
        className={cn(
          "container mx-auto",
          "!bg-gray-900 bg-vector bg-cover bg-center bg-no-repeat",
          "overflow-hidden rounded-[50px] text-center",
          "px-10 lg:px-20 2xl:px-40",
          "py-20 lg:py-24"
        )}
      >
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={cn(
            "font-black uppercase text-white",
            "text-[22px] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl",
            "mb-10 lg:mb-20"
          )}
        >
          We Take Pride in Our Numbers
        </motion.h2>
        <div
          className={cn(
            "flex items-center justify-between",
            "flex-wrap lg:flex-nowrap",
            "text-center text-white"
          )}
        >
          {stats.map((data, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              key={index}
              className={cn(
                "last-of-type:border-r-0",
                "p-2 md:p-3 xl:p-4 2xl:p-5",
                "w-full sm:w-1/2 lg:w-3/12",
                "border-white md:border-r",
                "my-3 lg:my-0"
              )}
            >
              <h3
                className={cn(
                  "font-black uppercase",
                  "text-4xl xl:text-5xl 2xl:text-6xl",
                  "mb-5"
                )}
              >
                {data.number}
              </h3>
              <p
                className={cn(
                  "mx-auto",
                  "w-full sm:w-4/5",
                  "text-base font-normal capitalize tracking-tighter"
                )}
              >
                {data.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
