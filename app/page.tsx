"use client"

import { WaitlistForm } from "@/components/waitlist-form"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import Link from "next/link"
import { CooperLogo } from "@/components/cooper-logo"
import { useEffect, useState } from "react"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  // </CHANGE>

  return (
    <div className="min-h-screen bg-background">
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-background"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <CooperLogo className="h-7 w-7 text-primary" />
            <span className="font-semibold text-lg">Cooper AI</span>
          </div>
          <Button asChild>
            <Link href="#waitlist">Join Waitlist</Link>
          </Button>
        </div>
      </header>
      {/* </CHANGE> */}

      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-muted px-3 py-1 text-xs font-medium uppercase tracking-wider">
              <Sparkles className="h-3 w-3" />
              <span>AI for Insurance</span>
            </div>

            <h1 className="mb-4 text-balance font-bold text-4xl md:text-6xl leading-[1.1] tracking-tight">
              Your AI Assistant for Insurance
            </h1>

            <p className="mx-auto mb-8 max-w-xl text-balance text-muted-foreground text-lg leading-relaxed">
              Automate submissions, underwriting, and policy management for agents, brokers, and carriers.
            </p>

            <Button size="lg" asChild>
              <Link href="#waitlist">Join the Waitlist</Link>
            </Button>
          </div>
        </div>
        <div className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-muted/30 to-transparent" />
      </section>

      <section className="border-t bg-muted/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-xl border bg-background shadow-2xl">
              <div className="flex items-center gap-3 border-b bg-muted/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                  <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                  <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                </div>
                <div className="text-muted-foreground text-xs">Cooper AI</div>
              </div>

              <div className="flex">
                <div className="hidden w-48 border-r bg-muted/30 md:block">
                  <div className="flex flex-col gap-0.5 p-3">
                    <div className="mb-2 flex items-center gap-2.5 px-2.5 py-2">
                      <CooperLogo className="h-5 w-5" />
                      <span className="font-semibold text-sm">Cooper AI</span>
                    </div>
                    <div className="space-y-0.5 text-xs">
                      <div className="rounded-md bg-background px-3 py-2 font-medium">Assistant</div>
                      <div className="flex items-center justify-between rounded-md px-3 py-2 text-muted-foreground">
                        <span>Workflows</span>
                        <span>›</span>
                      </div>
                      <div className="flex items-center justify-between rounded-md px-3 py-2 text-muted-foreground">
                        <span>Vault</span>
                        <span>›</span>
                      </div>
                      <div className="rounded-md px-3 py-2 text-muted-foreground">Library</div>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex h-[500px] flex-col">
                    <div className="flex-1 overflow-y-auto p-4">
                      <div className="mx-auto max-w-2xl space-y-4">
                        <div className="flex justify-end">
                          <div className="max-w-[80%] rounded-lg bg-foreground px-3 py-2.5 text-background">
                            <p className="text-sm">Review this ACORD 125 and highlight any gaps or conflicts</p>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-foreground">
                            <CooperLogo className="h-5 w-5" />
                          </div>
                          <div className="flex-1 space-y-2.5">
                            <div className="rounded-lg border bg-card p-4">
                              <p className="mb-3 text-sm">Analysis complete:</p>
                              <div className="space-y-2 text-sm">
                                <div className="flex items-start gap-2">
                                  <span className="text-muted-foreground">⚠</span>
                                  <div>
                                    <span className="font-medium">Missing:</span> Building construction type (Section
                                    3B)
                                  </div>
                                </div>
                                <div className="flex items-start gap-2">
                                  <span className="text-muted-foreground">⚠</span>
                                  <div>
                                    <span className="font-medium">Gap:</span> No sprinkler system details
                                  </div>
                                </div>
                                <div className="flex items-start gap-2">
                                  <span>✕</span>
                                  <div>
                                    <span className="font-medium">Conflict:</span> Property value ($2.5M) vs coverage
                                    limit ($3M)
                                  </div>
                                </div>
                                <div className="flex items-start gap-2">
                                  <span>✓</span>
                                  <div>
                                    <span className="font-medium">Complete:</span> Loss history attached
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <button className="rounded-md border bg-background px-3 py-1.5 text-xs hover:bg-muted">
                                Export
                              </button>
                              <button className="rounded-md border bg-background px-3 py-1.5 text-xs hover:bg-muted">
                                Suggest Carriers
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t bg-background p-4">
                      <div className="mx-auto max-w-2xl">
                        <div className="relative">
                          <textarea
                            className="w-full resize-none rounded-lg border bg-background px-4 py-3 pr-28 text-sm outline-none focus:ring-2 focus:ring-ring"
                            placeholder="Ask a follow-up..."
                            rows={1}
                            disabled
                          />
                          <div className="absolute right-2 top-1/2 -translate-y-1/2">
                            <button className="rounded-md bg-foreground px-4 py-2 text-background text-xs font-medium">
                              Ask Cooper
                            </button>
                          </div>
                          {/* </CHANGE> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-3 font-bold text-3xl md:text-4xl tracking-tight">See Cooper in action</h2>
            <p className="text-muted-foreground text-lg">Real workflows, automated</p>
          </div>

          <div className="space-y-8">
            {/* Row 1: Agents & Brokers */}
            <div className="relative">
              <div className="flex animate-scroll-slow gap-4">
                <WorkflowCard
                  title="Process Submissions"
                  description="Automatically process incoming submissions, identify missing information, resolve conflicts, and prepare clean packages ready for underwriting."
                  tag="Draft"
                  steps="5 steps"
                  popular
                />
                <WorkflowCard
                  title="Compare Policies"
                  description="Get side-by-side policy comparisons with clear explanations of coverage differences and recommended endorsements for your clients."
                  tag="Comparison"
                  steps="3 steps"
                />
                <WorkflowCard
                  title="Improve Bind Rates"
                  description="Find the best carrier matches based on current underwriting guidelines and generate compelling proposals to increase your bind rate."
                  tag="Proposal"
                  steps="4 steps"
                />
                <WorkflowCard
                  title="Client Assistant"
                  description="Quickly access past submissions and policy details, identify cross-sell opportunities, and get answers to servicing questions."
                  tag="Analysis"
                  steps="2 steps"
                />
                {/* Duplicate for seamless loop */}
                <WorkflowCard
                  title="Process Submissions"
                  description="Automatically process incoming submissions, identify missing information, resolve conflicts, and prepare clean packages ready for underwriting."
                  tag="Draft"
                  steps="5 steps"
                  popular
                />
                <WorkflowCard
                  title="Compare Policies"
                  description="Get side-by-side policy comparisons with clear explanations of coverage differences and recommended endorsements for your clients."
                  tag="Comparison"
                  steps="3 steps"
                />
              </div>
            </div>

            {/* Row 2: Insurers & Carriers */}
            <div className="relative">
              <div className="flex animate-scroll-slow-reverse gap-4">
                <WorkflowCard
                  title="Submission Intake"
                  description="Streamline submission processing by automatically extracting data from emails and applications, flagging gaps, and populating your underwriting workbench."
                  tag="Draft"
                  steps="5 steps"
                  popular
                />
                <WorkflowCard
                  title="Draft UW Guidelines"
                  description="Generate underwriting guidelines, broker correspondence, and notices with proper documentation and supporting rationale."
                  tag="Draft"
                  steps="4 steps"
                />
                <WorkflowCard
                  title="Audit UW Compliance"
                  description="Verify compliance with state regulations and internal guidelines across your portfolio, claims, and bordereau submissions."
                  tag="Review table"
                  steps="15 columns"
                />
                <WorkflowCard
                  title="Underwriting Assistant"
                  description="Research competitive rate filings, review historical submissions, analyze coverage terms, and get answers on state regulations."
                  tag="Output"
                  steps="2 steps"
                />
                {/* Duplicate for seamless loop */}
                <WorkflowCard
                  title="Submission Intake"
                  description="Streamline submission processing by automatically extracting data from emails and applications, flagging gaps, and populating your underwriting workbench."
                  tag="Draft"
                  steps="5 steps"
                  popular
                />
                <WorkflowCard
                  title="Draft UW Guidelines"
                  description="Generate underwriting guidelines, broker correspondence, and notices with proper documentation and supporting rationale."
                  tag="Draft"
                  steps="4 steps"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl border bg-card p-8 shadow-sm">
              <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
                <img
                  src="/images/design-mode/image(1).png"
                  alt="Rushil Goel"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="flex-1 text-center md:text-left">
                  <blockquote className="mb-3 text-balance text-lg leading-relaxed">
                    &quot;Cooper transformed how we process submissions. What took hours now takes minutes. It&#39;s like having an insurance expert available 24/7.&quot;
                  </blockquote>
                  <div>
                    <div className="font-semibold">Rushil Goel</div>
                    <div className="text-muted-foreground text-sm">CEO, Nirvana Insurance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="border-t py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-lg">
            <h2 className="mb-2 font-bold text-2xl md:text-3xl tracking-tight">Join the waitlist</h2>
            <p className="mb-6 text-muted-foreground text-sm">Be first to experience AI-powered insurance automation</p>
            <WaitlistForm />
          </div>
          {/* </CHANGE> */}
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <CooperLogo className="h-5 w-5" />
              <span className="font-semibold text-sm">Cooper AI</span>
            </div>
            <p className="text-muted-foreground text-xs">© 2025 Cooper AI</p>
            <div className="flex gap-6 text-muted-foreground text-xs">
              <Link href="/privacy" className="hover:text-foreground">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-foreground">
                Terms
              </Link>
              <Link href="#waitlist" className="hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function WorkflowCard({
  title,
  description,
  tag,
  steps,
  popular,
}: {
  title: string
  description: string
  tag: string
  steps: string
  popular?: boolean
}) {
  return (
    <div className="relative min-w-[320px] rounded-lg border bg-card p-5 shadow-sm">
      {popular && (
        <div className="absolute top-4 right-4 rounded-md bg-foreground px-2 py-0.5 text-background text-xs font-medium">
          Popular
        </div>
      )}
      <h3 className="mb-2 font-semibold text-base">{title}</h3>
      <p className="mb-4 text-muted-foreground text-sm leading-relaxed">{description}</p>
      <div className="flex items-center gap-2 text-muted-foreground text-xs">
        <span className="font-medium">{tag}</span>
        <span>·</span>
        <span>{steps}</span>
      </div>
    </div>
  )
}

function UseCaseItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col gap-1">
      <h4 className="font-semibold text-sm">{title}</h4>
      <p className="text-muted-foreground text-xs leading-relaxed">{description}</p>
    </div>
  )
}
