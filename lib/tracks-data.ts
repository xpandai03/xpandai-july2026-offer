export type TrackStep = {
  title: string
  description: string
}

export type TrackTier = {
  name: string
  description: string
}

export type TrackFaq = {
  question: string
  answer: string
}

export type TrackItem = {
  /** URL segment and attribution slug, for example "leads" for /leads. */
  slug: string
  eyebrow: string
  headline: {
    /** Rendered in the foreground color. */
    lead: string
    /** Rendered on its own line in the accent color, as on the homepage hero. */
    accent: string
  }
  subhead: string
  doLines: [string, string, string]
  proof: {
    text: string
    attribution: string
  }
  howItWorks: [TrackStep, TrackStep, TrackStep]
  tiers: TrackTier[]
  tiersNote: string
  faq: TrackFaq[]
  metaTitle: string
  metaDescription: string
  ctaLabel: string
}

/**
 * Track landing pages, one per video series. Adding a track is data only:
 * add an item here and a thin app/<slug>/page.tsx that renders it.
 */
export const tracks: TrackItem[] = [
  {
    slug: "leads",
    eyebrow: "For financial advisors and clinics",
    headline: {
      lead: "Your marketing brings the leads.",
      accent: "We make sure they get followed up, booked and measured.",
    },
    subhead: "One system for intake, follow-up, scheduling and reporting, built on the tools you already use.",
    doLines: [
      "Every inquiry and registrant gets a reply in minutes, not days.",
      "Interested leads book straight onto your calendar.",
      "You see which campaign brought each booked appointment.",
    ],
    proof: {
      text: "A family services clinic: AI agents now handle about 80% of its manual intake and booking work.",
      attribution: "Xpand client, anonymized.",
    },
    howItWorks: [
      { title: "Connect", description: "We plug into your forms, CRM and calendar. No rip-and-replace." },
      {
        title: "Follow up",
        description: "Every lead gets a fast reply and consistent follow-up until they book or say no.",
      },
      { title: "Measure", description: "One dashboard shows leads, bookings and where each one came from." },
    ],
    tiers: [
      { name: "Core", description: "Branded intake forms, a staff console, and routing into your CRM or EHR." },
      {
        name: "Operations",
        description: "Everything in Core, plus follow-up automations and a weekly exception report.",
      },
      {
        name: "Growth",
        description:
          "Everything in Operations, plus scheduling, registrant follow-up and a source-to-booking dashboard.",
      },
    ],
    tiersNote: "Pricing depends on your systems and integrations. We'll scope it on a call.",
    faq: [
      {
        question: "Is this secure and compliant?",
        answer:
          "We build for regulated businesses, including HIPAA-covered clinics and SEC-registered advisors, with access controls and vendor agreements where required.",
      },
      {
        question: "Which systems does it work with?",
        answer:
          "Common CRMs, EHRs and calendars. If yours has an API, or even if it doesn't, we can usually connect it.",
      },
      { question: "How long does setup take?", answer: "Most systems go live in 3 to 4 weeks." },
      { question: "Do I have to replace my current tools?", answer: "No. We build on top of what you already use." },
    ],
    metaTitle: "Lead Follow-Up and Booking for Advisors and Clinics | Xpand AI",
    metaDescription:
      "Your marketing brings the leads. We make sure they get followed up, booked and measured. Built for financial advisors and clinics.",
    ctaLabel: "Book a 30-minute call",
  },
]

/** Look up a track by slug. Throws at build time if a page names a track that does not exist. */
export function getTrack(slug: string): TrackItem {
  const item = tracks.find((t) => t.slug === slug)
  if (!item) throw new Error(`Unknown track: ${slug}`)
  return item
}
