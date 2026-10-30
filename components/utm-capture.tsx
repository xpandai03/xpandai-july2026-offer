"use client"

import { useEffect } from "react"

import { usePathname } from "next/navigation"

import { captureUtm } from "@/lib/utm"

/**
 * Stores campaign parameters from the landing URL. Mounted once in the root
 * layout; renders nothing. Re-runs on client navigation in case a tagged
 * internal link is followed.
 */
export function UtmCapture() {
  const pathname = usePathname()

  useEffect(() => {
    captureUtm(window.location.search)
  }, [pathname])

  return null
}
