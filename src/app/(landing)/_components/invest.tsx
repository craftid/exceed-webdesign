"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const MotionImage = motion(Image)

const invest = [
  {
    icon: "/assets/images/icon-1.png",
    title: "Invest in Talent You Believe In",
    desc: "Invest in your favorite musicians, artists, creators and athletes. Help them grow their career.",
  },
  {
    icon: "/assets/images/icon-2.png",
    title: "Share a Piece of Their Success",
    desc: "Influence, interact and promote them. The more they exceed, the more you succeed.",
  },
  {
    icon: "/assets/images/icon-3.png",
    title: "Earn Cash Dividends",
    desc: "A real, income yielding, financial investment.",
  },
  {
    icon: "/assets/images/icon-4.png",
    title: "Enjoy Exclusive Benefits & Perks",
    desc: "Become part of an exclusive community of investors, and get exclusive benefits & perks.",
  },
]

export default function Invest() {
  return (
    <section className={cn("relative", "py-10 lg:py-20", "w-full")} id="invest">
      <div className={cn("container mx-auto")}>
        <div
          className={cn(
            "mx-auto",
            "md:max-lg:w-4/5 xl:w-3/4 2xl:w-2/3",
            "mb-10 lg:mb-5"
          )}
        >
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={cn(
              "mb-5",
              "text-[22px] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl",
              "text-center font-black uppercase text-gray-900"
            )}
          >
            Invest with Passion in Talent You Believe in
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={cn(
              "text-center tracking-[-0.32px] text-neutral-600 ",
              "mx-auto lg:w-3/4",
              "text-base"
            )}
          >
            Invest in something you&apos;re truly passionate about and believe
            in. Whether it&apos;s your favorite musician, a soccer player you
            admire, or a creator soon to make it big - Exceed lets you discover,
            invest, and engage with your favorite Talent.
          </motion.p>
        </div>
        <div
          className={cn(
            "flex items-center justify-between",
            "flex-wrap md:flex-nowrap"
          )}
        >
          <div className={cn("w-full md:w-3/12")}>
            <div
              className={cn(
                "relative",
                "before:z-10 md:before:absolute",
                "before:left-0 before:top-20",
                "before:h-24 before:w-24",
                "before:bg-[#D9D9D9] before:content-['']"
              )}
            >
              <MotionImage
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                width={326}
                height={813}
                alt=""
                src="/assets/images/phone.png"
                className={cn(
                  "relative",
                  "h-auto w-60 md:w-80",
                  "mx-auto md:mr-5"
                )}
              />
            </div>
          </div>
          <div className={cn("w-full md:w-3/4 2xl:w-3/5", "mt-5 md:mt-0")}>
            {invest.map((data, index) => (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                key={index}
                className={cn(
                  "flex items-center",
                  "flex-wrap sm:flex-nowrap",
                  "border-b-2 border-neutral-400",
                  "mb-5 pb-5"
                )}
              >
                <div className={cn("w-full sm:w-1/5")}>
                  <Image
                    width={98}
                    height={83}
                    alt=""
                    src={data.icon}
                    className={cn("w-16 lg:w-24", "h-auto")}
                  />
                </div>
                <div className={cn("w-full sm:w-2/5", "my-5 sm:my-0")}>
                  <h4
                    className={cn(
                      "w-4/5",
                      "font-bold uppercase text-gray-900",
                      "text-xl lg:text-2xl"
                    )}
                  >
                    {data.title}
                  </h4>
                </div>
                <div className={cn("w-full sm:w-2/5")}>
                  <p
                    className={cn(
                      "text-base",
                      "font-normal capitalize tracking-tighter text-neutral-600"
                    )}
                  >
                    {data.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="773"
        height="535"
        viewBox="0 0 773 535"
        fill="none"
        className={cn(
          "absolute",
          "bottom-0 2xl:-bottom-16",
          "-translate-y-2/4",
          "left-0",
          "hidden lg:block",
          "-z-10",
          "lg:max-xl:h-96"
        )}
      >
        <path
          opacity="0.2"
          d="M648.001 460.153L541.301 267.138L648.886 72.5117L538.365 72.5117L435.687 267.138L486.765 363.967H403.995L386.5 330.792L278.795 535H0L148.085 267.138L41.6262 74.565L125.281 74.565L231.739 267.138L124.155 461.723L234.675 461.723L337.353 267.138L286.477 170.71H369.246L386.5 203.484L494.245 0L773 0L624.915 267.138L731.655 460.153H648.001Z"
          className={cn("fill-[#D9D9D9]")}
        />
      </svg>
      <Image
        alt=""
        src="/assets/images/invest-bg.png"
        height={1023}
        width={1562}
        className={cn("absolute bottom-0 left-0")}
      />
    </section>
  )
}
