import type { Metadata } from "next"

import { Check } from "lucide-react"

import { BookingEmbed } from "@/components/booking-embed"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { BOOKING_PAGE_URL, SOCIAL_IMAGE } from "@/lib/site"

const TITLE = "Book a 30-minute call | Xpand AI"
const DESCRIPTION =
  "Pick a time for a 30-minute call. We'll look at how your leads get followed up today and where they're slipping."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/book" },
  openGraph: { title: TITLE, description: DESCRIPTION, siteName: "Xpand AI", type: "website", images: [SOCIAL_IMAGE] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [SOCIAL_IMAGE] },
}

type Intro = { heading: string; sub: string; points?: string[] }

/** Default intro, used by every track except the home page's pilot offer. */
const DEFAULT_INTRO: Intro = {
  heading: "Pick a time. 30 minutes.",
  sub: "We'll look at how your leads get followed up today and where they're slipping.",
}

/** Intro for visitors who came from the home page pilot button (track=home). */
const PILOT_INTRO: Intro = {
  heading: "Set up your pilot",
  sub: "A 30-minute call. Bring your next webinar date.",
  points: [
    "We confirm your scoring rules and calendars.",
    "Your form is live within a day.",
    "You pay only when you say go.",
  ],
}

type BookPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function BookPage({ searchParams }: BookPageProps) {
  const { track } = await searchParams
  const intro = track === "home" ? PILOT_INTRO : DEFAULT_INTRO

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-12">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-foreground mb-6 text-balance">
              {intro.heading}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{intro.sub}</p>
            {intro.points && (
              <ul className="mt-6 space-y-3">
                {intro.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-foreground leading-relaxed">
                    <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <BookingEmbed />

          <p className="mt-8 text-muted-foreground leading-relaxed">
            Booked? Check your email for the Google Meet link.
          </p>
          {/* Escape hatch for browsers that block the embedded calendar. Same tab, so the visit is not split. */}
          <p className="mt-2 text-sm text-muted-foreground">
            Calendar not loading?{" "}
            <a href={BOOKING_PAGE_URL} className="text-sage underline underline-offset-4 hover:text-foreground">
              Open it on Google
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
