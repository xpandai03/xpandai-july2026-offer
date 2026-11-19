import type { Metadata } from "next"
import Link from "next/link"

import { LegalPage, LegalSection } from "@/components/legal-page"
import { COMPANY_ADDRESS, COMPANY_LEGAL_NAME, CONTACT_EMAIL, CONTACT_PHONE, SOCIAL_IMAGE } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy Policy | Xpand AI",
  description: "How XPAND TECHNOLOGY LLC collects, uses and protects information on xpandai.com.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Xpand AI",
    description: "How XPAND TECHNOLOGY LLC collects, uses and protects information on xpandai.com.",
    siteName: "Xpand AI",
    type: "website",
    images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Xpand AI",
    description: "How XPAND TECHNOLOGY LLC collects, uses and protects information on xpandai.com.",
    images: [SOCIAL_IMAGE],
  },
}

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="November 19, 2026">
      <p>
        {COMPANY_LEGAL_NAME} (&ldquo;Xpand&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) builds lead follow-up and
        booking systems for financial advisors and clinics. This policy explains what information we collect when you
        visit xpandai.com or book a call with us, how we use it, and the choices you have. Section 4 explains how we
        handle data we process for advisory firm clients. Work we do for clients is governed by our written agreements
        with them.
      </p>

      <LegalSection title="1. Information we collect">
        <p>
          <strong>Website analytics.</strong> We use Vercel Web Analytics to understand how the site is used. It
          records page views and a few interactions, such as clicks on the booking button, along with the page
          address, the referring site, your browser, operating system, device type and approximate country. Vercel Web
          Analytics does not use cookies. It identifies a visit with an anonymous value that resets daily, and we
          cannot use it to identify you personally.
        </p>
        <p>
          <strong>Hosting.</strong> The site is hosted by Vercel. Like any web host, Vercel processes standard request
          data, including your IP address and browser details, to deliver the site and keep it secure.
        </p>
        <p>
          <strong>Booking a call.</strong> Calls are booked through Google Calendar appointment scheduling. When you
          book, you give us your first name, last name and email address, and you may choose to tell us about your
          business. Google processes this information under the{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Google Privacy Policy
          </a>
          , and it reaches us in our Google Workspace calendar. Calls take place on Google Meet.
        </p>
        <p>
          <strong>Email.</strong> If you email us, we keep your message and contact details so we can reply.
        </p>
        <p>
          <strong>Videos and links.</strong> Some demo videos are hosted by Loom or Google Drive. Videos on our home
          page are hosted by Tella. When you play or open one, that service may collect information under its own
          privacy policy.
        </p>
      </LegalSection>

      <LegalSection title="2. How we use information">
        <ul>
          <li>To schedule, prepare for and hold the calls you book.</li>
          <li>To reply to your messages and follow up about your inquiry.</li>
          <li>To understand which pages and sources bring visitors, and to improve the site.</li>
          <li>To keep the site secure and to meet legal obligations.</li>
        </ul>
        <p>
          We do not sell your personal information, and we do not share it for cross-context behavioral advertising.
        </p>
      </LegalSection>

      <LegalSection title="3. Who we share it with">
        <p>
          We share information only with service providers that help us run the site and our business: Vercel
          (hosting and analytics), Google (Calendar, Meet and Workspace email), and Loom, Tella and Google Drive (video
          hosting). We may also
          disclose information if the law requires it, or to protect our rights or the safety of others.
        </p>
      </LegalSection>

      <LegalSection title="4. Data we process for advisory firm clients">
        <p>
          When an advisory firm uses our lead intake and follow-up system, we process prospect information on the
          firm&apos;s behalf, under our written agreement with that firm. This is what prospects enter on the
          firm&apos;s intake form and the meetings they book. The firm owns and controls this data. We use it only to
          provide our service to that firm. We do not sell it, and we never use it to train AI models.
        </p>
        <p>
          Each firm&apos;s data is kept in its own separate database. We export it on request, and delete it on
          request and at the end of the engagement. If you are a prospect of one of these firms, please contact the
          firm about your information, and we will help it respond.
        </p>
        <p>
          Our <Link href="/security">Security and Compliance</Link> page explains how this data is protected, which
          services process it, and how it is exported and deleted.
        </p>
      </LegalSection>

      <LegalSection title="5. How long we keep it">
        <p>
          We keep booking details and email correspondence for as long as we need them to work with you, and longer
          only where the law requires. Analytics data is kept in aggregate form within Vercel&apos;s standard retention
          period.
        </p>
      </LegalSection>

      <LegalSection title="6. Your choices and rights">
        <p>
          You can ask us to access, correct or delete the personal information we hold about you by emailing{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. If you are a California resident, you have the
          right to know what personal information we collect and how we use it, to request its deletion or
          correction, and to opt out of its sale or sharing. We do not sell or share it. We will not treat you
          differently for exercising any of these rights.
        </p>
      </LegalSection>

      <LegalSection title="7. Security">
        <p>
          We use reasonable safeguards to protect the information we hold. No method of transmission or storage is
          completely secure, so we cannot guarantee absolute security. Our{" "}
          <Link href="/security">Security and Compliance</Link> page describes the safeguards for advisory firm data.
        </p>
      </LegalSection>

      <LegalSection title="8. Children">
        <p>
          This site is meant for businesses and is not directed to children under 16. We do not knowingly collect
          personal information from children.
        </p>
      </LegalSection>

      <LegalSection title="9. Changes to this policy">
        <p>
          We may update this policy from time to time. The date at the top of this page shows when it last changed.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact">
        <p>
          {COMPANY_LEGAL_NAME}, {COMPANY_ADDRESS}. Email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or call{" "}
          <a href={CONTACT_PHONE.href}>{CONTACT_PHONE.display}</a> with any question about this policy.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
