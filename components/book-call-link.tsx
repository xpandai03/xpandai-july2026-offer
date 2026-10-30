"use client"

import type React from "react"
import { useEffect, useState } from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { trackEvent } from "@/lib/analytics"
import { utmQuery } from "@/lib/utm"

/** Single source of truth for the booking destination and CTA label. */
export const BOOKING_PATH = "/book"
export const BOOKING_LABEL = "Book a 30-minute intro call"

/** Attribution slug for a page: "home" for "/", otherwise the first path segment ("leads", "demos"). */
export function trackFromPathname(pathname: string): string {
  return pathname.split("/").filter(Boolean)[0] ?? "home"
}

type BookCallLinkProps = {
  /** Where on the page this CTA lives, sent with the click event. */
  location: string
  /** Attribution slug. Defaults to the current page's slug. */
  track?: string
  className?: string
  children: React.ReactNode
}

/**
 * Booking CTA. Routes to the internal /book page in the same tab, carrying the
 * track slug and the visitor's stored UTMs, and reports the click to Vercel Web
 * Analytics. Styling is passed in so each surface keeps its own look.
 */
export function BookCallLink({ location, track: trackOverride, className, children }: BookCallLinkProps) {
  const pathname = usePathname()
  const [trackSlug, setTrackSlug] = useState(trackOverride ?? trackFromPathname(pathname))
  // Server render and first paint carry the track only; stored UTMs are added after mount.
  const [href, setHref] = useState(`${BOOKING_PATH}?track=${encodeURIComponent(trackSlug)}`)

  useEffect(() => {
    // A CTA on /book itself (the footer) keeps the visitor's original track.
    const slug =
      trackOverride ??
      (pathname === BOOKING_PATH
        ? (new URLSearchParams(window.location.search).get("track") ?? "book")
        : trackFromPathname(pathname))
    setTrackSlug(slug)
    setHref(`${BOOKING_PATH}${utmQuery({ track: slug })}`)
  }, [pathname, trackOverride])

  return (
    <Link href={href} onClick={() => trackEvent("book_call_click", { location, track: trackSlug })} className={className}>
      {children}
    </Link>
  )
}
