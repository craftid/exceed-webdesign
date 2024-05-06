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
    <section className="w-full pb-24 pt-24">
      <div className="bg-vector container mx-auto overflow-hidden rounded-[50px] bg-gray-900 bg-contain bg-center bg-no-repeat px-40 py-24 text-center">
        <h2 className="mb-20 text-6xl font-black uppercase text-white">
          We Take Pride in Our Numbers
        </h2>
        <div className="flex items-center justify-between text-center text-white">
          {stats.map((data, index) => (
            <div
              key={index}
              className="w-3/12 border-r border-white p-5 last-of-type:border-r-0"
            >
              <h3 className="mb-5 text-6xl font-black uppercase">
                {data.number}
              </h3>
              <p className="mx-auto w-4/5 text-base font-normal capitalize tracking-tighter">
                {data.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
