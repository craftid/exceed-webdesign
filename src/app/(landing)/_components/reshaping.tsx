import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function Reshaping() {
  return (
    <section className="relative w-full py-20">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="w-[70%]">
            <h2 className="mb-5 text-5xl font-black uppercase text-gray-900 2xl:text-6xl">
              Reshaping the Dynamics Between Creators and Their True Fans
            </h2>
            <p className="mb-5 w-4/5 text-base tracking-[-0.32px] text-neutral-600 2xl:w-3/5">
              Exceed combines fandom with real financial investment. Fans invest
              in their favorite Talent, become part of an exclusive community of
              investors and gain access to unique benefits, along with real
              financial gains driven by the Talent success.
            </p>
            <Link
              href="#"
              className="relative block w-fit border-violet-500 bg-violet-500 px-12 py-5 text-base font-bold text-white transition-all after:absolute after:-bottom-1 after:-right-1 after:-z-10 after:h-14 after:w-full after:border after:border-gray-900 after:content-[''] hover:bg-gray-900"
            >
              Get Started
            </Link>
          </div>
          <div className="relative w-[30%]">
            <Image
              width={481}
              height={728}
              alt=""
              src="/assets/images/reshape.webp"
              className="h-auto w-full"
            />
            <Image
              width={31}
              height={59}
              alt=""
              src="/assets/images/and.png"
              className="absolute -right-10 -top-10 h-14 w-7"
            />
          </div>
        </div>
      </div>
      <Image
        width={1146}
        height={749}
        alt=""
        src="/assets/images/pattern.webp"
        className="absolute bottom-0 right-0 -z-10 h-[400px] w-auto object-contain 2xl:h-[700px]"
      />
    </section>
  )
}
