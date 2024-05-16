"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const MotionImage = motion(Image)

export default function HomeBanner() {
  return (
    <section
      className={cn(
        "relative w-full",
        "px-3 pb-20 pt-10 sm:px-0 md:pb-36 md:pt-20",
        "min-h-screen bg-hero bg-contain bg-bottom bg-no-repeat"
      )}
      id="home"
    >
      <div
        className={cn(
          "relative",
          "flex items-baseline justify-center lg:justify-end"
        )}
      >
        <Image
          width={49}
          height={31}
          alt=""
          src="/assets/images/m-icon.png"
          className={cn(
            "absolute",
            "top-10 md:top-0",
            "sm:right-20 md:right-28 xl:right-44 2xl:right-64",
            "sm:h-5 sm:w-5 md:h-auto md:w-auto",
            "hidden sm:block"
          )}
        />
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={cn(
            "relative",
            "font-black uppercase leading-none text-violet-500",
            "text-7xl sm:text-[150px] md:text-[180px] lg:text-[230px] xl:text-[300px] 2xl:text-[400px]",
            "before:bg-title before:bg-contain before:bg-no-repeat",
            "before:-left-8 before:bottom-8 sm:before:absolute lg:before:-left-20",
            "before:h-8 before:w-8 lg:before:h-16",
            "after:bg-music after:bg-contain after:bg-no-repeat",
            "after:bottom-[120px] after:left-[410px] sm:after:absolute",
            "after:h-8 2xl:after:w-8",
            "px-5 sm:px-0",
            "mb-5 sm:mb-0"
          )}
        >
          EXCEED
        </motion.h1>
      </div>

      <div
        className={cn(
          "container",
          "lg:pl-20",
          "mx-auto md:-mt-24 lg:-mt-28 xl:-mt-28 2xl:-mt-56"
        )}
      >
        <div
          className={cn(
            "relative z-10 w-full",
            "flex flex-wrap items-center justify-between md:flex-nowrap"
          )}
        >
          <div className={cn("w-full md:w-2/5 2xl:w-1/3")}>
            <motion.h3
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className={cn(
                "font-black uppercase text-gray-900",
                "text-2xl md:text-xl xl:text-3xl",
                "text-left",
                "mb-2 md:mt-24 lg:mt-20 2xl:mt-0"
              )}
            >
              A Whole New Way to Invest in and Engage with Talent
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              viewport={{ once: true }}
              className={cn(
                "tracking-[-0.32px] text-neutral-600",
                "text-base",
                "w-full sm:w-3/5 lg:max-xl:w-4/5"
              )}
            >
              One platform to invest, earn, interact, influence, and celebrate
              Talent
            </motion.p>
            <motion.div
              className={cn("mt-5", "flex flex-wrap gap-2")}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <MotionImage
                width={166}
                height={50}
                alt=""
                src="/assets/images/app-store.png"
                className={cn("relative", "mr-1 sm:mr-5")}
              />
              <MotionImage
                width={166}
                height={50}
                alt=""
                src="/assets/images/google-play.png"
                className={cn("relative")}
              />
            </motion.div>
          </div>
          <div
            className={cn(
              "relative",
              "w-full md:w-3/5 2xl:w-4/6",
              "mt-10 md:mt-0"
            )}
          >
            <MotionImage
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              width={833}
              height={654}
              alt=""
              src="/assets/images/banner-img.png"
              className={cn(
                "relative z-10",
                "ml-auto mr-auto md:-mr-10",
                "w-auto"
              )}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
