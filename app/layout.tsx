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
  title: "Xpand AI | Lead Follow-Up and Booking for Advisors and Clinics",
  description:
    "Your marketing brings the leads. We make sure they get followed up, booked and measured. Built for financial advisors and clinics.",
  openGraph: {
    title: "Xpand AI | Lead Follow-Up and Booking for Advisors and Clinics",
    description:
      "Your marketing brings the leads. We make sure they get followed up, booked and measured. Built for financial advisors and clinics.",
    siteName: "Xpand AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xpand AI | Lead Follow-Up and Booking for Advisors and Clinics",
    description:
      "Your marketing brings the leads. We make sure they get followed up, booked and measured. Built for financial advisors and clinics.",
  },
}

export const viewport: Viewport = {
  themeColor: "#f5f2ed",
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
