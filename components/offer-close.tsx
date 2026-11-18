"use client"

import { EmphasisHeading } from "@/components/emphasis-heading"
import { OfferButton } from "@/components/offer-button"
import { revealClass, revealDelay, useReveal } from "@/components/reveal"
import { OFFER_CTA_LABEL, offerClose } from "@/lib/offer-data"

/** Closing ask over a soft bottom glow that mirrors the hero. */
export function OfferClose() {
  const { ref, isVisible } = useReveal<HTMLElement>(0.2)

  return (
    <section ref={ref} className="relative isolate overflow-hidden py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(120% 90% at 50% 115%, color-mix(in oklch, var(--primary) 20%, transparent) 0%, color-mix(in oklch, var(--glow) 60%, transparent) 45%, transparent 80%)",
        }}
      />

      <div className="max-w-3xl mx-auto text-center">
        <EmphasisHeading
          text={offerClose.headline}
          className={`text-3xl md:text-5xl text-foreground ${revealClass(isVisible, "up-sm")}`}
        />
        <p
          className={`mt-5 text-lg md:text-xl text-muted-foreground ${revealClass(isVisible)}`}
          style={revealDelay(150)}
        >
          {offerClose.sub}
        </p>
        <div className={`mt-8 ${revealClass(isVisible)}`} style={revealDelay(300)}>
          <OfferButton label={OFFER_CTA_LABEL} location="close" />
        </div>
      </div>
    </section>
  )
}
