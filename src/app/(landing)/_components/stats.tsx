import React from "react"

const stats = [
  {
    number: "130",
    desc: "Years of combined experience",
  },
  {
    number: "$7M",
    desc: "Out of $25M Goal Invested so far in Talent",
  },
  {
    number: "8",
    desc: "Talents engaged (and just getting started)",
  },
  {
    number: "9",
    desc: "Industry awards won by our Talents",
  },
]

export default function Stats() {
  return (
    <section className="w-full py-10 lg:py-20">
      <div className="container mx-auto overflow-hidden rounded-[50px] bg-gray-900 bg-vector bg-cover bg-center bg-no-repeat px-10 py-20 text-center lg:px-40 lg:py-24">
        <h2 className="mb-10 text-3xl font-black uppercase text-white lg:mb-20 lg:text-4xl xl:text-5xl 2xl:text-6xl">
          We Take Pride in Our Numbers
        </h2>
        <div className="flex items-center justify-between text-center text-white">
          {stats.map((data, index) => (
            <div
              key={index}
              className="w-3/12 border-r border-white p-3 last-of-type:border-r-0 xl:p-4 2xl:p-5"
            >
              <h3 className="mb-5 text-3xl font-black uppercase lg:text-4xl xl:text-5xl 2xl:text-6xl">
                {data.number}
              </h3>
              <p className="mx-auto text-base font-normal capitalize tracking-tighter lg:w-4/5">
                {data.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
