"use client"

import { revealClass, revealDelay, useReveal } from "@/components/reveal"
import type { TrackItem } from "@/lib/tracks-data"

/** Tier names and what each includes. No prices; the note under the grid explains why. */
export function TrackTiers({ track }: { track: TrackItem }) {
  const { ref, isVisible } = useReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-24 lg:py-32 px-6 lg:px-12 bg-sand/50">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-12 ${revealClass(isVisible, "up-sm")}`}
        >
          Tiers
        </h2>

        <ul className="grid md:grid-cols-3 gap-px bg-border">
          {track.tiers.map((tier, index) => (
            <li
              key={tier.name}
              className={`bg-background p-10 lg:p-12 hover:bg-card ${revealClass(isVisible)}`}
              style={revealDelay(200 + index * 150)}
            >
              <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">{tier.name}</h3>
              <p className="text-muted-foreground leading-relaxed">{tier.description}</p>
            </li>
          ))}
        </ul>

        <p
          className={`mt-10 text-muted-foreground leading-relaxed max-w-2xl ${revealClass(isVisible)}`}
          style={revealDelay(700)}
        >
          {track.tiersNote}
        </p>
      </div>
    </section>
  )
}
