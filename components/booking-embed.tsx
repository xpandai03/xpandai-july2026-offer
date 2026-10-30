"use client"

import { useEffect, useRef } from "react"

import { trackEvent } from "@/lib/analytics"
import { BOOKING_EMBED_URL } from "@/lib/site"
import { getUtm } from "@/lib/utm"

/**
 * Inline Google Calendar booking page. Reports `book_view` on mount and
 * `book_start` the first time the visitor interacts with the calendar.
 *
 * The iframe is cross-origin, so a completed booking cannot be observed here.
 * Interaction is detected the standard way: the window blurs while the iframe
 * is the active element.
 */
export function BookingEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const trackSlug = new URLSearchParams(window.location.search).get("track") ?? "direct"
    const campaign = getUtm().utm_campaign ?? "none"
    trackEvent("book_view", { track: trackSlug, campaign })

    const onBlur = () => {
      // Runs after focus moves, so activeElement is already the iframe.
      setTimeout(() => {
        if (document.activeElement !== iframeRef.current) return
        trackEvent("book_start", { track: trackSlug, campaign })
        window.removeEventListener("blur", onBlur)
      }, 0)
    }

    window.addEventListener("blur", onBlur)
    return () => window.removeEventListener("blur", onBlur)
  }, [])

  return (
    // No loading label: Google's page has a transparent background, so anything behind it would show through.
    <div className="border border-border bg-card">
      {/* Tall enough for a full day of slots without scrolling inside the frame. */}
      <iframe
        ref={iframeRef}
        src={BOOKING_EMBED_URL}
        title="Book a 30-minute call with Xpand AI"
        className="block w-full h-[1400px] md:h-[1220px] border-0"
      />
    </div>
  )
}
