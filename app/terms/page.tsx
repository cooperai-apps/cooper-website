"use client"

import { useEffect } from "react"
import { CooperLogo } from "@/components/cooper-logo"
import Link from "next/link"

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md transition-all">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <CooperLogo className="h-7 w-7" />
            <span className="font-semibold text-lg">Cooper</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
        <h1 className="mb-2 font-bold text-3xl md:text-4xl tracking-tight">Terms of Use Agreement</h1>
        <p className="mb-12 text-muted-foreground text-sm">Effective: November 1, 2025</p>

        <div className="prose prose-sm max-w-none space-y-8">
          <section>
            <h2 className="mb-4 font-semibold text-xl">01. Acceptance of Terms</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                Cooper, Inc. ("Cooper" or "we") provides our Service (as defined below) to you through our web
                site and related technologies (the Site, including any updated or new features, functionality and
                technology, the "Service"). All access and use of the Service is subject to the terms and conditions
                contained in these Terms of Service (as amended from time to time, these "Terms of Service"). By
                accessing, browsing, or otherwise using the Site or any other aspect of the Service, you acknowledge
                that you have read, understood, and agree to be bound by these Terms of Service. If you do not accept
                the terms and conditions of these Terms of Service, you agree that you will not access, browse or
                otherwise use the Service. If you are entering into these Terms of Service on behalf of a company,
                business or other legal entity, you represent that you have the authority to bind such entity and its
                affiliates to these Terms of Service, in which case the terms "you" or "your" shall refer to such entity
                and its affiliates. If you do not have such authority, or if you do not agree with these Terms of
                Service, you must not accept these Terms of Service and may not use the Service.
              </p>
              <p>
                Cooper may change these Terms of Service from time to time by providing thirty (30) days prior notice
                either by emailing the email address associated with your account or by posting a notice on the Site.
                You can review the most current version of these Terms of Service at any time. The revised terms and
                conditions will become effective thirty (30) days after we post or send you notice of such changes, and
                if you use the Service after that date, your use will constitute acceptance of the revised terms and
                conditions. If any change to these Terms of Service is not acceptable to you, your only remedy is stop
                using the Service and send a cancellation email to support@askcooper.ai.
              </p>
              <p>
                As part of the registration process, you will identify an administrative user name and password for your
                account ("Account"). You may use the administrative user name and password to create standard users,
                each with a user password (each, a "User"). You are responsible for maintaining the confidentiality of
                your password and account and are fully responsible for any and all activities that occur under your
                password or account. The Service may accessed or used only by Users. You agree to not make available the
                Service to any person or entity other than Users. You are responsible for maintaining the
                confidentiality of all secure login information, passwords and other information related to Users'
                respective accounts at all times. You are responsible for your Users' compliance with the terms and
                conditions of these Terms of Service as though they were you hereunder and will be responsible and
                liable for any User's breach of any such terms or conditions. You agree to (a) immediately notify Cooper
                AI of any unauthorized use of your or a User's password or account or any other breach of security, and
                (b) ensure that you and each User exits from your or their account at the end of each session when
                accessing the Service. Cooper will not be liable for any loss or damage arising from your or a User's
                failure to comply with this section. Cooper reserves the right to access your account in order to
                respond to your requests for technical support.
              </p>
              <p>
                At Cooper, we respect the privacy of our users. For more information please see our Privacy Policy.
                By using the Service, you consent to our collection, use and disclosure of personal information and
                other data as outlined therein.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">02. Description of Service</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                The "Service" includes (a) the Site, (b) Cooper's insurance automation platform and related services,
                including, but not limited to AI-powered document processing, workflow automation, underwriting
                assistance, policy analysis, and related technologies and (c) all software, data, reports, text, images,
                and content (collectively referred to as the "Content") made available through any of the foregoing. For
                clarity, any insurance products or policies are subject to a separate agreement and are expressly not a
                part of the Service or subject to these Terms of Service. Any new features added to or augmenting the
                Service are also subject to these Terms of Service. Cooper reserves the right to modify or
                discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. You
                agree that Cooper will not be liable to you or to any third party for any modification, suspension or
                discontinuance of the Service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">03. Use of Service</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                You agree to use the Service only for purposes that are permitted by (a) these Terms of Service and (b)
                any applicable law, regulation or generally accepted practices or guidelines in the relevant
                jurisdictions. You agree not to access (or attempt to access) the Service by any means other than
                through the interface that is provided by Cooper. You shall not use the Service in any manner that
                could damage, disable, overburden, or impair the Service or interfere with any other party's use and
                enjoyment of the Service.
              </p>
              <p>
                You agree that you are solely responsible for (and that Cooper has no responsibility to you or to any
                third party for) any breach of your obligations under these Terms of Service and for the consequences
                (including any loss or damage which Cooper may suffer) of any such breach.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">04. Intellectual Property Rights</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                You acknowledge and agree that Cooper (or Cooper's licensors) own all legal right, title and
                interest in and to the Service, including any intellectual property rights which subsist in the Service
                (whether those rights happen to be registered or not, and wherever in the world those rights may exist).
                You further acknowledge that the Service may contain information which is designated confidential by
                Cooper and that you shall not disclose such information without Cooper's prior written consent.
              </p>
              <p>
                Unless you have agreed otherwise in writing with Cooper, nothing in these Terms of Service gives you
                a right to use any of Cooper's trade names, trademarks, service marks, logos, domain names, and other
                distinctive brand features.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">05. Data and Privacy</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                You retain all rights to any data, documents, or information you submit to the Service ("Customer
                Data"). Cooper will use Customer Data only to provide the Service to you and will not share Customer
                Data with third parties except as necessary to provide the Service or as required by law. Cooper
                implements appropriate technical and organizational measures to protect Customer Data against
                unauthorized or unlawful processing and against accidental loss, destruction, or damage.
              </p>
              <p>
                You represent and warrant that you have all necessary rights to submit Customer Data to the Service and
                that such submission does not violate any applicable laws or third-party rights.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">06. Limitation of Liability</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, COOPER AI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED
                DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM
                (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE; (B) ANY CONDUCT OR CONTENT OF
                ANY THIRD PARTY ON THE SERVICE; OR (C) UNAUTHORIZED ACCESS, USE OR ALTERATION OF YOUR TRANSMISSIONS OR
                CONTENT.
              </p>
              <p>
                IN NO EVENT SHALL COOPER AI'S AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICE EXCEED THE
                GREATER OF ONE HUNDRED U.S. DOLLARS (U.S. $100.00) OR THE AMOUNTS PAID BY YOU TO COOPER AI FOR THE PAST
                THREE MONTHS OF THE SERVICE IN QUESTION.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">07. Indemnification</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                You agree to defend, indemnify and hold harmless Cooper and its officers, directors, employees,
                consultants, affiliates, subsidiaries and agents from and against any and all claims, liabilities,
                damages, losses, costs, expenses, fees (including reasonable attorneys' fees and court costs) that such
                parties may incur as a result of or arising from (a) your (or anyone using your account's) violation of
                these Terms of Service, (b) your (or anyone using your account's) violation of any rights of any other
                person or entity, or (c) any viruses, trojan horses, worms, time bombs, cancelbots or other similar
                harmful or deleterious programming routines input by you into the Service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">08. Termination</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                These Terms of Service will continue to apply until terminated by either you or Cooper as set forth
                below. If you want to terminate your agreement with Cooper, you may do so by (a) notifying Cooper
                at any time and (b) closing your account. Your notice should be sent to support@askcooper.ai.
              </p>
              <p>
                Cooper may at any time terminate these Terms of Service with you if: (a) you have breached any
                provision of these Terms of Service (or have acted in a manner that clearly shows you do not intend to,
                or are unable to, comply with these Terms of Service); (b) Cooper is required to do so by law; (c)
                the provision of the Service to you is, in Cooper's opinion, no longer commercially viable; or (d)
                Cooper has elected to discontinue the Service (or any part thereof).
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">09. General Legal Terms</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                These Terms of Service constitute the whole legal agreement between you and Cooper and govern your
                use of the Service and completely replace any prior agreements between you and Cooper in relation to
                the Service.
              </p>
              <p>
                You agree that if Cooper does not exercise or enforce any legal right or remedy which is contained in
                these Terms of Service (or which Cooper has the benefit of under any applicable law), this will not
                be taken to be a formal waiver of Cooper's rights and that those rights or remedies will still be
                available to Cooper.
              </p>
              <p>
                If any court of law, having the jurisdiction to decide on this matter, rules that any provision of these
                Terms of Service is invalid, then that provision will be removed from these Terms of Service without
                affecting the rest of these Terms of Service. The remaining provisions of these Terms of Service will
                continue to be valid and enforceable.
              </p>
              <p>
                These Terms of Service, and your relationship with Cooper under these Terms of Service, shall be
                governed by the laws of the State of Delaware without regard to its conflict of laws provisions. You and
                Cooper agree to submit to the exclusive jurisdiction of the courts located within the State of
                Delaware to resolve any legal matter arising from these Terms of Service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">10. Contact Information</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                If you have any questions about these Terms of Service, please contact us at:
                <br />
                <br />
                Cooper, Inc.
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
              <CooperLogo className="h-5 w-5" />
              <span className="font-semibold text-sm">Cooper</span>
            </div>
            <p className="text-muted-foreground text-xs">© 2025 Cooper</p>
            <div className="flex gap-6 text-muted-foreground text-xs">
              <Link href="/privacy" className="hover:text-foreground">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-foreground">
                Terms
              </Link>
              <Link href="/#waitlist" className="hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
