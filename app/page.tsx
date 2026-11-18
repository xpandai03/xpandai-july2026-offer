import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { OfferClose } from "@/components/offer-close"
import { OfferHero } from "@/components/offer-hero"
import { OfferHowItWorks } from "@/components/offer-how-it-works"
import { OfferPricing } from "@/components/offer-pricing"
import { OfferProblem } from "@/components/offer-problem"
import { OfferReport } from "@/components/offer-report"
import { OfferSecurity } from "@/components/offer-security"
import { OFFER_CTA_LABEL } from "@/lib/offer-data"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

/** One page, one offer, one button. The previous home page lives at /clinics. */
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header cta={{ label: OFFER_CTA_LABEL, location: "header" }} />
      <OfferHero />
      <OfferProblem />
      <OfferHowItWorks />
      <OfferReport />
      <OfferPricing />
      <OfferSecurity />
      <OfferClose />
      <Footer />
    </main>
  )
}
