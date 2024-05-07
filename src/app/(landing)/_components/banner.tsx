import React from "react"

export default function HomeBanner() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto">
        <h1 className="text-center font-black uppercase leading-[100%] tracking-[25.68px] text-violet-500 xl:text-[225px] 2xl:text-[300px]">
          EXCEED
        </h1>
        <div className="relative z-10 flex w-full flex-wrap items-center justify-between">
          <div className="w-1/2 2xl:w-2/6">
            <h3 className="mb-2 text-left text-3xl font-black uppercase text-gray-900 2xl:w-11/12">
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
          <div className="w-1/2 2xl:w-1/2">
            <img
              src="/assets/images/banner-img.png"
              className="relative mt-[-150px] h-auto w-full 2xl:ml-5 2xl:mt-[-180px]"
            />
          </div>
        </div>
      </div>
      <img
        src="/assets/images/banner.png"
        className="h-auto w-full object-cover xl:mt-[-300px] 2xl:mt-[-500px]"
      />
    </section>
  )
}
