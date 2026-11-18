"use client"

import { EmphasisHeading } from "@/components/emphasis-heading"
import { revealClass, revealDelay, useReveal } from "@/components/reveal"
import { offerProblem } from "@/lib/offer-data"

/** Four short problem statements as rows in one rounded card on the panel color. */
export function OfferProblem() {
  const { ref, isVisible } = useReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-sand">
      <div className="max-w-3xl mx-auto">
        <EmphasisHeading
          text={offerProblem.headline}
          className={`text-3xl md:text-5xl text-center text-foreground mb-12 ${revealClass(isVisible, "up-sm")}`}
        />

        <ul
          className={`divide-y divide-border rounded-2xl border border-border bg-card px-6 md:px-8 shadow-sm ${revealClass(isVisible)}`}
          style={revealDelay(150)}
        >
          {offerProblem.items.map((item) => (
            <li key={item} className="flex items-start gap-4 py-5 md:py-6">
              <span aria-hidden="true" className="mt-3.5 block h-1 w-5 shrink-0 rounded-full bg-primary" />
              <p className="text-lg font-light leading-relaxed tracking-[-0.01em] text-foreground">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
