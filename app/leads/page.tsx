import type { Metadata } from "next"

import { TrackPage } from "@/components/track-page"
import { SOCIAL_IMAGE } from "@/lib/site"
import { getTrack } from "@/lib/tracks-data"

const track = getTrack("leads")

export const metadata: Metadata = {
  title: track.metaTitle,
  description: track.metaDescription,
  alternates: { canonical: `/${track.slug}` },
  openGraph: {
    title: track.metaTitle,
    description: track.metaDescription,
    siteName: "Xpand AI",
    type: "website",
    images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: track.metaTitle,
    description: track.metaDescription,
    images: [SOCIAL_IMAGE],
  },
}

export default function LeadsPage() {
  return <TrackPage track={track} />
}
