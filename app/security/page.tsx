import type { Metadata } from "next"

import { LegalPage, LegalSection } from "@/components/legal-page"
import { OFFER_CTA_LABEL, OFFER_CTA_SHORT_LABEL } from "@/lib/offer-data"
import { COMPANY_ADDRESS, COMPANY_LEGAL_NAME, CONTACT_EMAIL, CONTACT_PHONE, SOCIAL_IMAGE } from "@/lib/site"

const TITLE = "Security and Compliance for Advisory Firms | Xpand AI"
const DESCRIPTION =
  "How Xpand keeps advisory firm and prospect data separate, encrypted and under the firm's control, with Regulation S-P vendor attestation and 72-hour incident notice."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/security" },
  openGraph: { title: TITLE, description: DESCRIPTION, siteName: "Xpand AI", type: "website", images: [SOCIAL_IMAGE] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [SOCIAL_IMAGE] },
}

type Service = { name: string; purpose: string; data: string }

/**
 * Services that process data in the system. Every entry is checked against the
 * intake code and hosting config; keep it in step with the privacy policy.
 */
const CORE_SERVICES: Service[] = [
  {
    name: "Vercel",
    purpose: "Hosts and runs the system.",
    data: "All data the system handles, while it is being processed.",
  },
  {
    name: "Neon",
    purpose: "Database.",
    data: "All stored lead data.",
  },
  {
    name: "Google Fonts",
    purpose: "Delivers the typeface used on the intake form.",
    data: "The visitor's IP address and browser details. No form answers.",
  },
]

const OPTIONAL_SERVICES: Service[] = [
  {
    name: "Resend",
    purpose: "Sends alert emails to your own staff.",
    data: "Alert text, which can include a prospect's name and email address.",
  },
  {
    name: "Salesforce",
    purpose: "Adds new leads and booked meetings to your CRM.",
    data: "Prospect contact details, form answers and meeting times.",
  },
  {
    name: "Microsoft 365 (Outlook calendar)",
    purpose: "Finds open times on advisor calendars and adds booked meetings.",
    data: "Advisor calendar events. Booked meetings carry a reference code, not prospect details.",
  },
  {
    name: "TimeTap",
    purpose: "Scheduling, if your firm uses it.",
    data: "Prospect name, email, phone and appointment time.",
  },
  {
    name: "Zoom",
    purpose: "Creates a meeting link for each booked meeting.",
    data: "Meeting time and host. No prospect details.",
  },
  {
    name: "Meta",
    purpose: "Measures ad conversions on an event registration page.",
    data: "Email and phone in hashed (SHA-256) form, IP address, browser details and the page address.",
  },
]

function ServiceList({ services }: { services: Service[] }) {
  return (
    <ul className="!list-none !pl-0 !space-y-0 divide-y divide-border border-y border-border">
      {services.map((service) => (
        <li key={service.name} className="!pl-0 py-4 md:grid md:grid-cols-12 md:gap-6">
          <p className="md:col-span-4 font-medium text-foreground">{service.name}</p>
          <div className="md:col-span-8 mt-1 md:mt-0">
            <p>{service.purpose}</p>
            <p className="!mt-1 text-sm">Data: {service.data}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default function SecurityPage() {
  return (
    <LegalPage
      title="Security and Compliance for Advisory Firms"
      updated="November 19, 2026"
      cta={{ label: OFFER_CTA_LABEL, shortLabel: OFFER_CTA_SHORT_LABEL, location: "security_header" }}
    >
      <p>
        This page answers the questions a compliance team usually asks before approving Xpand as a vendor. It describes
        the current version of our lead intake and follow-up system. Our written agreement with each firm controls if
        it differs from this page.
      </p>

      <LegalSection title="How it works">
        <p>
          Xpand is a lead intake and follow-up system. It sits on top of the tools your firm already uses, such as your
          CRM, Outlook and calendars.
        </p>
        <p>
          It holds prospect (lead) data only: what a prospect enters on your intake form, and the meetings they book.
          It does not read client records from your CRM. When connected, it adds new leads and booked meetings to your
          CRM.
        </p>
      </LegalSection>

      <LegalSection title="Data separation">
        <p>
          Each firm gets its own separate setup and its own database. Databases are never shared between firms, and
          data from one firm is never visible to another.
        </p>
      </LegalSection>

      <LegalSection title="Access">
        <ul>
          <li>Only your firm&apos;s authorized staff can sign in. There is no public sign-up.</li>
          <li>Passwords are stored as one-way hashes (bcrypt), never in plain text.</li>
          <li>Repeated failed sign-in attempts are blocked for 15 minutes.</li>
          <li>Roles control what each person can do. Only admins can change settings, and only staff given export
            permission can export data.</li>
          <li>When a staff account is turned off, its sessions end right away.</li>
          <li>Every sign-in attempt is logged.</li>
          <li>
            Changes to a lead&apos;s status, deletions, and changes to general settings, alert recipients and
            scheduling rules are recorded with who made them and when.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Encryption">
        <p>Data is encrypted in transit and at rest.</p>
        <ul>
          <li>All connections to the system use HTTPS. Plain HTTP requests are redirected to HTTPS.</li>
          <li>The database accepts only encrypted connections.</li>
          <li>Data stored in the database is encrypted with AES-256.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Hosting and subprocessors">
        <p>The system runs on Vercel, in its US East (Washington, D.C.) region.</p>
        <p>These services are always used:</p>
        <ServiceList services={CORE_SERVICES} />
        <p className="!mt-8">
          These services are used only if your firm asks us to turn them on. Most connect to accounts your firm already
          has.
        </p>
        <ServiceList services={OPTIONAL_SERVICES} />
      </LegalSection>

      <LegalSection title="Regulation S-P">
        <p>
          Xpand signs a written SEC Regulation S-P vendor attestation with each advisory firm.
        </p>
        <p>
          If we become aware of a security incident involving your firm&apos;s data, we notify your firm as soon as
          possible, and no later than 72 hours after we become aware of it.
        </p>
      </LegalSection>

      <LegalSection title="Communications and recordkeeping">
        <ul>
          <li>Any client-facing wording is approved by your firm&apos;s compliance team before it is used.</li>
          <li>The system does not email or text prospects on its own.</li>
          <li>
            If your firm adds email follow-up, those emails go out from your firm&apos;s own email system, so your
            firm&apos;s archiving keeps working.
          </li>
          <li>
            If your firm adds texting, messages go only to people who gave consent and always include a way to opt
            out, or they are sent through your firm&apos;s approved texting service.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="AI">
        <p>
          Any AI features are optional, off by default, and turned on only with your firm&apos;s written approval.
        </p>
        <p>Firm and prospect data is never used to train AI models and is never sent to consumer AI tools.</p>
      </LegalSection>

      <LegalSection title="Data retention and deletion">
        <ul>
          <li>Your firm owns its data.</li>
          <li>We export your data on request. Staff with export permission can also download lead data as a CSV or
            PDF file at any time.</li>
          <li>
            We delete your data on request and at the end of the engagement, and confirm the deletion in writing.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Due diligence">
        <p>We complete vendor due diligence questionnaires on request.</p>
        <p>
          <strong>{COMPANY_LEGAL_NAME}</strong>
          <br />
          {COMPANY_ADDRESS}
          <br />
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <br />
          <a href={CONTACT_PHONE.href}>{CONTACT_PHONE.display}</a>
        </p>
      </LegalSection>
    </LegalPage>
  )
}
