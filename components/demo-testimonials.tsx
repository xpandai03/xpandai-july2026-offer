"use client"

import { useEffect, useRef, useState } from "react"

import { demoTestimonials } from "@/lib/demos-data"

export function DemoTestimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <p
          className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          What clients say
        </p>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {demoTestimonials.map((testimonial, index) => (
            <figure
              key={testimonial.id}
              className={`flex flex-col h-full transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <blockquote className="font-serif text-xl md:text-2xl font-light leading-relaxed text-foreground flex-grow">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border">
                <p className="text-sm tracking-widest uppercase text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground mt-1">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
