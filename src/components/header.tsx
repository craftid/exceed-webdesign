"use client"

import { forwardRef, HTMLAttributes, RefObject, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import useEvent from "@/hooks/useEvent"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import ScrollTo from "./ui/scrollTo"

const navItems = [
  { label: "Home", href: "#", scrollTo: "home" },
  { label: "About", href: "#", scrollTo: "invest" },
  { label: "faq's", href: "#", scrollTo: "want" },
  { label: "Contact US", href: "#", scrollTo: "newsletter" },
]

const Header = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => {
    const logoRef = useRef(null)

    const isInView = useInView(logoRef as RefObject<Element>, {
      once: true,
    })

    return (
      <motion.header
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="container mx-auto flex w-full items-center justify-between px-4 py-8"
      >
        <div className={cn("w-1/2 sm:w-3/12")}>
          <Link href="#" ref={logoRef}>
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={158}
              height={58}
            />
          </Link>
        </div>

        <div className={cn("w-1/2 sm:w-3/4", "flex items-center justify-end")}>
          <NavigationMenu
            className="hidden lg:block
        "
          >
            <NavigationMenuList
              className={cn("first:*pl-0 last:*pr-0 divide-slate-300 *:px-4")}
            >
              {navItems.map(({ label, href, scrollTo }) => (
                <NavigationMenuItem key={href}>
                  <Link href={href} legacyBehavior passHref>
                    <NavigationMenuLink asChild>
                      <ScrollTo
                        elementId={scrollTo}
                        variant="ghost"
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "text-base font-bold uppercase text-gray-900 transition-all hover:text-violet-500"
                        )}
                      >
                        {label}
                      </ScrollTo>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
              {children}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center justify-between gap-4">
            <Link
              className={cn(
                "relative block w-fit ",
                "border-violet-500 bg-violet-500 text-base font-bold text-white transition-all duration-300 hover:bg-gray-900",
                "px-12 py-5",
                "hidden sm:block",
                "after:absolute after:-z-10 after:h-14 after:w-full after:border after:border-gray-900 after:content-['']",
                "after:-bottom-1 after:-right-1 after:transition-all after:duration-300 hover:after:bottom-0 hover:after:right-0"
              )}
              href="#"
            >
              Get Started
            </Link>
            <Sheet>
              <SheetTrigger className="block lg:hidden" asChild>
                <Button variant="default" className={cn("bg-violet-500")}>
                  <Menu className="text-white" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex w-full flex-col gap-6">
                  <Link href="#" ref={logoRef}>
                    <Image
                      src="/assets/images/logo.png"
                      alt="logo"
                      width={158}
                      height={58}
                      className="w-40"
                    />
                  </Link>
                  <ul className={cn("first:*pt-0 last:*pb-0 grid *:py-2")}>
                    {navItems.map(({ label, href, scrollTo }) => (
                      <li key={href}>
                        <ScrollTo
                          elementId={label}
                          variant="link"
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "font-bold uppercase text-neutral-500"
                          )}
                        >
                          {label}
                        </ScrollTo>
                      </li>
                    ))}
                    {children}
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>
    )
  }
)
Header.displayName = "Header"

export default Header
