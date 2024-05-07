import React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <section className="relative -mt-52 w-full pb-20">
      <div className="container mx-auto overflow-hidden rounded-[50px] bg-gray-900 bg-vector bg-cover bg-center bg-no-repeat px-40 py-40 text-center">
        <h2 className="mb-10 text-4xl font-black uppercase text-white xl:text-5xl 2xl:text-6xl">
          Sign up for Early Access
        </h2>
        <div className="relative mx-auto flex w-3/5 items-center">
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
