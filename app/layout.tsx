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
  title: "Stillpoint Studio | Mindful Living Spaces",
  description: "Where Japanese minimalism meets Scandinavian warmth. We design spaces that breathe.",
    generator: 'v0.app'
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
