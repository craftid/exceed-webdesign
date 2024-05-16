"use client"

import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <section
      id="newsletter"
      className={cn(
        "relative w-full",
        "pb-10 lg:pb-20",
        "-mt-52",
        "px-10 2xl:px-0"
      )}
    >
      <div
        className={cn(
          "!bg-gray-900 bg-vector bg-cover bg-center bg-no-repeat",
          "container mx-auto overflow-hidden rounded-3xl text-center sm:rounded-[50px]",
          "p-5 sm:p-10 lg:p-40"
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
            "mb-10"
          )}
        >
          Sign up for Early Access
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={cn(
            "relative mx-auto",
            "w-full sm:w-4/5 lg:w-3/5",
            "flex items-center",
            "flex-wrap sm:flex-nowrap"
          )}
        >
          <Input
            className={cn(
              "h-12",
              "md:py-3 md:pl-3 md:pr-52",
              "rounded-none !border-0",
              "mb-5 sm:mb-0"
            )}
            type="email"
            placeholder="Email"
          />
          <Button
            type="submit"
            className={cn(
              "right-1 sm:absolute",
              "bg-violet-500 uppercase",
              "rounded-none px-12",
              "mx-auto"
            )}
          >
            Submit
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
