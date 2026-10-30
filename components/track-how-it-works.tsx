"use client"

import { revealClass, revealDelay, useReveal } from "@/components/reveal"
import type { TrackItem } from "@/lib/tracks-data"

/** Numbered steps with a sticky label, the same layout as the homepage process section. */
export function TrackHowItWorks({ track }: { track: TrackItem }) {
  const { ref, isVisible } = useReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-24">
        <div className="lg:col-span-4">
          <h2
            className={`lg:sticky lg:top-32 text-xs tracking-[0.3em] uppercase text-terracotta ${revealClass(isVisible, "up-sm")}`}
          >
            How it works
          </h2>
        </div>

        <ol className="lg:col-span-8">
          {track.howItWorks.map((step, index) => (
            <li
              key={step.title}
              className={`group py-10 lg:py-12 border-t border-border last:border-b ${revealClass(isVisible)}`}
              style={revealDelay(200 + index * 150)}
            >
              <div className="flex gap-8 lg:gap-12">
                <span className="font-serif text-4xl lg:text-5xl text-stone/50 group-hover:text-sage transition-colors duration-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-xl">{step.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
