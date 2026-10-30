"use client"

import { useEffect, useRef, useState } from "react"

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)"

/**
 * The site's scroll reveal, extracted from the section components: flips to
 * visible the first time the element enters the viewport and stays visible.
 * Visitors who prefer reduced motion see everything immediately.
 */
export function useReveal<T extends Element = HTMLElement>(threshold = 0.1) {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

/** Starting offsets used by the existing sections. Rightward slides are omitted: they widen the page on phones. */
const OFFSETS = {
  up: "translate-y-8",
  "up-sm": "translate-y-4",
  left: "-translate-x-8",
  fade: "",
} as const

export type RevealFrom = keyof typeof OFFSETS

/** Classes for one revealing element: the 1s fade and slide used across the site, none under reduced motion. */
export function revealClass(isVisible: boolean, from: RevealFrom = "up"): string {
  const state = isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${OFFSETS[from]}`
  return `transition-all duration-1000 motion-reduce:transition-none ${state}`
}

/** Stagger helper, matching the inline `transitionDelay` the grids already use. */
export function revealDelay(ms: number) {
  return { transitionDelay: `${ms}ms` }
}
