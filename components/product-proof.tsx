"use client"

import { useEffect, useRef, useState } from "react"

import Link from "next/link"

import { InViewVideo } from "@/components/in-view-video"

export function ProductProof() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    // overflow-x-clip: the film starts 2rem to the right before its reveal, which widened the page on phones.
    // clip (not hidden) keeps this from becoming a scroll container.
    <section
      ref={sectionRef}
      id="product-proof"
      className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/50 overflow-x-clip"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div className="lg:pr-8">
            <p
              className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Product Proof
            </p>

            <h2
              className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-foreground mb-8 text-balance transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              From six tools
              <span className="italic"> to</span>
              <br />
              one
            </h2>

            <div
              className={`space-y-6 text-muted-foreground leading-relaxed transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p>
                A DC-area advisory firm ran weekly webinars into a stack of six tools nobody fully understood. Their best
                prospects waited while low-value leads auto-booked onto advisor calendars, and reporting meant
                hand-editing PDFs.
              </p>
              <p>
                <em className="text-foreground">Today:</em> every lead scored on arrival, top prospects booked first,
                reporting in one click.
              </p>
            </div>

            <div
              className={`mt-10 transition-all duration-1000 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Link
                href="/demos"
                className="group inline-flex items-center gap-2 text-sm tracking-widest uppercase text-sage hover:text-foreground transition-colors duration-500"
              >
                See the work
                <svg
                  className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Product proof film: plays in view on desktop, tap to play on phones */}
          <div
            className={`relative aspect-video bg-stone/30 overflow-hidden lg:order-first transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <InViewVideo
              src="/xpand-proof-film-v2.mp4"
              poster="/posters/xpand-proof-film.jpg"
              label="Xpand AI product proof film"
              controlsSide="left"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
