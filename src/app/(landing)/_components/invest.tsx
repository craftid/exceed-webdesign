import React from "react"
import Image from "next/image"

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
    <section className="w-full py-10 lg:py-20">
      <div className="container mx-auto">
        <h2 className="mb-5 text-center text-[22px] font-black uppercase text-gray-900 md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          Invest with Passion in Talent You Believe in
        </h2>
        <p className="mx-auto mb-10 w-full text-center text-base tracking-[-0.32px] text-neutral-600 lg:mb-5 lg:w-4/5 2xl:w-1/2">
          Invest in something you&apos;re truly passionate about and believe in.
          Whether it&apos;s your favorite musician, a soccer player you admire,
          or a creator soon to make it big - Exceed lets you discover, invest,
          and engage with your favorite Talent.
        </p>
        <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
          <div className="w-full md:w-3/12">
            <div className="relative before:absolute before:-left-10 before:top-20 before:z-10 before:h-24 before:w-24 before:bg-zinc-300 before:content-['']">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="773"
                height="535"
                viewBox="0 0 773 535"
                fill="none"
                className="absolute left-[-280px] top-2/4 -z-10 -translate-y-2/4"
              >
                <path
                  opacity="0.2"
                  d="M648.001 460.153L541.301 267.138L648.886 72.5117L538.365 72.5117L435.687 267.138L486.765 363.967H403.995L386.5 330.792L278.795 535H0L148.085 267.138L41.6262 74.565L125.281 74.565L231.739 267.138L124.155 461.723L234.675 461.723L337.353 267.138L286.477 170.71H369.246L386.5 203.484L494.245 0L773 0L624.915 267.138L731.655 460.153H648.001Z"
                  className="fill-stone-300"
                />
              </svg>
              <Image
                width={326}
                height={813}
                alt=""
                src="/assets/images/phone.png"
                className="relative mx-auto h-auto w-60 md:mr-5 md:w-80 "
              />
            </div>
          </div>
          <div className="w-full md:w-3/4 2xl:w-3/5">
            {invest.map((data, index) => (
              <div
                key={index}
                className="mb-5 flex items-center border-b-2 border-neutral-400 pb-5"
              >
                <div className="w-1/5">
                  <Image
                    width={98}
                    height={83}
                    alt=""
                    src={data.icon}
                    className="h-auto w-16 lg:w-24"
                  />
                </div>
                <div className="w-2/5">
                  <h4 className="w-4/5 text-xl font-bold uppercase text-gray-900 lg:text-2xl">
                    {data.title}
                  </h4>
                </div>
                <div className="w-2/5">
                  <p className="text-base font-normal capitalize tracking-tighter text-neutral-600">
                    {data.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
