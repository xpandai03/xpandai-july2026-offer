"use client"

import type React from "react"

import { track } from "@vercel/analytics"

/** Single source of truth for the booking destination and CTA label. */
export const BOOKING_URL = "https://calendar.app.google/vuZc6p1QRVpeBF8u7"
export const BOOKING_LABEL = "Book a 30-minute intro call"

type BookCallLinkProps = {
  /** Where on the page this CTA lives, sent with the click event. */
  location: string
  className?: string
  children: React.ReactNode
}

/**
 * Booking CTA. Opens the booking page in a new tab and reports the click to
 * Vercel Web Analytics. Styling is passed in so each surface keeps its own look.
 */
export function BookCallLink({ location, className, children }: BookCallLinkProps) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("book_call_click", { location })}
      className={className}
    >
      {children}
    </a>
  )
}
