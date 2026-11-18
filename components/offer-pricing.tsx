"use client"

import { Check } from "lucide-react"

import { EmphasisHeading } from "@/components/emphasis-heading"
import { revealClass, revealDelay, useReveal } from "@/components/reveal"
import { offerPricing } from "@/lib/offer-data"

/**
 * The two prices. Card markup follows the Reel Machine pricing cards, on our tokens,
 * with a 16px radius and no buttons: the page keeps one button.
 */
export function OfferPricing() {
  const { ref, isVisible } = useReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <EmphasisHeading
          text={offerPricing.headline}
          className={`text-3xl md:text-5xl text-center text-foreground mb-12 ${revealClass(isVisible, "up-sm")}`}
        />

        <div className="grid items-stretch gap-5 md:grid-cols-2">
          {offerPricing.prices.map((plan, index) => (
            <div
              key={plan.name}
              className={`flex h-full flex-col rounded-2xl p-7 md:p-8 ${
                plan.featured
                  ? "border-2 border-primary bg-card shadow-xl shadow-primary/15"
                  : "border border-border bg-secondary shadow-sm"
              } ${revealClass(isVisible)}`}
              style={revealDelay(150 + index * 100)}
            >
              <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">{plan.price}</span>
                <span className="text-base text-muted-foreground">{plan.cadence}</span>
              </p>

              <ul className="mt-6 space-y-3 text-base text-foreground">
                {plan.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {plan.promise && (
                <p className="mt-6 rounded-xl bg-primary/10 p-4 text-sm md:text-base leading-relaxed text-foreground">
                  <strong className="font-semibold text-primary">Promise:</strong> {plan.promise}
                </p>
              )}
            </div>
          ))}
        </div>

        <p
          className={`mt-8 text-center text-sm md:text-base text-muted-foreground ${revealClass(isVisible)}`}
          style={revealDelay(400)}
        >
          {offerPricing.note}
        </p>
      </div>
    </section>
  )
}
