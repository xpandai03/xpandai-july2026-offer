"use client"

import { revealClass, revealDelay, useReveal } from "@/components/reveal"
import type { TrackItem } from "@/lib/tracks-data"

/** One proof statement on the full-bleed sage band used by the homepage principle quote. */
export function TrackProof({ track }: { track: TrackItem }) {
  const { ref, isVisible } = useReveal<HTMLElement>(0.2)

  return (
    <section ref={ref} className="py-24 lg:py-32 px-6 lg:px-12 bg-sage">
      <figure className="max-w-4xl mx-auto text-center">
        <h2 className="sr-only">Client result</h2>
        <blockquote
          className={`font-serif text-2xl md:text-3xl lg:text-4xl font-light text-primary-foreground leading-relaxed mb-10 text-balance ${revealClass(isVisible)}`}
          style={revealDelay(200)}
        >
          {track.proof.text}
        </blockquote>
        <figcaption
          className={`text-sm tracking-widest uppercase text-primary-foreground/80 ${revealClass(isVisible)}`}
          style={revealDelay(400)}
        >
          {track.proof.attribution}
        </figcaption>
      </figure>
    </section>
  )
}
