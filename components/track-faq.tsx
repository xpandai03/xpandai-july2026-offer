"use client"

import { revealClass, revealDelay, useReveal } from "@/components/reveal"
import type { TrackItem } from "@/lib/tracks-data"

/** Questions and answers, always open. Same split layout as the process section. */
export function TrackFaq({ track }: { track: TrackItem }) {
  const { ref, isVisible } = useReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-24">
        <div className="lg:col-span-4">
          <h2 className={`text-xs tracking-[0.3em] uppercase text-terracotta ${revealClass(isVisible, "up-sm")}`}>
            Questions
          </h2>
        </div>

        <dl className="lg:col-span-8">
          {track.faq.map((item, index) => (
            <div
              key={item.question}
              className={`py-8 lg:py-10 border-t border-border last:border-b ${revealClass(isVisible)}`}
              style={revealDelay(200 + index * 120)}
            >
              <dt className="font-serif text-2xl md:text-3xl text-foreground mb-3">{item.question}</dt>
              <dd className="text-muted-foreground leading-relaxed max-w-2xl">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
