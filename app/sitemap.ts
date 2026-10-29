import type { MetadataRoute } from "next"

import { SITE_URL } from "@/lib/site"

const ROUTES = ["/", "/demos", "/privacy", "/terms"]

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route === "/" ? "" : route}`,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.5,
  }))
}
