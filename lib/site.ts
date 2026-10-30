/** Canonical production origin. Used for metadataBase, the sitemap and robots. */
export const SITE_URL = "https://www.xpandai.com"

/**
 * Public Google Calendar appointment schedule. BOOKING_PAGE_URL is the short
 * link shared everywhere; BOOKING_EMBED_URL is the schedule it redirects to, in
 * the inline-embed form Google documents (`?gv=true`).
 */
export const BOOKING_PAGE_URL = "https://calendar.app.google/vuZc6p1QRVpeBF8u7"
export const BOOKING_EMBED_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2yLtSHP9jqfrGB2yUd8PzJZDx9b7B4cyirVhEek6nEu_mhdznn5odX2jPpk_eRjmV3uy-iCHXV?gv=true"

/** Public contact address, used on the legal pages. */
export const CONTACT_EMAIL = "raunek@xpandai.com"

/**
 * Founder LinkedIn profile. The footer hides the link while this is null, so the
 * site never ships a dead `#` link.
 */
export const LINKEDIN_URL: string | null = null

/**
 * Social preview image (app/opengraph-image.png). The home page gets it from the
 * file convention; pages that declare their own openGraph or twitter blocks
 * replace the inherited ones, so they must list it explicitly.
 */
export const SOCIAL_IMAGE = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "Xpand AI: Your marketing brings the leads. We make sure they get followed up, booked and measured.",
}
