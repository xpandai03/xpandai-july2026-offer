import type { Metadata } from "next"

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

export default function BookPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-12">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-foreground mb-6 text-balance">
              Pick a time. 30 minutes.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              We&apos;ll look at how your leads get followed up today and where they&apos;re slipping.
            </p>
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
