import type { Metadata } from "next"

import { BOOKING_LABEL, BookCallLink } from "@/components/book-call-link"
import { DemoGrid } from "@/components/demo-grid"
import { DemoTestimonials } from "@/components/demo-testimonials"
import { FounderBlock } from "@/components/founder-block"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Demos | Xpand AI",
  description:
    "Walkthroughs of intake, scheduling, and CRM systems built and shipped for real clients, plus the person who builds them.",
  openGraph: {
    title: "Demos | Xpand AI",
    description:
      "Walkthroughs of intake, scheduling, and CRM systems built and shipped for real clients, plus the person who builds them.",
    siteName: "Xpand AI",
    type: "website",
  },
  // Declared so this page does not inherit the root layout's Twitter description.
  twitter: {
    card: "summary_large_image",
    title: "Demos | Xpand AI",
    description:
      "Walkthroughs of intake, scheduling, and CRM systems built and shipped for real clients, plus the person who builds them.",
  },
}

export default function DemosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <FounderBlock />
      <DemoGrid />
      <DemoTestimonials />

      {/* Booking CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-sage">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-primary-foreground mb-6 text-balance">
            See your funnel clearly.
          </h2>
          <p className="text-primary-foreground/80 leading-relaxed mb-12 max-w-xl mx-auto">
            30 minutes. We&apos;ll walk your current stack and show you exactly what one platform would replace.
          </p>
          <BookCallLink
            location="demos"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-background text-foreground text-sm tracking-widest uppercase hover:bg-background/90 transition-all duration-500"
          >
            {BOOKING_LABEL}
            <svg
              className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </BookCallLink>
        </div>
      </section>

      <Footer />
    </main>
  )
}
