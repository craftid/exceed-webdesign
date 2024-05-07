import React from "react"
import Image from "next/image"
import Link from "next/link"

const artists = [
  {
    image: "/assets/images/artist-1.png",
  },
  {
    image: "/assets/images/artist-1.png",
  },
  {
    image: "/assets/images/artist-1.png",
  },
]

export default function Nfts() {
  return (
    <section className="relative w-full py-20">
      <div className="container mx-auto">
        <h2 className="mb-20 text-center text-5xl font-black uppercase text-gray-900 2xl:text-6xl">
          NFTs for Artists Launching Soon
        </h2>
        <div className="relative mx-auto flex w-3/4 justify-center">
          <Image
            width={19}
            height={20}
            alt=""
            src="/assets/images/frame.png"
            className="absolute -top-10 right-72 h-auto w-auto"
          />
          {artists.map((data, index) => (
            <div
              key={index}
              className="relative z-20 h-96 w-80 overflow-hidden rounded-3xl first-of-type:-mr-10 first-of-type:mt-12 first-of-type:-rotate-[20deg] last-of-type:z-10 last-of-type:-ml-10 last-of-type:mt-12 last-of-type:rotate-[20deg]"
            >
              <Image
                width={389}
                height={455}
                alt=""
                src={data.image}
                className="z-10 h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-center justify-center backdrop-blur-md transition-all hover:backdrop-blur-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="191"
                  height="186"
                  viewBox="0 0 191 186"
                  fill="none"
                >
                  <path
                    opacity="0.55"
                    d="M171.549 114.745L131.117 79.9339L139.784 26.8388L114.392 36.081L106.851 88.7658L126.572 106.434L107.555 113.356L100.8 107.302L92.8943 162.578L28.8393 185.892L40.7726 112.816L0.431899 78.0859L19.6521 71.0903L59.9928 105.821L51.3217 158.907L76.7145 149.665L84.2583 96.9889L64.6169 79.395L83.6338 72.4734L90.3007 78.4563L98.2749 23.3408L162.321 0.0300659L150.328 72.9417L190.77 107.749L171.549 114.745Z"
                    fill="#8F59FF"
                  />
                </svg>
              </div>
            </div>
          ))}
          <Image
            width={31}
            height={59}
            alt=""
            src="/assets/images/and.png"
            className="absolute bottom-0 left-0 h-auto w-auto"
          />
        </div>
        <Link
          href="#"
          className="relative mx-auto block w-fit border-violet-500 bg-violet-500 px-12 py-5 text-base font-bold text-white transition-all after:absolute after:-bottom-1 after:-right-1 after:-z-10 after:h-14 after:w-full after:border after:border-gray-900 after:content-[''] hover:bg-gray-900"
        >
          Get Started
        </Link>
      </div>

      <Image
        width={1920}
        height={590}
        alt=""
        src="/assets/images/pattern-2.png"
        className="-mt-12 h-80 w-full object-cover"
      />
    </section>
  )
}
