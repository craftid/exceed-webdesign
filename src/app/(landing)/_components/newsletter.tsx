import React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <section className="relative -mt-52 w-full pb-10 lg:pb-20">
      <div className="container mx-auto overflow-hidden rounded-[50px] bg-gray-900 bg-vector bg-cover bg-center bg-no-repeat p-20 text-center lg:p-40">
        <h2 className="mb-10 text-[22px] font-black uppercase text-white md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          Sign up for Early Access
        </h2>
        <div className="relative mx-auto flex w-4/5 items-center lg:w-3/5">
          <Input
            className="h-12 rounded-none !border-0 py-3 pl-3 pr-52"
            type="email"
            placeholder="Email"
          />
          <Button
            type="submit"
            className="absolute right-1 rounded-none bg-violet-500 px-12 uppercase"
          >
            Submit
          </Button>
        </div>
      </div>
    </section>
  )
}
