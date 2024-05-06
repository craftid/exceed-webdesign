import React from "react"

import ScrollTo from "@/components/ui/scrollTo"

import Header from "./_components/header"

const navitems = [
  {
    name: "services",
    scrollTo: "services",
  },
]

export default function LandingLayout(props: { children?: React.ReactNode }) {
  return (
    <>
      <Header>
        {/* {navitems.map((item, index) => {
          return (
            <ScrollTo key={index} elementId={item.scrollTo}>
              {item.name}
            </ScrollTo>
          )
        })} */}
      </Header>
      {props.children}
    </>
  )
}
