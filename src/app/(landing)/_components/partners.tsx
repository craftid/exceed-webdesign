import React from "react"

export default function Partners() {
  return (
    <section className="w-full py-24 ">
      <div className="container mx-auto">
        <div className="flex items-center justify-center text-center">
          <h2 className="text-6xl font-black uppercase text-gray-900">our</h2>
          <img
            src="/assets/images/brm.png"
            className="relative mx-5 h-auto w-96"
          />
          <h2 className="text-6xl font-black uppercase text-gray-900">
            partners
          </h2>
        </div>
      </div>
      <img
        src="/assets/images/partner.png"
        className="relative -mt-20 h-[300px] w-auto object-contain"
      />
    </section>
  )
}
