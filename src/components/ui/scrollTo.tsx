"use client"

import React from "react"

import { Button, type ButtonProps } from "./button"

interface ScrollToProps extends ButtonProps {
  elementId: string
}

const ScrollTo = React.forwardRef<HTMLButtonElement, ScrollToProps>(
  ({ elementId, children, className, ...props }) => {
    const handleScrollTo = () => {
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        return
      } else {
        console.error(`Element with id ${elementId} not found`)
      }
    }

    return (
      <Button {...props} onClick={handleScrollTo} className={className}>
        {children}
      </Button>
    )
  }
)
ScrollTo.displayName = "ScrollTo"

export default ScrollTo
