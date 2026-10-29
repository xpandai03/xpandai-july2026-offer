import type { Metadata } from "next"

import { LegalPage, LegalSection } from "@/components/legal-page"
import { CONTACT_EMAIL, SOCIAL_IMAGE } from "@/lib/site"

export const metadata: Metadata = {
  title: "Terms of Service | Xpand AI",
  description: "The terms that apply when you use xpandai.com, operated by Xpand Technology LLC.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service | Xpand AI",
    description: "The terms that apply when you use xpandai.com, operated by Xpand Technology LLC.",
    siteName: "Xpand AI",
    type: "website",
    images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Xpand AI",
    description: "The terms that apply when you use xpandai.com, operated by Xpand Technology LLC.",
    images: [SOCIAL_IMAGE],
  },
}

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="October 29, 2026">
      <p>
        These terms apply to your use of xpandai.com (the &ldquo;site&rdquo;), operated by Xpand Technology LLC
        (&ldquo;Xpand&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), Los Angeles, CA. By using the site, you agree to
        them. If you do not agree, please do not use the site.
      </p>

      <LegalSection title="1. What the site is">
        <p>
          The site describes our services and lets you book an introductory call. Booking a call does not create a
          client relationship. Any work we do for you is governed by a separate written agreement, and that agreement
          controls if it conflicts with these terms.
        </p>
      </LegalSection>

      <LegalSection title="2. No professional advice">
        <p>
          Content on the site is general information about our services. It is not financial, investment, legal,
          medical or compliance advice, and you should not rely on it as such.
        </p>
      </LegalSection>

      <LegalSection title="3. Using the site">
        <p>You agree not to:</p>
        <ul>
          <li>Use the site for anything unlawful.</li>
          <li>Try to gain unauthorized access to the site or the systems behind it.</li>
          <li>Interfere with the site&apos;s operation, or overload it with automated requests.</li>
          <li>Copy or scrape the site&apos;s content for commercial use without our permission.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Our content">
        <p>
          The site, including its text, design, graphics and videos, belongs to Xpand or its licensors and is protected
          by intellectual property laws. You may view and share links to it for your own use. Any other use needs our
          written permission.
        </p>
      </LegalSection>

      <LegalSection title="5. Third-party services">
        <p>
          The site links to or embeds services run by others, including Google Calendar for booking and Loom and
          Google Drive for videos. Those services have their own terms and privacy policies, and we are not
          responsible for them.
        </p>
      </LegalSection>

      <LegalSection title="6. Disclaimer">
        <p>
          The site is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. To the fullest extent the law
          allows, we disclaim all warranties, express or implied, including warranties of merchantability, fitness for
          a particular purpose and non-infringement. We do not promise that the site will be uninterrupted, error free
          or free of harmful components.
        </p>
      </LegalSection>

      <LegalSection title="7. Limitation of liability">
        <p>
          To the fullest extent the law allows, Xpand will not be liable for any indirect, incidental, special,
          consequential or punitive damages, or for any loss of profits, data or goodwill, arising from your use of
          the site. Our total liability for any claim relating to the site is limited to one hundred US dollars.
        </p>
      </LegalSection>

      <LegalSection title="8. Governing law">
        <p>
          These terms are governed by the laws of the State of California, without regard to its conflict of law
          rules. Any dispute relating to the site will be brought in the state or federal courts located in Los
          Angeles County, California.
        </p>
      </LegalSection>

      <LegalSection title="9. Changes to these terms">
        <p>
          We may update these terms from time to time. The date at the top of this page shows when they last changed.
          Continuing to use the site after a change means you accept the updated terms.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact">
        <p>
          Questions about these terms? Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
