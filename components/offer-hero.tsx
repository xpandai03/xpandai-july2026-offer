import { EmphasisHeading } from "@/components/emphasis-heading"
import { OfferButton } from "@/components/offer-button"
import { VideoEmbed } from "@/components/video-embed"
import { HERO_VIDEO_EMBED_HTML, OFFER_CTA_LABEL, offerHero } from "@/lib/offer-data"

/** Label, headline, sub, the one button and the hero video. Side by side from lg so it all fits one screen. */
export function OfferHero() {
  return (
    <section className="relative isolate px-4 sm:px-6 lg:px-12 pt-24 pb-16 md:pt-36 lg:pt-32 lg:pb-24 lg:min-h-[100svh] lg:flex lg:items-center">
      {/* Soft top glow, as in the video: accent blue from above, lavender from the right. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[720px] -z-10"
        style={{
          backgroundImage: [
            "radial-gradient(120% 80% at 50% -10%, color-mix(in oklch, var(--primary) 22%, transparent) 0%, color-mix(in oklch, var(--primary) 8%, transparent) 40%, transparent 72%)",
            "radial-gradient(800px 480px at 88% 8%, color-mix(in oklch, var(--glow) 90%, transparent) 0%, transparent 65%)",
          ].join(","),
        }}
      />

      <div className="mx-auto w-full max-w-7xl grid gap-8 md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14 lg:items-center">
        <div className="text-center lg:text-left">
          <p className="mb-4 md:mb-6 inline-block rounded-full border border-border bg-card/70 px-4 py-1.5 text-sm text-primary backdrop-blur-sm">
            {offerHero.label}
          </p>

          <EmphasisHeading
            as="h1"
            text={offerHero.headline}
            className="text-4xl sm:text-5xl xl:text-6xl leading-[1.08] text-foreground [&_em]:block [&_em]:mt-1"
          />

          <p className="mt-4 md:mt-6 text-lg md:text-xl leading-relaxed text-muted-foreground text-pretty max-w-xl mx-auto lg:mx-0">
            {offerHero.sub}
          </p>

          <div className="mt-6 md:mt-8 flex flex-col items-center lg:items-start gap-3">
            <OfferButton label={OFFER_CTA_LABEL} location="hero" />
            <p className="text-sm text-muted-foreground text-balance max-w-xs sm:max-w-none">{offerHero.note}</p>
          </div>
        </div>

        <VideoEmbed
          html={HERO_VIDEO_EMBED_HTML}
          label="Xpand AI webinar follow-up video"
          className="border-border bg-card shadow-primary/10"
        />
      </div>
    </section>
  )
}
