"use client"

import { ShieldCheck } from "lucide-react"

import { EmphasisHeading } from "@/components/emphasis-heading"
import { revealClass, revealDelay, useReveal } from "@/components/reveal"
import { VideoEmbed } from "@/components/video-embed"
import { SECURITY_VIDEO_EMBED_HTML, offerSecurity } from "@/lib/offer-data"

/** Security and compliance on the navy band, then the security video. Claims come only from offer-data. */
export function OfferSecurity() {
  const { ref, isVisible } = useReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-indigo text-primary-foreground">
      <div className="max-w-5xl mx-auto">
        <EmphasisHeading
          text={offerSecurity.headline}
          accentClassName="text-glow"
          className={`text-3xl md:text-5xl text-center mb-12 ${revealClass(isVisible, "up-sm")}`}
        />

        <ul className="grid gap-4 md:grid-cols-2">
          {offerSecurity.points.map((point, index) => (
            <li
              key={point}
              className={`flex items-start gap-3 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 ${revealClass(isVisible)}`}
              style={revealDelay(150 + index * 70)}
            >
              <ShieldCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-glow" />
              <span className="text-base leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>

        <div className={`mt-12 ${revealClass(isVisible)}`} style={revealDelay(700)}>
          <VideoEmbed
            html={SECURITY_VIDEO_EMBED_HTML}
            label="Where does your client data live with AI? Financial advisor edition"
            className="mx-auto max-w-4xl border-primary-foreground/15 bg-black/20 shadow-2xl shadow-black/30"
          />
        </div>
      </div>
    </section>
  )
}
