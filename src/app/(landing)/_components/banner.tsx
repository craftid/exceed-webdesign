import React from "react"

export default function HomeBanner() {
  return (
    <section className="w-full">
      <h1 className="text-right text-[350px] font-black uppercase leading-[100%] tracking-[25.68px] text-violet-500">
        EXCEED
      </h1>
      <div className="container mx-auto">
        <div className="flex w-full flex-wrap">
          <div className="w-1/2">
            <h3 className="mb-2 text-left text-3xl font-black uppercase text-gray-900">
              A Whole New Way to Invest in and Engage with Talent
            </h3>
            <p className="text-base tracking-[-0.32px] text-neutral-600">
              One platform to invest, earn, interact, influence, and celebrate
              Talent
            </p>
            <div className="mt-5 flex">
              <img
                src="/assets/images/app-store.png"
                className="relative mr-5 h-auto w-40"
              />
              <img
                src="/assets/images/google-play.png"
                className="relative h-auto w-40"
              />
            </div>
          </div>
          <div className="w-1/2">
            <img
              src="/assets/images/banner-img.png"
              className="relative ml-2 mt-[-180px] h-auto w-full"
            />
          </div>
        </div>
      </div>
      <img
        src="/assets/images/banner.png"
        className="mt-[-500px] h-auto w-full object-cover"
      />
    </section>
  )
}
