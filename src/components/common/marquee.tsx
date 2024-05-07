"use client"

import React, { useEffect, useRef, useState } from "react"
import { wrap } from "@motionone/utils"
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion"

import { cn } from "@/lib/utils"

interface ParallaxProps {
  children: React.ReactNode
  baseVelocity: number
  props?: any
  className?: string
  wrapMin?: number
  wrapMax?: number
  repeatChildrenCount?: number
}

function Marquee({
  children,
  baseVelocity = 100,
  props,
  wrapMin = -20,
  wrapMax = -45,
  className,
}: ParallaxProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  const [isHovered, setIsHovered] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const childRef = useRef<HTMLDivElement>(null)

  const [repeatChildrenCount, setRepeatChildrenCount] = useState(1)

  const calculatedChildren = Array.from({
    length: repeatChildrenCount,
  }).map((_, i) =>
    React.cloneElement(children as React.ReactElement, { key: i })
  )

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(wrapMin, wrapMax, v)}%`)

  const directionFactor = useRef<number>(1)
  useAnimationFrame((t, delta) => {
    if (isHovered) return
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  useEffect(() => {
    const containerWidth = containerRef.current?.clientWidth || 0
    const childWidth = childRef.current?.scrollWidth || 0
    const repeatCount = Math.ceil(containerWidth / childWidth) + 2
    setRepeatChildrenCount(repeatCount)
  }, [])
  return (
    <div
      className={cn(
        "flex flex-nowrap overflow-hidden whitespace-nowrap",
        className
      )}
      {...props}
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex flex-nowrap whitespace-nowrap"
        style={{ x }}
        ref={childRef}
      >
        {calculatedChildren}
      </motion.div>
    </div>
  )
}

export default Marquee
