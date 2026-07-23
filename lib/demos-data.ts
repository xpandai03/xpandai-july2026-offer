export type DemoItem = {
  id: string
  title: string
  description: string
  videoLink: string
  /** Link could not be confirmed by an automated check. Verified manually. */
  verify?: boolean
}

/**
 * Demo library. Ordered by relevance to regulated appointment businesses:
 * intake, scheduling, CRM, and clinic work first, capability demos next,
 * novelty builds last.
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
  {
    id: "scraper",
    title: "Modular Scraper and Outreach System",
    description:
      "A system that collects data from multiple sources and automates personalized outreach campaigns, so first touch happens without manual work.",
    videoLink: "https://drive.google.com/file/d/18pfPCJuSQmKZgB3-Lyu6FQoBRFIwiBrn/view?usp=sharing",
  },
  {
    id: "fb-outreach",
    title: "Facebook Outreach Assistant",
    description:
      "A stealth outreach assistant that automates group messages without getting flagged. A browser agent mimics human navigation to send 5 to 10 personalized messages a day from a CSV, ideal for high trust, low volume outreach. Works with manual review or click to send to stay compliant.",
    videoLink: "https://share.vidyard.com/watch/saAVhJWPuKAyU4fe3AKtER",
  },
  {
    id: "ttx-dashboard",
    title: "TTX App Dashboard",
    description:
      "A custom dashboard for a tabletop exercise app used by SBA government agencies to run training in simulated environments.",
    videoLink: "https://www.loom.com/share/b59af11bd3274106847a5fd4fdb8a18b?sid=7ae87a7d-75d9-4a98-a37d-e4fc633c4703",
  },
  {
    id: "ttx-flow",
    title: "TTX Flow Overview",
    description: "Flow overview for the TTX dashboard app. Worth watching before the dashboard walkthrough.",
    videoLink: "https://www.loom.com/share/e4edbfa6a0124144bdb5e4a8a1c157f4?sid=258478f5-57e1-4efb-9607-66e09dba0848",
  },
  {
    id: "agentic-ios",
    title: "Agentic iOS Development",
    description:
      "How intelligent iOS applications get built, blending on device inference with cloud backed intelligence for apps that stay fast, private, and native.",
    videoLink: "https://www.loom.com/share/caf0014ba23445be955d58b005c6d207",
  },
  {
    id: "builder-updates",
    title: "2026 Builder Updates",
    description:
      "A look at what has been built, shipped, and learned heading deeper into 2026. Raw and straight from the workbench.",
    videoLink: "https://www.loom.com/share/40f230722c414d558a8b972cb4f0223f",
  },
  {
    id: "ecomm",
    title: "E-Commerce Ad Generator",
    description:
      "An automated system that scans social media for trends, generates creative ad assets, uploads them to a database, and notifies the team in Slack.",
    videoLink: "https://drive.google.com/file/d/1a1TqyKEL1DXvKw1mp7A7SPUhNOQuD93s/view?usp=sharing",
  },
  {
    id: "socratic-coach",
    title: "Socratic Coach for Kids",
    description:
      "A 48 hour build of an agent trained in Socratic teaching methods as a personalized mentor for kids aged 8 to 13. Uses guided questioning to help children reach answers independently.",
    videoLink: "https://www.loom.com/share/37a487d819f841ffb5dac328497ec0db?sid=7eef98f6-f556-4d98-af1f-a2d31a66fd0a",
  },
  {
    id: "short-video-gen",
    title: "Short Form Video Generator",
    description:
      "Takes a topic, runs real time research, optimizes for search, writes a script, and turns it into a video in three or four clicks. Built for teams scaling short form content.",
    videoLink: "https://www.canva.com/design/DAGkeTsep64/k5c7vzdldoEvraEYUrn-YA/watch",
    verify: true,
  },
  {
    id: "spanish-lessons",
    title: "Personalized Spanish Grammar Lessons",
    description:
      "An agent that builds dynamic grammar lessons for beginner Spanish learners. Takes preferences like pace or grammar focus and generates vocabulary, examples, exercises, and native style dialogues.",
    videoLink: "https://drive.google.com/file/d/1XUW8Ej1PFz1QspiCM_TwoqVd6nVh_mlJ/view?usp=sharing",
  },
  {
    id: "ai-pod-tshirt",
    title: "Print on Demand T-Shirt Generator",
    description:
      "A tool that generates clothing designs from a few prompts and syncs with the rest of the print on demand fulfillment stack.",
    videoLink: "https://www.loom.com/share/46c73a9105784912854dc655b372b11c?sid=fcb516ff-956d-45e6-8fb1-e19a5c319741",
  },
  {
    id: "coach-scott",
    title: "Coach Scott: Riding Coach Agent",
    description:
      "An agent app that embodies a renowned horse riding coach, giving personalized guidance, training insights, and expert advice to riders at any skill level.",
    videoLink: "https://www.loom.com/share/2d427acf1a4e4df4bc3c3f93d7f84187",
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
