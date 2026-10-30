"use client"

import { revealClass, revealDelay, useReveal } from "@/components/reveal"
import type { TrackItem } from "@/lib/tracks-data"

/** Three numbered lines in a hairline grid, the same treatment as the homepage platform cards. */
export function TrackWhatWeDo({ track }: { track: TrackItem }) {
  const { ref, isVisible } = useReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-24 lg:py-32 px-6 lg:px-12 bg-sand/50">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-12 ${revealClass(isVisible, "up-sm")}`}
        >
          What we do
        </h2>

        <ol className="grid md:grid-cols-3 gap-px bg-border">
          {track.doLines.map((line, index) => (
            <li
              key={line}
              className={`group bg-background p-10 lg:p-12 hover:bg-card ${revealClass(isVisible)}`}
              style={revealDelay(200 + index * 150)}
            >
              <span className="block font-serif text-4xl text-stone/50 group-hover:text-sage transition-colors duration-500 mb-6">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="font-serif text-2xl md:text-3xl leading-snug text-foreground">{line}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
