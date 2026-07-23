"use client"

import { useEffect, useRef, useState } from "react"

export function Philosophy() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

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

  // Ensure the muted property is set on the DOM node so autoplay is allowed,
  // then kick off playback (some browsers ignore the JSX `muted` attribute).
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    const play = video.play()
    if (play) play.catch(() => {})
  }, [])

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    const next = !isMuted
    video.muted = next
    if (!next) {
      // Unmuting is a user gesture — make sure playback continues.
      const play = video.play()
      if (play) play.catch(() => {})
    }
    setIsMuted(next)
  }

  return (
    <section ref={sectionRef} id="approach" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Approach film — autoplays muted on loop; visitor can unmute */}
          <div
            className={`relative aspect-[4/5] bg-sand overflow-hidden transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              src="/xpand-approach-v2b.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="Xpand AI approach film"
            />

            {/* Mute / unmute toggle */}
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
              className="absolute bottom-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-background/80 text-foreground backdrop-blur-sm hover:bg-background transition-colors duration-300"
            >
              {isMuted ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                  />
                </svg>
              )}
            </button>

          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p
              className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Our Approach
            </p>

            <h2
              className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-foreground mb-8 text-balance transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              We build on top of
              <span className="italic"> what</span>
              <br />
              works
            </h2>

            <div
              className={`space-y-6 text-muted-foreground leading-relaxed transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p>
                No rip-and-replace. We connect and complete the stack you already run — the forms, the calendars, the
                CRM — instead of asking your firm to start over.
              </p>
              <p>
                One accountable partner instead of a rotating cast of programmers. We put the right{" "}
                <em className="text-foreground">AI</em> to work where it earns its keep, and stand behind every part of
                the system we build for you.
              </p>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border transition-all duration-1000 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div>
                <p className="font-serif text-3xl md:text-4xl text-sage">3–4</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">Weeks to live</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-sage">20+</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">Automations, one client</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-sage">2</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">Years, longest partnership</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
