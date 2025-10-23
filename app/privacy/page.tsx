"use client"

import { useEffect } from "react"

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md transition-all">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-[20%] bg-black">
              <span className="font-sans font-bold text-white leading-none" style={{ fontSize: "140%" }}>
                C
              </span>
            </div>
            <span className="font-semibold text-lg">Cooper AI</span>
          </a>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
        <h1 className="mb-2 font-bold text-3xl md:text-4xl tracking-tight">Privacy Policy</h1>
        <p className="mb-12 text-muted-foreground text-sm">Last Updated: November 1, 2025</p>

        <div className="prose prose-sm max-w-none space-y-8">
          <section>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                Cooper AI, Inc. and its affiliates ("Cooper AI," "we," "us," or "our") provide an AI-powered software
                platform that enables insurance agents, brokers, and carriers to automate and streamline insurance
                workflows, including document processing, underwriting assistance, policy analysis, and related services
                (the "Services").
              </p>
              <p>
                This Privacy Policy describes Cooper AI's privacy practices with respect to the personal information of
                individuals who use the Services on behalf of an insurance agency, brokerage, carrier, or other business
                to which we may market and provide our Services (each, a "User" or "you(r)"), including the information
                we collect on our website at askcooper.ai, through our platform, at events, in person, from third
                parties, and from other sources. The Privacy Policy also explains how we handle the personal information
                of job candidates.
              </p>
              <p>
                Our Services are intended for representatives of businesses in the insurance industry, and are not
                intended for consumers. Accordingly, we treat all personal information covered by this Privacy Policy,
                including visitors to our websites or applications, as pertaining to individuals acting as business
                representatives, rather than in their personal or household capacity.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">Personal Information We Collect</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p className="font-medium text-foreground">Information we collect may include:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Contact details</strong>, such as your company's name, your first and last name, email
                  address, state, and phone number.
                </li>
                <li>
                  <strong>Communications</strong> that we exchange with you, including when you contact us with
                  questions, feedback, or otherwise.
                </li>
                <li>
                  <strong>Insurance documents and data</strong>, such as ACORD forms, policy documents, underwriting
                  guidelines, claims information, and other insurance-related documents you upload or process through
                  the Services.
                </li>
                <li>
                  <strong>Commercial data</strong>, such as the products and services you are interested in, and other
                  information about your company related to insurance operations.
                </li>
                <li>
                  <strong>Account data</strong>, such as account credentials, user preferences, and usage history within
                  the Services.
                </li>
                <li>
                  <strong>Marketing data</strong>, such as your preferences for receiving our marketing communications,
                  and details about your engagement with them.
                </li>
                <li>
                  <strong>Job applicant data</strong>, such as your education and employment history, as well as any
                  other information you choose to include in your resume and/or application for employment at Cooper AI.
                </li>
                <li>
                  <strong>Device data</strong>, such as your computer's or mobile device's operating system type and
                  version, manufacturer and model, browser type, screen resolution, IP address, unique identifiers,
                  language settings, and general location information such as city, state or geographic area.
                </li>
                <li>
                  <strong>Online activity data</strong>, such as pages or screens you viewed, how long you spent on a
                  page or screen, navigation paths, access times, and duration of access, and whether you have opened
                  our marketing emails or clicked links within them.
                </li>
              </ul>
              <p className="font-medium text-foreground pt-4">Sources of Information:</p>
              <p>We may collect personal information from the following sources:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>You</strong>, when you visit the website, communicate with us, use the Services, or otherwise
                  provide us the data.
                </li>
                <li>
                  <strong>Other Users</strong>, when a User provides information about you or your company through the
                  Services.
                </li>
                <li>
                  <strong>Third parties</strong>, such as event co-sponsors, insurance support organizations, and
                  business partners.
                </li>
                <li>
                  <strong>Public sources</strong>, such as social media platforms and other publicly available
                  databases.
                </li>
                <li>
                  <strong>Automatic data collection technologies</strong>, such as cookies and similar technologies in
                  connection with your interaction with our website and use of the Services.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">How We Use Personal Information</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>We use your personal information for the following purposes:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Service delivery</strong>: To provide, maintain, and improve the Services, including
                  processing insurance documents, generating insights, and facilitating insurance workflows.
                </li>
                <li>
                  <strong>Communication</strong>: To communicate with you about the Services, respond to your inquiries,
                  and provide customer support.
                </li>
                <li>
                  <strong>Account management</strong>: To create and manage your account, authenticate users, and
                  provide access to the Services.
                </li>
                <li>
                  <strong>Product development</strong>: To develop new features, improve existing functionality, and
                  enhance the overall user experience.
                </li>
                <li>
                  <strong>Marketing</strong>: To send you marketing communications about our Services, events, and
                  updates (with your consent where required).
                </li>
                <li>
                  <strong>Analytics</strong>: To analyze usage patterns, measure the effectiveness of our Services, and
                  generate aggregated statistics.
                </li>
                <li>
                  <strong>Security</strong>: To protect the security and integrity of our Services, prevent fraud, and
                  ensure compliance with our Terms of Service.
                </li>
                <li>
                  <strong>Legal compliance</strong>: To comply with applicable laws, regulations, legal processes, and
                  enforceable governmental requests.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">How We Share Personal Information</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>We may share your personal information in the following circumstances:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Service providers</strong>: We may share information with third-party service providers who
                  perform services on our behalf, such as hosting, data analysis, customer service, and email delivery.
                </li>
                <li>
                  <strong>Business transfers</strong>: If we are involved in a merger, acquisition, financing,
                  reorganization, bankruptcy, or sale of assets, your information may be transferred as part of that
                  transaction.
                </li>
                <li>
                  <strong>Legal requirements</strong>: We may disclose information if required to do so by law or in
                  response to valid requests by public authorities.
                </li>
                <li>
                  <strong>Protection of rights</strong>: We may disclose information to protect and defend our rights,
                  property, or safety, or that of our users or others.
                </li>
                <li>
                  <strong>With your consent</strong>: We may share information with third parties when you have given us
                  consent to do so.
                </li>
              </ul>
              <p className="pt-4">
                We do not sell your personal information to third parties for their marketing purposes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">Data Security</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                We implement appropriate technical and organizational measures to protect personal information against
                unauthorized or unlawful processing and against accidental loss, destruction, or damage. These measures
                include:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection and security</li>
                <li>Incident response procedures</li>
              </ul>
              <p className="pt-4">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we
                strive to use commercially acceptable means to protect your personal information, we cannot guarantee
                its absolute security.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">Data Retention</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy
                Policy, unless a longer retention period is required or permitted by law. When determining the retention
                period, we consider factors such as:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>The nature and sensitivity of the information</li>
                <li>The purposes for which we process the information</li>
                <li>Legal and regulatory requirements</li>
                <li>Our legitimate business interests</li>
              </ul>
              <p className="pt-4">
                When we no longer need personal information, we will securely delete or anonymize it in accordance with
                our data retention policies.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">Your Rights and Choices</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>Depending on your location, you may have certain rights regarding your personal information:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Access</strong>: You may request access to the personal information we hold about you.
                </li>
                <li>
                  <strong>Correction</strong>: You may request that we correct inaccurate or incomplete personal
                  information.
                </li>
                <li>
                  <strong>Deletion</strong>: You may request that we delete your personal information, subject to
                  certain exceptions.
                </li>
                <li>
                  <strong>Objection</strong>: You may object to our processing of your personal information in certain
                  circumstances.
                </li>
                <li>
                  <strong>Portability</strong>: You may request a copy of your personal information in a structured,
                  machine-readable format.
                </li>
                <li>
                  <strong>Marketing opt-out</strong>: You may opt out of receiving marketing communications from us at
                  any time.
                </li>
              </ul>
              <p className="pt-4">
                To exercise these rights, please contact us at support@askcooper.ai. We will respond to your request in
                accordance with applicable law.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">Cookies and Tracking Technologies</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                We use cookies and similar tracking technologies to collect information about your browsing activities
                and to provide, maintain, and improve our Services. Cookies are small data files stored on your device.
                You can control cookies through your browser settings and other tools. However, if you disable cookies,
                some features of our Services may not function properly.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">Children's Privacy</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal
                information from children. If you become aware that a child has provided us with personal information,
                please contact us at support@askcooper.ai.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">International Data Transfers</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                Your personal information may be transferred to, and processed in, countries other than the country in
                which you are resident. These countries may have data protection laws that are different from the laws
                of your country. We take appropriate measures to ensure that your personal information receives an
                adequate level of protection in the jurisdictions in which we process it.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">Changes to This Privacy Policy</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other
                operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new
                Privacy Policy on our website and updating the "Last Updated" date. We encourage you to review this
                Privacy Policy periodically to stay informed about how we are protecting your information.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">Contact Us</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices,
                please contact us at:
                <br />
                <br />
                Cooper AI, Inc.
                <br />
                Email: support@askcooper.ai
                <br />
                Website: askcooper.ai
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-[20%] bg-black">
                <span className="font-sans font-bold text-white leading-none" style={{ fontSize: "140%" }}>
                  C
                </span>
              </div>
              <span className="font-semibold text-sm">Cooper AI</span>
            </div>
            <p className="text-muted-foreground text-xs">© 2025 Cooper AI</p>
            <div className="flex gap-6 text-muted-foreground text-xs">
              <a href="/privacy" className="hover:text-foreground">
                Privacy
              </a>
              <a href="/terms" className="hover:text-foreground">
                Terms
              </a>
              <a href="/#waitlist" className="hover:text-foreground">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
