import type { Metadata } from "next"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Philosophy } from "@/components/philosophy"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { ProductProof } from "@/components/product-proof"
import { Testimonial } from "@/components/testimonial"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { SOCIAL_IMAGE } from "@/lib/site"

const TITLE = "Xpand AI | Lead Follow-Up and Booking for Advisors and Clinics"
const DESCRIPTION =
  "Your marketing brings the leads. We make sure they get followed up, booked and measured. Built for financial advisors and clinics."

/** The previous home page, kept whole. Its section anchors (#approach, #platform, #process, #contact) live here now. */
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/clinics" },
  openGraph: { title: TITLE, description: DESCRIPTION, siteName: "Xpand AI", type: "website", images: [SOCIAL_IMAGE] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [SOCIAL_IMAGE] },
}

export default function ClinicsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Philosophy />
      <Services />
      <Process />
      <ProductProof />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  )
}
