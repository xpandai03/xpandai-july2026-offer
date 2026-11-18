import { ArrowRight } from "lucide-react"

import { BookCallLink } from "@/components/book-call-link"

type OfferButtonProps = {
  label: string
  /** Optional shorter label shown below tablet width (md); the full label shows from md up. */
  shortLabel?: string
  /** Where on the page this button lives, sent with the book_call_click event. */
  location: string
  /** "sm" is the same button sized for the header. */
  size?: "default" | "sm"
}

const SIZES = {
  default: "gap-2 px-7 py-3.5 text-sm md:text-base shadow-lg",
  sm: "gap-1.5 px-4 py-2 text-xs sm:text-sm shadow-md",
} as const

/**
 * The one button on the offer page: a blue pill that routes to /book through
 * BookCallLink, so the track slug, stored UTMs and click tracking carry over.
 * The label is passed in, so the shared BOOKING_LABEL on other pages is untouched.
 */
export function OfferButton({ label, shortLabel, location, size = "default" }: OfferButtonProps) {
  return (
    <BookCallLink
      location={location}
      className={`group inline-flex items-center justify-center rounded-full bg-primary font-medium text-primary-foreground shadow-primary/25 transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none motion-reduce:hover:scale-100 ${SIZES[size]}`}
    >
      {shortLabel ? (
        <>
          <span className="md:hidden">{shortLabel}</span>
          <span className="hidden md:inline">{label}</span>
        </>
      ) : (
        label
      )}
      <ArrowRight
        aria-hidden="true"
        className={`shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 ${size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"}`}
      />
    </BookCallLink>
  )
}
