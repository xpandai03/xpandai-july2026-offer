import type React from "react"
import type { Metadata, Viewport } from "next"
import { DM_Sans, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

import { UtmCapture } from "@/components/utm-capture"
import { SITE_URL } from "@/lib/site"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Xpand AI | Webinar follow-up and booking for financial advisors",
  description:
    "Your best webinar leads booked first, and everyone else hears back. See it on your next event.",
  openGraph: {
    title: "Xpand AI | Webinar follow-up and booking for financial advisors",
    description:
      "Your best webinar leads booked first, and everyone else hears back. See it on your next event.",
    siteName: "Xpand AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xpand AI | Webinar follow-up and booking for financial advisors",
    description:
      "Your best webinar leads booked first, and everyone else hears back. See it on your next event.",
  },
}

export const viewport: Viewport = {
  themeColor: "#eef4fa",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${cormorant.variable} font-sans antialiased`}>
        <UtmCapture />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
