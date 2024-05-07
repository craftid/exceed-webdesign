import React from "react"
import Link from "next/link"

export default function WantToPartner() {
  return (
    <section className="w-full py-20">
      <div className="ml-auto w-11/12">
        <div className="relative z-10 flex items-center justify-between">
          <div className="w-2/5">
            <img src="/assets/images/want.png" className="h-auto w-full" />
          </div>
          <div className="w-3/5">
            <h2 className="mb-5 w-4/5 text-6xl font-black uppercase text-gray-900">
              Want to partner with us on this project?
            </h2>
            <p className="mb-5 w-3/5 text-base font-normal capitalize tracking-tighter">
              We can help you meet your capital needs for your career, engage
              with your target audience, build a community of supporters, and
              benefit from new income sources. We'd love to hear from you.
            </p>
            <Link
              href="#"
              className="relative block w-fit border-violet-500 bg-violet-500 px-12 py-5 text-base font-bold text-white transition-all after:absolute after:-bottom-1 after:-right-1 after:-z-10 after:h-14 after:w-full after:border after:border-gray-900 after:content-[''] hover:bg-gray-900"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <img
        src="assets/images/bottom.png"
        className="mt-[-250px] h-auto w-full"
      />
    </section>
  )
}
