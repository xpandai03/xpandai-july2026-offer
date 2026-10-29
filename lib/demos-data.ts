export type DemoItem = {
  id: string
  title: string
  description: string
  videoLink: string
  /** Link could not be confirmed by an automated check. Verified manually. */
  verify?: boolean
}

/**
 * Demo library. Only work related to intake, CRM, scheduling, follow-up,
 * clinics or advisors. Capability demos and novelty builds were removed in
 * the trust pass; the full list is in the PR description.
 *
 * Source of truth: PersonalPortfolio investigation report inventory.
 * Excluded on purpose: two Google Drive records returning 404, and the
 * Sienna record returning 401 (private).
 */
export const demos: DemoItem[] = [
  {
    id: "startup-intake",
    title: "Intelligent Intake for Startup Accelerators",
    description:
      "A QR powered intake form that simplifies onboarding and enriches leads automatically. A founder scans, enters their email and LinkedIn, and the system pulls public data to autofill name, title, company, and a short summary for personalized follow up. Cuts manual data entry and speeds up discovery.",
    videoLink: "https://drive.google.com/file/d/1gJN7JXMY8xGDRi8gIPUXL8FUV3fBk_AI/view?usp=sharing",
  },
  {
    id: "therapists",
    title: "Therapists Online Directory",
    description:
      "A comprehensive online directory system for therapists that improves client discovery and streamlines the appointment booking process.",
    videoLink: "https://drive.google.com/file/d/1mEZDGgBfwFEAGB9va95_2awUrelvf4gP/view?usp=sharing",
  },
  {
    id: "airtable-crm",
    title: "Airtable CRM Automation",
    description:
      "A streamlined CRM built on Airtable that automates customer relationship workflows and surfaces insights for faster business decisions.",
    videoLink: "https://drive.google.com/file/d/1ARCL7_BPEE3QqWrZ7yVVFadMfVaMz1vQ/view?usp=sharing",
  },
  {
    id: "vibechat",
    title: "VibeChat: Booking Agent for Venue Owners",
    description:
      "An agent that helps venue owners book talent and create events, integrating with an existing app to streamline the booking process and reduce back and forth.",
    videoLink: "https://www.loom.com/share/1dc1cc29b1814f7bbfe7f22b846acd0d",
  },
]

export type DemoTestimonial = {
  id: string
  quote: string
  author: string
  role: string
}

/** Selected from the portfolio's seven. Full list is in the PR for swapping. */
export const demoTestimonials: DemoTestimonial[] = [
  {
    id: "parker",
    quote:
      "Raunek provided valuable support on a project involving automation and web scraping, which we used to help train a custom model. He demonstrated a thorough understanding of the process from start to finish and offered insightful recommendations that improved our overall workflow. His technical knowledge, problem solving skills, and clear communication made him easy to work with and highly effective.",
    author: "Parker Ruiz",
    role: "CEO, SignatureMedia",
  },
  {
    id: "shannon",
    quote:
      "Very pleased with Raunek and his work product. Excellent communications and very responsive. Picks up on concepts quickly with quick turnaround time. A joy to work with.",
    author: "Shannon",
    role: "COO, Staffing Firm",
  },
  {
    id: "robbie",
    quote: "Very easy to work with and quick to complete required projects.",
    author: "Robbie Robinson",
    role: "Serial MedSpa Entrepreneur",
  },
]
