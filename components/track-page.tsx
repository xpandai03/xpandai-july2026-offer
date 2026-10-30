import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { TrackFaq } from "@/components/track-faq"
import { TrackFounder } from "@/components/track-founder"
import { TrackHero } from "@/components/track-hero"
import { TrackHowItWorks } from "@/components/track-how-it-works"
import { TrackProof } from "@/components/track-proof"
import { TrackTiers } from "@/components/track-tiers"
import { TrackWhatWeDo } from "@/components/track-what-we-do"
import type { TrackItem } from "@/lib/tracks-data"

/** A complete track landing page, rendered from one TrackItem. */
export function TrackPage({ track }: { track: TrackItem }) {
  return (
    <main className="min-h-screen">
      <Header />
      <TrackHero track={track} />
      <TrackWhatWeDo track={track} />
      <TrackProof track={track} />
      <TrackHowItWorks track={track} />
      <TrackTiers track={track} />
      <TrackFaq track={track} />
      <TrackFounder track={track} />
      <Footer />
    </main>
  )
}
