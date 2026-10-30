"use client"

import { revealClass, revealDelay, useReveal } from "@/components/reveal"
import { TrackCta } from "@/components/track-cta"
import type { TrackItem } from "@/lib/tracks-data"

/** Shortened founder block from /demos: photo, name, one line and the booking CTA. */
export function TrackFounder({ track }: { track: TrackItem }) {
  const { ref, isVisible } = useReveal<HTMLElement>(0.2)

  return (
    <section ref={ref} className="py-24 lg:py-32 px-6 lg:px-12 bg-sand/50">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
        <div
          className={`relative w-40 md:w-56 shrink-0 aspect-square overflow-hidden bg-sand ${revealClass(isVisible, "left")}`}
        >
          <img
            src="/raunek-profile.jpg"
            alt="Raunek Pratap, founder of Xpand Technology"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div>
          <h2
            className={`font-serif text-4xl md:text-5xl font-light leading-[1.1] text-foreground mb-4 ${revealClass(isVisible)}`}
            style={revealDelay(200)}
          >
            Raunek Pratap
          </h2>
          <p
            className={`text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl ${revealClass(isVisible)}`}
            style={revealDelay(350)}
          >
            I build every system myself and stay your point of contact.
          </p>
          <div className={revealClass(isVisible)} style={revealDelay(500)}>
            <TrackCta track={track.slug} location="track-founder" label={track.ctaLabel} />
          </div>
        </div>
      </div>
    </section>
  )
}
