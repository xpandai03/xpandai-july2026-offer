"use client"

import { useEffect, useRef, useState } from "react"

/** Below the md breakpoint a tap is required before playback. Matches hooks/use-mobile.ts. */
const MOBILE_QUERY = "(max-width: 767px)"
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)"

type InViewVideoProps = {
  src: string
  poster: string
  label: string
  /** Corner for the mute and pause controls. */
  controlsSide?: "left" | "right"
}

/**
 * Muted, looping film that downloads nothing until it plays. On desktop it plays
 * while a quarter of it is on screen and pauses when it leaves. On phones, and for
 * visitors who prefer reduced motion, it shows the poster until they tap play.
 *
 * Renders absolutely positioned layers, so the parent sets size and aspect ratio.
 */
export function InViewVideo({ src, poster, label, controlsSide = "right" }: InViewVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  // Whether the observer may start playback. Desktop opts in on mount; phones opt in on tap.
  const playbackAllowed = useRef(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Some browsers ignore the JSX `muted` attribute; muted playback needs the property.
    video.muted = true
    playbackAllowed.current =
      !window.matchMedia(MOBILE_QUERY).matches && !window.matchMedia(REDUCED_MOTION_QUERY).matches

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          video.pause()
        } else if (playbackAllowed.current) {
          video.play().catch(() => {})
        }
      },
      { threshold: 0.25 },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  const play = () => {
    playbackAllowed.current = true
    videoRef.current?.play().catch(() => {})
  }

  const pause = () => {
    // A manual pause sticks: the observer will not restart the film on the next scroll past.
    playbackAllowed.current = false
    videoRef.current?.pause()
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    const next = !isMuted
    video.muted = next
    // Unmuting is a user gesture, so treat it as consent to play.
    if (!next) play()
    setIsMuted(next)
  }

  const side = controlsSide === "left" ? "left-4" : "right-4"
  const controlClass =
    "flex items-center justify-center w-10 h-10 rounded-full bg-background/80 text-foreground backdrop-blur-sm hover:bg-background transition-colors duration-300"

  return (
    <>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
        poster={poster}
        loop
        muted
        playsInline
        preload="none"
        aria-label={label}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {!isPlaying && (
        <button
          type="button"
          onClick={play}
          aria-label={`Play ${label}`}
          className="absolute inset-0 z-10 flex items-center justify-center group"
        >
          <span className="flex items-center justify-center w-16 h-16 rounded-full bg-sage text-primary-foreground shadow-lg transition-transform duration-500 group-hover:scale-105">
            <svg className="w-6 h-6 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5.14v13.72a1 1 0 001.5.86l11-6.86a1 1 0 000-1.72l-11-6.86A1 1 0 008 5.14z" />
            </svg>
          </span>
        </button>
      )}

      <div className={`absolute bottom-4 ${side} z-20 flex gap-2`}>
        {isPlaying && (
          <button type="button" onClick={pause} aria-label={`Pause ${label}`} className={controlClass}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
            </svg>
          </button>
        )}
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className={controlClass}
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
    </>
  )
}
