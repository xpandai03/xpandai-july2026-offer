import type React from "react"
import type { Metadata, Viewport } from "next"
import { DM_Sans, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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
  title: "Xpand AI | Operations Platform for Regulated Appointment Businesses",
  description:
    "One branded system that runs your intake, scoring, scheduling, and CRM — so your best prospects book fast and nothing leaks through the cracks.",
  openGraph: {
    title: "Xpand AI | Operations Platform for Regulated Appointment Businesses",
    description:
      "One branded system that runs your intake, scoring, scheduling, and CRM — so your best prospects book fast and nothing leaks through the cracks.",
    siteName: "Xpand AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xpand AI | Operations Platform for Regulated Appointment Businesses",
    description:
      "One branded system that runs your intake, scoring, scheduling, and CRM — so your best prospects book fast and nothing leaks through the cracks.",
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
