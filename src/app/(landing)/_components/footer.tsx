import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <section className="w-full">
      <div className="container mx-auto">
        <div className="flex items-center justify-between border-b border-gray-900 pb-12">
          <div className="basis-1/5">
            <a href="/" className="">
              <Image
                alt="logo"
                loading="lazy"
                width="200"
                height="60"
                src="/assets/images/logo.png"
              />
            </a>
          </div>
          <div className="basis-3/5 text-center">
            <ul className="inline-flex list-none gap-5">
              <li>
                <Link
                  className="text-base font-bold uppercase text-gray-900 transition-all hover:text-violet-500"
                  href="#"
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-bold uppercase text-gray-900 transition-all hover:text-violet-500"
                  href="#"
                >
                  about
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-bold uppercase text-gray-900 transition-all hover:text-violet-500"
                  href="#"
                >
                  faq&apos;s
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-bold uppercase text-gray-900 transition-all hover:text-violet-500"
                  href="#"
                >
                  contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className="basis-1/5">
            <ul className="inline-flex list-none gap-5">
              <li>
                <Link
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500 transition-all hover:bg-gray-900"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="16"
                    viewBox="0 0 10 16"
                    fill="none"
                  >
                    <path
                      d="M2.66667 5.33333H0V8H2.66667V16H6.66667V8H9.09333L9.33333 5.33333H6.66667V4.22267C6.66667 3.58533 6.79467 3.33333 7.41067 3.33333H9.33333V0H6.128C3.73067 0 2.66667 1.056 2.66667 3.07733V5.33333Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500 transition-all hover:bg-gray-900"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="13"
                    viewBox="0 0 16 13"
                    fill="none"
                  >
                    <path
                      d="M16 1.54C15.412 1.80133 14.7787 1.97733 14.1147 2.05733C14.7933 1.65067 15.312 1.008 15.5587 0.241333C14.924 0.617333 14.2213 0.890667 13.4733 1.03733C12.876 0.398667 12.0213 0 11.0787 0C8.95867 0 7.40133 1.97733 7.88 4.03067C5.15333 3.89333 2.73333 2.58667 1.11467 0.601333C0.254667 2.076 0.669333 4.00667 2.13067 4.984C1.59333 4.96667 1.088 4.81867 0.645333 4.57333C0.609333 6.09333 1.7 7.516 3.27867 7.83333C2.81733 7.95867 2.31067 7.988 1.796 7.88933C2.21333 9.19333 3.428 10.1413 4.86267 10.168C3.48 11.2507 1.74267 11.7347 0 11.5293C1.45333 12.4613 3.17733 13.004 5.03067 13.004C11.1267 13.004 14.5693 7.856 14.3613 3.23867C15.004 2.77733 15.56 2.19867 16 1.54Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500 transition-all hover:bg-gray-900"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 0C5.82667 0 5.556 0.00933333 4.70133 0.0493333C1.79467 0.182667 0.181333 1.79467 0.048 4.70133C0.00933333 5.556 0 5.828 0 8C0 10.1733 0.00933333 10.4453 0.048 11.2987C0.181333 14.204 1.79467 15.8187 4.70133 15.952C5.556 15.9907 5.82667 16 8 16C10.1733 16 10.4453 15.9907 11.3 15.952C14.2013 15.8187 15.8213 14.2067 15.952 11.2987C15.9907 10.4453 16 10.1733 16 8C16 5.828 15.9907 5.556 15.952 4.70133C15.8213 1.79867 14.2067 0.181333 11.3 0.0493333C10.4453 0.00933333 10.1733 0 8 0ZM8 1.44267C10.136 1.44267 10.3893 1.45067 11.2333 1.48933C13.4027 1.588 14.4133 2.616 14.5133 4.768C14.5507 5.612 14.5587 5.864 14.5587 8C14.5587 10.136 14.5507 10.3893 14.5133 11.232C14.4133 13.3827 13.404 14.4133 11.2333 14.512C10.3893 14.5493 10.1373 14.5587 8 14.5587C5.864 14.5587 5.61067 14.5507 4.768 14.512C2.59467 14.412 1.588 13.38 1.488 11.232C1.45067 10.3893 1.44133 10.136 1.44133 8C1.44133 5.864 1.45067 5.61067 1.488 4.768C1.58667 2.61467 2.59733 1.58667 4.768 1.488C5.61067 1.44933 5.864 1.44267 8 1.44267ZM3.8916 8.00009C3.8916 5.73076 5.7316 3.89209 7.9996 3.89209C10.2676 3.89209 12.1076 5.73209 12.1076 8.00009C12.1076 10.2694 10.2676 12.1081 7.9996 12.1081C5.7316 12.1081 3.8916 10.2694 3.8916 8.00009ZM7.99967 10.6668C6.52634 10.6668 5.33301 9.4735 5.33301 8.00016C5.33301 6.52816 6.52634 5.3335 7.99967 5.3335C9.47167 5.3335 10.6677 6.52683 10.6677 8.00016C10.6677 9.4735 9.47167 10.6668 7.99967 10.6668ZM11.3093 3.73067C11.3093 3.2 11.74 2.77067 12.2693 2.77067C12.8013 2.77067 13.2307 3.2 13.2307 3.73067C13.2307 4.26133 12.8 4.69067 12.2693 4.69067C11.7387 4.69067 11.3093 4.26 11.3093 3.73067Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between py-7">
          <div className="w-fit">
            <p className="m-0 text-base font-light uppercase text-gray-900">
              © 2022 Exceed Ltd. All rights reserved.
            </p>
          </div>
          <div className="w-fit">
            <ul className="inline-flex list-none gap-5">
              <li>
                <Link
                  className="m-0 text-base font-light uppercase text-gray-900 transition-all hover:text-violet-500"
                  href="#"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="m-0 text-base font-light uppercase text-gray-900 transition-all hover:text-violet-500"
                  href="#"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto w-11/12 py-8">
          <p className="mb-5 text-center text-sm capitalize -tracking-tight text-neutral-600">
            Exceed does not give investment advice, endorsement, analysis or
            recommendations with respect to any securities and/or offerings. The
            content of this site should not be construed as financial advice nor
            as an offer or solicitation to any person in any jurisdiction to
            purchase or subscribe for any investment or security.
          </p>
          <p className="mb-5 text-center text-sm capitalize -tracking-tight text-neutral-600">
            Offers are made exclusively through Exceed&apos;s official offering
            documents and solely to eligible investors in jurisdictions where
            such offer, distribution, publication, availability or use would be
            permitted under applicable laws. All information in this site is
            provided “as is”, neither Exceed nor any of its affiliates,
            officers, directors, agents, employees and/or representatives make
            any warranty, express or implied, of any kind, related to the
            adequacy, accuracy or completeness of that information or the use of
            it.
          </p>
          <p className="mb-5 text-center text-sm capitalize -tracking-tight text-neutral-600">
            Any decision to invest should be made only on the basis of the
            relevant documentation for each investment and the risks detailed
            therein.
          </p>
        </div>
      </div>
    </section>
  )
}
