import Link from "next/link"

import { LINKEDIN_URL } from "@/lib/site"

const FOOTER_LINKS = [
  { href: "/demos", label: "Work" },
  { href: "/clinics", label: "Clinics" },
  { href: "/security", label: "Security" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
]

export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-5">
            <p className="font-serif text-2xl tracking-wide text-foreground mb-4">Xpand AI</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Webinar follow-up and booking for financial advisory firms.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer" className="md:col-span-6 md:col-start-7 flex flex-wrap gap-x-8 gap-y-3 md:justify-end">
            {FOOTER_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-foreground hover:text-sage transition-colors">
                {link.label}
              </Link>
            ))}
            {LINKEDIN_URL && (
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground hover:text-sage transition-colors"
              >
                LinkedIn
              </a>
            )}
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Xpand Technology LLC · Los Angeles, CA
          </p>
          <p className="text-xs text-muted-foreground">All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
