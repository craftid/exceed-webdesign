"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const MotionImage = motion(Image)
const MotionLink = motion(Link)
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
            <MotionImage
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              width={811}
              height={787}
              alt=""
              src="/assets/images/want.png"
              className={cn("h-auto w-full")}
            />
          </div>
          <div className={cn("relative w-full sm:w-3/5")}>
            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={cn(
                "font-black uppercase text-gray-900",
                "mb-5",
                "w-full lg:w-10/12",
                "text-[22px] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
              )}
            >
              Want to partner with us on this project?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
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
            </motion.p>
            <MotionLink
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              href="#"
              className={cn(
                "relative block  w-fit",
                "border-violet-500 bg-violet-500 px-12 py-5 text-base font-bold text-white transition-all duration-300 hover:bg-gray-900",
                "before:absolute before:-z-10 before:h-14 before:w-full before:border before:border-gray-900 before:content-['']",
                "before:-bottom-1 before:-right-1 before:transition-all before:duration-300 hover:before:bottom-0 hover:before:right-0"
              )}
            >
              Get Started
            </MotionLink>
          </div>
        </div>
      </div>
    </section>
  )
}
