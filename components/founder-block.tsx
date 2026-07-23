"use client"

import { useEffect, useState } from "react"

export function FounderBlock() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-40 pb-24 lg:pt-48 lg:pb-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Portrait */}
          <div
            className={`lg:col-span-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative aspect-square max-w-xs overflow-hidden bg-sand">
              <img
                src="/raunek-profile.jpg"
                alt="Raunek Pratap, founder of Xpand Technology"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Intro. DRAFT copy, pending review. */}
          <div className="lg:col-span-8">
            <p
              className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Who builds it
            </p>

            <h1
              className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-foreground mb-8 text-balance transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Raunek Pratap
            </h1>

            <div
              className={`space-y-6 text-muted-foreground leading-relaxed max-w-2xl transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p>
                Five years building software systems, including 32 apps shipped in an eight month span in 2025. One
                accountable partner, not a rotating cast of programmers.
              </p>
              <p>
                That work now points at one thing: the intake, scoring, and scheduling systems that regulated
                appointment businesses run every day. Below is a library of what it looks like in practice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
