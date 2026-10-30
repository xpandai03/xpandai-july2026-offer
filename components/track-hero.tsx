"use client"

import { revealClass, revealDelay, useReveal } from "@/components/reveal"
import { TrackCta } from "@/components/track-cta"
import type { TrackItem } from "@/lib/tracks-data"

export function TrackHero({ track }: { track: TrackItem }) {
  const { ref, isVisible } = useReveal<HTMLElement>(0)

  return (
    <section ref={ref} className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 px-6 lg:px-12">
      {/* Same background wash as the homepage hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-sand/30 to-background" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p
          className={`text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 ${revealClass(isVisible, "up-sm")}`}
          style={revealDelay(300)}
        >
          {track.eyebrow}
        </p>

        <h1
          className={`font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight text-foreground mb-8 text-balance ${revealClass(isVisible)}`}
          style={revealDelay(500)}
        >
          {track.headline.lead}
          <span className="block text-sage">{track.headline.accent}</span>
        </h1>

        <p
          className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12 text-pretty ${revealClass(isVisible)}`}
          style={revealDelay(700)}
        >
          {track.subhead}
        </p>

        <div className={revealClass(isVisible)} style={revealDelay(1000)}>
          <TrackCta track={track.slug} location="track-hero" label={track.ctaLabel} />
        </div>
      </div>
    </section>
  )
}
