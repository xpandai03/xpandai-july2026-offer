"use client"

import { EmphasisHeading } from "@/components/emphasis-heading"
import { revealClass, revealDelay, useReveal } from "@/components/reveal"
import { offerHowItWorks } from "@/lib/offer-data"

/** Five numbered steps, one rounded card each. */
export function OfferHowItWorks() {
  const { ref, isVisible } = useReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <EmphasisHeading
          text={offerHowItWorks.headline}
          className={`text-3xl md:text-5xl text-center text-foreground mb-12 ${revealClass(isVisible, "up-sm")}`}
        />

        <ol className="space-y-4">
          {offerHowItWorks.steps.map((step, index) => (
            <li
              key={step}
              className={`flex items-start gap-4 md:gap-5 rounded-2xl border border-border bg-card p-5 md:p-6 shadow-sm ${revealClass(isVisible)}`}
              style={revealDelay(150 + index * 100)}
            >
              <span
                aria-hidden="true"
                className="flex h-9 w-9 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm md:text-base font-semibold text-primary-foreground"
              >
                {index + 1}
              </span>
              <p className="pt-1 text-base md:text-lg leading-relaxed text-foreground">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
