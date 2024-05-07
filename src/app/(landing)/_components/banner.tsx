import React from "react"
import Image from "next/image"

export default function HomeBanner() {
  return (
    <section className="w-full py-10 lg:py-20">
      <div className="container mx-auto">
        <h1 className="text-center text-[140px] font-black uppercase leading-[100%] tracking-[25.68px] text-violet-500 lg:text-[200px] xl:text-[225px] 2xl:text-[300px]">
          EXCEED
        </h1>
        <div className="relative z-10 flex w-full flex-wrap items-center justify-between">
          <div className="w-1/2 2xl:w-2/6">
            <h3 className="mb-2 text-left text-xl font-black uppercase text-gray-900 lg:text-3xl 2xl:w-11/12">
              A Whole New Way to Invest in and Engage with Talent
            </h3>
            <p className="text-base tracking-[-0.32px] text-neutral-600">
              One platform to invest, earn, interact, influence, and celebrate
              Talent
            </p>
            <div className="mt-5 flex">
              <Image
                width={166}
                height={50}
                alt=""
                src="/assets/images/app-store.png"
                className="relative mr-5"
              />
              <Image
                width={166}
                height={50}
                alt=""
                src="/assets/images/google-play.png"
                className="relative"
              />
            </div>
          </div>
          <div className="w-1/2 2xl:w-1/2">
            <Image
              width={970}
              height={714}
              alt=""
              src="/assets/images/banner-img.png"
              className="relative mt-[-100px] h-auto w-full xl:mt-[-150px] 2xl:ml-5 2xl:mt-[-180px]"
            />
          </div>
        </div>
      </div>
      <Image
        width={1920}
        height={620}
        alt=""
        src="/assets/images/banner.png"
        className="mt-[-200px] h-auto w-full object-cover lg:mt-[-250px] xl:mt-[-300px] 2xl:mt-[-500px]"
      />
    </section>
  )
}
