import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useReducedMotion, useSpring } from "motion/react"

import { cn } from "@/lib/utils"

export function NumberTicker({
  value,
  startValue = 0,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  ...props
}) {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const motionValue = useMotionValue(direction === "down" ? value : startValue)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: "0px" })

  const format = (n) =>
    Intl.NumberFormat("en-US", {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    }).format(Number(n.toFixed(decimalPlaces)))

  const finalValue = direction === "down" ? startValue : value

  useEffect(() => {
    if (prefersReducedMotion) return

    let timer = null

    if (isInView) {
      timer = setTimeout(() => {
        motionValue.set(direction === "down" ? startValue : value)
      }, delay * 1000)
    }

    return () => {
      if (timer !== null) {
        clearTimeout(timer)
      }
    };
  }, [motionValue, isInView, delay, value, direction, startValue, prefersReducedMotion])

  useEffect(() => {
    if (prefersReducedMotion) return

    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = format(latest)
      }
    })
  }, [springValue, decimalPlaces, prefersReducedMotion])

  return (
    <span
      ref={ref}
      className={cn("inline-block tracking-wider tabular-nums", className)}
      {...props}>
      {prefersReducedMotion ? format(finalValue) : startValue}
    </span>
  );
}
