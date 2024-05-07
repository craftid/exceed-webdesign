import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

export default function Header({
  children,
}: Readonly<{ children?: React.ReactNode }>) {
  return (
    <header className="container mx-auto px-0 py-3">
      <div className="flex items-center justify-between">
        <div className="w-fit">
          <Link href="/">
            <Image
              alt="logo"
              loading="lazy"
              width="200"
              height="60"
              src="/assets/images/logo.png"
            />
          </Link>
        </div>
        <div className="w-fit">
          <ul className="inline-flex list-none items-center gap-5">
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
            <li>
              <Link
                href="#"
                className={cn(
                  "relative block w-fit ",
                  "border-violet-500 bg-violet-500 px-12 py-5 text-base font-bold text-white transition-all duration-300 hover:bg-gray-900",
                  "after:absolute after:-z-10 after:h-14 after:w-full after:border after:border-gray-900 after:content-['']",
                  "after:-bottom-1 after:-right-1 after:transition-all after:duration-300 hover:after:bottom-0 hover:after:right-0"
                )}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
