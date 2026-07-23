"use client"

import { useEffect, useRef, useState } from "react"

import { ExternalLink, Play } from "lucide-react"

import { demos } from "@/lib/demos-data"

export function DemoGrid() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.05 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="library" className="py-24 lg:py-32 px-6 lg:px-12 bg-sand/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p
            className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            The Library
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl font-light text-foreground mb-6 text-balance transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {demos.length} systems, built and shipped
          </h2>
          <p
            className={`text-muted-foreground leading-relaxed max-w-2xl transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Walkthroughs of real products. Intake, scheduling, and CRM work first, then the rest of the range. Each one
            opens in a new tab.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {demos.map((demo, index) => (
            <a
              key={demo.id}
              href={demo.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col h-full bg-card p-8 lg:p-10 hover:bg-background transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + Math.min(index, 8) * 80}ms` }}
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full border border-border text-sage mb-6 transition-colors duration-500 group-hover:border-sage">
                <Play className="w-4 h-4" />
              </span>

              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3 line-clamp-2">{demo.title}</h3>

              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-grow">
                {demo.description}
              </p>

              <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-sage mt-6">
                Watch walkthrough
                <ExternalLink className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
