import type React from "react"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

type LegalPageProps = {
  title: string
  /** Human readable date, for example "October 29, 2026". */
  updated: string
  children: React.ReactNode
}

/** Shared shell for the privacy and terms pages. Plain prose, no reveal animation. */
export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <main className="min-h-screen">
      <Header />
      <article className="pt-40 pb-24 lg:pt-48 lg:pb-32 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Last updated {updated}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light leading-[1.1] text-foreground mb-12 text-balance">
            {title}
          </h1>
          <div className="space-y-12 text-muted-foreground leading-relaxed [&_a]:text-sage [&_a]:underline [&_a]:underline-offset-4 [&_li]:pl-1 [&_p+p]:mt-4 [&_strong]:text-foreground [&_strong]:font-medium [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mt-4 [&_ul]:space-y-2">
            {children}
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}

/** One numbered section of a legal page. */
export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{title}</h2>
      {children}
    </section>
  )
}
