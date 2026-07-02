"use client"

import { useEffect, useRef, useState } from "react"

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
    <section ref={sectionRef} id="product-proof" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/50">
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
          </div>

          {/* Image — product screenshot placeholder */}
          <div
            className={`relative aspect-[16/10] bg-stone/30 overflow-hidden lg:order-first transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* dashboard screenshot — drop the real image export here (16:10) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground/60">Dashboard screenshot</span>
            </div>
            {/* Overlay accent */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-terracotta/80" />
          </div>
        </div>
      </div>
    </section>
  )
}
