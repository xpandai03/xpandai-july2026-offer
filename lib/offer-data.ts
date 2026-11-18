/**
 * Copy for the home page: one offer for financial advisory firms that run webinars.
 *
 * Headlines mark their italic serif words with *asterisks*; EmphasisHeading renders them.
 * The repo is public: the sample report below is made up. Never put real names or numbers here.
 */

/** The one button label on the home page (header, hero and close). */
export const OFFER_CTA_LABEL = "Start a pilot on your next webinar"

/** The header button label below tablet width, where the full label does not fit beside the logo. */
export const OFFER_CTA_SHORT_LABEL = "Start a pilot"

/** Hero video, as Tella provides the embed, with the title overlay off (title=0). Rendered as HTML, unchanged. */
export const HERO_VIDEO_EMBED_HTML =
  '<div style="position: relative; padding-bottom: 56.2500%; height: 0;"><iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" src="https://www.tella.tv/video/vid_cmwleeedf01mb07js4chbg9b3/embed?b=1&title=0&a=1&loop=0&t=0&muted=0&wt=0&o=1" allow="autoplay; fullscreen" allowtransparency></iframe></div>'

/**
 * Security video ("Where does your client data live with AI?"), same embed format as the hero.
 * Autoplay is off (a=0) because it sits low on the page.
 */
export const SECURITY_VIDEO_EMBED_HTML =
  '<div style="position: relative; padding-bottom: 56.2500%; height: 0;"><iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" src="https://www.tella.tv/video/vid_cmwlesizf00b708jh9vebbsml/embed?b=1&title=1&a=0&loop=0&t=0&muted=0&wt=0&o=1" allow="autoplay; fullscreen" allowtransparency></iframe></div>'

export const offerHero = {
  label: "For financial advisory firms that run webinars",
  headline: "You fill the room. *We get your best prospects booked first.*",
  sub: "Every attendee gets ranked, your top leads book with the right advisor, and everyone else hears back. Set up in a day on the tools you already use.",
  note: "Starts with a 30-minute setup call. No long contract.",
}

export const offerProblem = {
  headline: "What happens *after* the webinar",
  items: [
    "Your best prospects don't book on the spot, and nobody has a clean list of them.",
    "Weaker leads book themselves and fill your advisors' calendars.",
    "People ask for a consultation and never hear back.",
    "The numbers live in five places, so you do the math by hand.",
  ],
}

export const offerHowItWorks = {
  headline: "How it *works*",
  steps: [
    "A short branded form goes out during and after your webinar. It takes about two minutes.",
    "Each attendee is ranked by your rules: assets, age, timing.",
    "Top-ranked leads book inside the form with the right advisor. You control which ranks can book themselves.",
    "Everyone hears back, using wording your compliance team approves once.",
    "The next morning you get one report.",
  ],
}

export const offerReport = {
  headline: "The email you get *the morning after*",
  webinar: "Retirement Income Workshop",
  alert: "Top leads not yet booked: 3 (follow-up sent)",
  stats: [
    { label: "Attended", value: "64" },
    { label: "Forms completed", value: "23" },
    { label: "Top-ranked leads", value: "9" },
    { label: "Booked", value: "6" },
  ],
  /** Made-up people. Example data only. */
  leads: [
    { name: "Jordan P.", rank: "A" },
    { name: "Casey R.", rank: "A" },
    { name: "Morgan T.", rank: "A" },
  ],
  status: "Not booked",
  followUp: "Follow-up sent",
  caption: "Sample report, example data.",
}

export const offerSecurity = {
  headline: "Built for a *regulated* firm",
  points: [
    "Running today at an SEC-registered advisory firm that hosts webinars every week.",
    "Your firm gets its own separate setup.",
    "Your team signs in with their existing Microsoft accounts.",
    "Every action is logged.",
    "Nothing reaches a prospect except templates your compliance team approved.",
    "US-based, with a signed vendor attestation that includes 72-hour breach notice.",
    "Runs next to what you have today. Your scheduler stays in control.",
  ],
}

export const offerClose = {
  headline: "Try it on *one webinar*",
  sub: "Pick a time and we'll set up your pilot.",
}
