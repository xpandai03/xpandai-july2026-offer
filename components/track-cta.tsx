import { BookCallLink } from "@/components/book-call-link"

type TrackCtaProps = {
  /** Attribution slug, sent with the click and carried to /book. */
  track: string
  /** Where on the page this CTA lives, sent with the click event. */
  location: string
  label: string
}

/** Primary booking button for track pages. Same styling as the homepage hero CTA. */
export function TrackCta({ track, location, label }: TrackCtaProps) {
  return (
    <BookCallLink
      track={track}
      location={location}
      className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-sage text-primary-foreground text-sm tracking-widest uppercase hover:bg-sage/90 transition-all duration-500"
    >
      {label}
      <svg
        className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </BookCallLink>
  )
}
