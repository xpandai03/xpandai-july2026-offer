"use client"

import { EmphasisHeading } from "@/components/emphasis-heading"
import { revealClass, revealDelay, useReveal } from "@/components/reveal"
import { offerProblem } from "@/lib/offer-data"

/** Four short problem statements in rounded cards on the panel color. */
export function OfferProblem() {
  const { ref, isVisible } = useReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-sand">
      <div className="max-w-5xl mx-auto">
        <EmphasisHeading
          text={offerProblem.headline}
          className={`text-3xl md:text-5xl text-center text-foreground mb-12 ${revealClass(isVisible, "up-sm")}`}
        />

        <ul className="grid gap-4 md:grid-cols-2 md:gap-5">
          {offerProblem.items.map((item, index) => (
            <li
              key={item}
              className={`rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm ${revealClass(isVisible)}`}
              style={revealDelay(150 + index * 100)}
            >
              <span aria-hidden="true" className="mb-5 block h-1 w-10 rounded-full bg-primary" />
              <p className="text-lg font-light leading-relaxed tracking-[-0.01em] text-foreground">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
