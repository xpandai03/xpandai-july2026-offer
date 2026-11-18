"use client"

import { useState } from "react"
import Link from "next/link"

import { OfferButton } from "@/components/offer-button"

/** Section links for the clinic page, which holds the previous home page and its anchors. */
const NAV_LINKS = [
  { href: "/clinics#approach", label: "Approach" },
  { href: "/clinics#platform", label: "Platform" },
  { href: "/clinics#process", label: "Process" },
  { href: "/demos", label: "Work" },
  { href: "/clinics#contact", label: "Contact" },
]

type HeaderProps = {
  /** When set, the header shows the logo and this one button, with no nav. Used on the offer page. */
  cta?: { label: string; shortLabel?: string; location: string }
}

export function Header({ cta }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  if (cta) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="flex h-16 md:h-20 items-center justify-between gap-3">
            <Link href="/" className="shrink-0 font-serif text-xl md:text-2xl tracking-wide text-foreground">
              XPAND AI
            </Link>
            <OfferButton label={cta.label} shortLabel={cta.shortLabel} location={cta.location} size="sm" />
          </div>
        </nav>
      </header>
    )
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-serif text-2xl tracking-wide text-foreground">
            XPAND AI
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-foreground transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-px bg-foreground transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-px bg-foreground transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${isMenuOpen ? "max-h-64 pb-8" : "max-h-0"}`}
        >
          <div className="flex flex-col gap-6 pt-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
