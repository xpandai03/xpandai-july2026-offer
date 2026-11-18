"use client"

import { Mail } from "lucide-react"

import { EmphasisHeading } from "@/components/emphasis-heading"
import { revealClass, revealDelay, useReveal } from "@/components/reveal"
import { offerReport } from "@/lib/offer-data"

/** A mock of the morning-after email. Every name and number comes from lib/offer-data.ts and is made up. */
export function OfferReport() {
  const { ref, isVisible } = useReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-sand">
      <div className="max-w-2xl mx-auto">
        <EmphasisHeading
          text={offerReport.headline}
          className={`text-3xl md:text-5xl text-center text-foreground mb-12 ${revealClass(isVisible, "up-sm")}`}
        />

        <figure className={revealClass(isVisible)} style={revealDelay(150)}>
          <div className="rounded-2xl border border-border bg-card p-5 md:p-8 shadow-xl shadow-primary/10">
            {/* Webinar */}
            <div className="flex items-center gap-3 border-b border-border pb-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail aria-hidden="true" className="h-5 w-5" />
              </span>
              <p className="text-base md:text-lg text-foreground">
                <span className="text-muted-foreground">Webinar: </span>
                <span className="font-semibold">{offerReport.webinar}</span>
              </p>
            </div>

            {/* Headline number */}
            <p className="mt-5 rounded-xl bg-primary/10 px-4 py-3 text-sm md:text-base font-medium text-primary">
              {offerReport.alert}
            </p>

            {/* Funnel */}
            <dl className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
              {offerReport.stats.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-secondary px-4 py-3">
                  <dt className="text-xs text-muted-foreground">{stat.label}</dt>
                  <dd className="mt-1 text-2xl font-bold text-foreground">{stat.value}</dd>
                </div>
              ))}
            </dl>

            {/* Top leads not yet booked */}
            <table className="mt-6 w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-border text-muted-foreground">
                  <th scope="col" className="py-2 pr-2 font-medium">
                    Lead
                  </th>
                  <th scope="col" className="py-2 pr-2 font-medium">
                    Rank
                  </th>
                  <th scope="col" className="py-2 pr-2 font-medium">
                    Status
                  </th>
                  <th scope="col" className="py-2 font-medium">
                    Follow-up
                  </th>
                </tr>
              </thead>
              <tbody>
                {offerReport.leads.map((lead) => (
                  <tr key={lead.name} className="border-b border-border last:border-b-0">
                    <td className="py-3 pr-2 font-medium text-foreground">{lead.name}</td>
                    <td className="py-3 pr-2 text-foreground">{lead.rank}</td>
                    <td className="py-3 pr-2 text-muted-foreground">{offerReport.status}</td>
                    <td className="py-3 text-primary">{offerReport.followUp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <figcaption className="mt-4 text-center text-sm text-muted-foreground">{offerReport.caption}</figcaption>
        </figure>
      </div>
    </section>
  )
}
