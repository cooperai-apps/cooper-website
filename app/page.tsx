"use client"

import { WaitlistForm } from "@/components/waitlist-form"
import { Button } from "@/components/ui/button"
import {
  Sparkles,
  Shield,
  Workflow,
  Brain,
  Building2,
  Network,
  Store,
  CheckCircle2,
  Layers,
  FileCheck,
  Ban,
  Lock,
  ShieldCheck,
  Fingerprint,
  ScrollText,
  Award,
  Cross,
} from "lucide-react"
import Link from "next/link"
import { CooperLogo } from "@/components/cooper-logo"
import { useEffect, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Check if there's a hash in the URL when the page loads
    if (window.location.hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(window.location.hash.slice(1))
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-background"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
          <div className="flex items-center gap-1">
            <CooperLogo className="h-6 w-6 text-primary md:h-7 md:w-7" />
            <span className="font-semibold text-base md:text-2xl">Cooper</span>
          </div>
          <Button size="sm" asChild className="md:h-10">
            <a
              href="#waitlist"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Request a Demo
            </a>
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-foreground">
        <div className="container mx-auto px-4 py-16 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-background">
              <Sparkles className="h-3 w-3" />
              <span>AI for Insurance</span>
            </div>

            <h1 className="mb-4 text-balance font-bold text-3xl leading-[1.1] tracking-tight text-background md:text-6xl">
              Enterprise AI for Insurance Operations
            </h1>

            <p className="mx-auto mb-8 max-w-xl text-balance text-base text-background/80 leading-relaxed md:text-lg">
              Automate submissions, underwriting, and policy management for agents, brokers, and carriers.
            </p>

            <Button size="lg" asChild variant="secondary">
              <a
                href="#waitlist"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Request a Demo
              </a>
            </Button>
          </div>
        </div>
        <div className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-background/10 to-transparent" />
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
                <div className="text-muted-foreground text-xs">Cooper</div>
              </div>

              <div className="flex">
                <div className="hidden w-48 border-r bg-muted/30 md:block">
                  <div className="flex flex-col gap-0.5 p-3">
                    <div className="mb-2 flex items-center px-2.5 py-2 gap-0.5">
                      <CooperLogo className="h-5 w-5" />
                      <span className="font-semibold text-base">Cooper</span>
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
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center">
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

      <section className="bg-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-balance font-bold text-3xl md:text-4xl tracking-tight text-background">
                AI That Actually Understands Insurance
              </h2>
              <p className="text-balance text-background/80 text-lg leading-relaxed">
                Not just another chatbot. Cooper is a complete AI operating system
built for insurance professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-background/20">
                  <Shield className="h-6 w-6 text-background" />
                </div>
                <h3 className="font-semibold text-background text-xl">Enterprise-Grade Security</h3>
                <p className="text-background/80 leading-relaxed">
                  Robust, industry-standard protection with zero training on your data. Your sensitive policy and client
                  information stays private and secure.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-background/20">
                  <Workflow className="h-6 w-6 text-background" />
                </div>
                <h3 className="font-semibold text-background text-xl">Automated Workflows</h3>
                <p className="text-background/80 leading-relaxed">
                  Produce expert-quality work for complex insurance workflows. From submissions to underwriting to
                  claims, fully automated.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-background/20">
                  <Brain className="h-6 w-6 text-background" />
                </div>
                <h3 className="font-semibold text-background text-xl">Insurance-Specific AI Models </h3>
                <p className="text-background/80 leading-relaxed">
                  High-performing custom models built for complex insurance work. Cooper is trained to understand forms,
                  policies, and insurance documentation.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-background/20">
                  <Layers className="h-6 w-6 text-background" />
                </div>
                <h3 className="font-semibold text-background text-xl">No Rip and Replace</h3>
                <p className="text-background/80 leading-relaxed">
                  Cooper works with your existing systems - both homegrown or purchased. Seamlessly integrate without
                  disrupting your current workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance Band */}

      <section className="border-t py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-3 font-bold text-3xl md:text-4xl tracking-tight">See Cooper in Action</h2>
            <p className="mb-8 text-muted-foreground text-lg md:mb-12">Real workflows, automated.</p>
          </div>

          <div className="space-y-8">
            {/* Row 1: Agents & Brokers */}
            <div className="relative overflow-hidden">
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
            <div className="relative overflow-hidden">
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

      {/* Testimonial Section */}
      {/* CHANGE: Reduced padding and sizing for more compact design */}
      <section className="border-t bg-muted/20 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-xl border bg-card p-6 shadow-lg md:p-8">
              <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-8">
                {/* Profile Photo */}
                <div className="shrink-0">
                  <img
                    src="/rushil-goel.png"
                    alt="Rushil Goel"
                    className="h-20 w-20 rounded-full object-cover md:h-24 md:w-24"
                  />
                </div>

                {/* Quote and Attribution */}
                <div className="flex-1 text-center md:text-left">
                  <blockquote className="mb-4 text-pretty text-lg leading-relaxed md:text-xl">
                    "Cooper transformed how we process submissions. What took hours now takes minutes. It's like having
                    an insurance expert available 24/7."
                  </blockquote>
                  <div>
                    <p className="font-bold text-base">Rushil Goel</p>
                    <p className="text-muted-foreground text-sm">CEO, Nirvana Insurance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHANGE: Changed background to black and updated text colors for dark theme */}
      <section className="border-t bg-foreground py-12 md:py-24 overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12">
            <h2 className="mb-3 text-balance font-bold text-2xl tracking-tight md:mb-4 md:text-4xl text-background">
              Built for Every Insurance Professional
            </h2>
            <p className="text-balance text-base text-background/80 leading-relaxed md:text-lg">
              Cooper adapts to your workflow across the entire insurance value chain, from retail distribution to
              reinsurance and claims.
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <Tabs defaultValue="retail">
              <div className="flex flex-col gap-6 lg:gap-8 lg:flex-row lg:items-start">
                <div className="overflow-x-auto lg:w-72 lg:overflow-x-visible">
                  {/* CHANGE: Updated TabsList background for dark theme */}
                  <TabsList className="flex h-auto w-max flex-row justify-start gap-2 bg-transparent pb-2 lg:w-full lg:flex-col lg:items-stretch lg:gap-1.5 lg:pb-0">
                    <TabsTrigger
                      value="retail"
                      className="group flex min-w-[140px] shrink-0 items-center justify-start gap-2.5 rounded-xl bg-background/10 px-3 py-2.5 text-left transition-all hover:bg-background/20 sm:min-w-[160px] sm:gap-3 sm:px-4 lg:min-w-0 data-[state=active]:bg-background data-[state=active]:shadow-sm"
                    >
                      <Store className="h-4 w-4 shrink-0 text-background/60 transition-colors sm:h-5 sm:w-5 group-data-[state=active]:text-primary" />
                      <div className="flex min-w-0 flex-col">
                        <span className="truncate font-semibold text-xs sm:text-sm text-background group-data-[state=active]:text-foreground">
                          Retail Brokers
                        </span>
                        <span className="hidden truncate text-[10px] text-background/60 sm:text-xs lg:block group-data-[state=active]:text-muted-foreground">
                          Client Satisfaction
                        </span>
                      </div>
                    </TabsTrigger>

                    <TabsTrigger
                      value="wholesale"
                      className="group flex min-w-[140px] shrink-0 items-center justify-start gap-2.5 rounded-xl bg-background/10 px-3 py-2.5 text-left transition-all hover:bg-background/20 sm:min-w-[160px] sm:gap-3 sm:px-4 lg:min-w-0 data-[state=active]:bg-background data-[state=active]:shadow-sm"
                    >
                      <Network className="h-4 w-4 shrink-0 text-background/60 transition-colors sm:h-5 sm:w-5 group-data-[state=active]:text-primary" />
                      <div className="flex min-w-0 flex-col">
                        <span className="truncate font-semibold text-xs sm:text-sm text-background group-data-[state=active]:text-foreground">
                          Wholesale Brokers{" "}
                        </span>
                        <span className="hidden truncate text-[10px] text-background/60 sm:text-xs lg:block group-data-[state=active]:text-muted-foreground">
                          Risk Placement
                        </span>
                      </div>
                    </TabsTrigger>

                    <TabsTrigger
                      value="insurers"
                      className="group flex min-w-[140px] shrink-0 items-center justify-start gap-2.5 rounded-xl bg-background/10 px-3 py-2.5 text-left transition-all hover:bg-background/20 sm:min-w-[160px] sm:gap-3 sm:px-4 lg:min-w-0 data-[state=active]:bg-background data-[state=active]:shadow-sm"
                    >
                      <Building2 className="h-4 w-4 shrink-0 text-background/60 transition-colors sm:h-5 sm:w-5 group-data-[state=active]:text-primary" />
                      <div className="flex min-w-0 flex-col">
                        <span className="truncate font-semibold text-xs sm:text-sm text-background group-data-[state=active]:text-foreground">
                          Insurers
                        </span>
                        <span className="hidden truncate text-[10px] text-background/60 sm:text-xs lg:block group-data-[state=active]:text-muted-foreground">
                          Carriers & MGAs
                        </span>
                      </div>
                    </TabsTrigger>

                    <TabsTrigger
                      value="reinsurers"
                      className="group flex min-w-[140px] shrink-0 items-center justify-start gap-2.5 rounded-xl bg-background/10 px-3 py-2.5 text-left transition-all hover:bg-background/20 sm:min-w-[160px] sm:gap-3 sm:px-4 lg:min-w-0 data-[state=active]:bg-background data-[state=active]:shadow-sm"
                    >
                      <Layers className="h-4 w-4 shrink-0 text-background/60 transition-colors sm:h-5 sm:w-5 group-data-[state=active]:text-primary" />
                      <div className="flex min-w-0 flex-col">
                        <span className="truncate font-semibold text-xs sm:text-sm text-background group-data-[state=active]:text-foreground">
                          Reinsurers
                        </span>
                        <span className="hidden truncate text-[10px] text-background/60 sm:text-xs lg:block group-data-[state=active]:text-muted-foreground">
                          Risk Management
                        </span>
                      </div>
                    </TabsTrigger>

                    <TabsTrigger
                      value="tpas"
                      className="group flex min-w-[140px] shrink-0 items-center justify-start gap-2.5 rounded-xl bg-background/10 px-3 py-2.5 text-left transition-all hover:bg-background/20 sm:min-w-[160px] sm:gap-3 sm:px-4 lg:min-w-0 data-[state=active]:bg-background data-[state=active]:shadow-sm"
                    >
                      <FileCheck className="h-4 w-4 shrink-0 text-background/60 transition-colors sm:h-5 sm:w-5 group-data-[state=active]:text-primary" />
                      <div className="flex min-w-0 flex-col">
                        <span className="truncate font-semibold text-xs sm:text-sm text-background group-data-[state=active]:text-foreground">
                          Claims TPA
                        </span>
                        <span className="hidden truncate text-[10px] text-background/60 sm:text-xs lg:block group-data-[state=active]:text-muted-foreground">
                          Claims Administration
                        </span>
                      </div>
                    </TabsTrigger>
                  </TabsList>
                </div>

                <div className="flex-1">
                  <TabsContent value="retail" className="mt-0">
                    <div className="rounded-xl border bg-card p-5 md:p-8">
                      <h3 className="mb-2 font-bold text-xl md:text-2xl">Win More Business, Serve Clients Better</h3>
                      <p className="mb-5 text-pretty text-sm text-muted-foreground leading-relaxed md:mb-6 md:text-base">
                        Spend less time on paperwork and more time building relationships. Cooper handles the busywork
                        so you can focus on your clients.
                      </p>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          <div>
                            <h4 className="mb-1 font-semibold text-sm">Instant Submission Processing</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              Turn client information into market-ready submissions in minutes
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          <div>
                            <h4 className="mb-1 font-semibold text-sm">Policy Comparison</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              Explain coverage differences to clients in plain language
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          <div>
                            <h4 className="mb-1 font-semibold text-sm">Client Account Management</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              Access complete client history and identify cross-sell opportunities
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          <div>
                            <h4 className="mb-1 font-semibold text-sm">Renewal Management</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              Automate renewal processing and identify accounts at risk
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="wholesale" className="mt-0">
                    <div className="rounded-xl border bg-card p-5 md:p-8">
                      <h3 className="mb-2 font-bold text-xl md:text-2xl">Place More Business, Faster</h3>
                      <p className="mb-5 text-pretty text-sm text-muted-foreground leading-relaxed md:mb-6 md:text-base">
                        Match submissions to the right markets instantly and prepare compelling packages that get quoted
                        quickly.
                      </p>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          <div>
                            <h4 className="mb-1 font-semibold text-sm">Market Matching</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              Identify the best carrier matches based on current appetite and guidelines
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          <div>
                            <h4 className="mb-1 font-semibold text-sm">Submission Preparation</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              Clean and standardize submissions before sending to carriers
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          <div>
                            <h4 className="mb-1 font-semibold text-sm">Quote Comparison</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              Compare carrier quotes side-by-side with coverage analysis
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          <div>
                            <h4 className="mb-1 font-semibold text-sm">Retail Broker Communication</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              Generate clear explanations and recommendations for retail partners
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="insurers" className="mt-0">
                    <div className="rounded-xl border bg-card p-5 md:p-8">
                      <h3 className="mb-2 font-bold text-xl md:text-2xl">Scale Underwriting & Program Management</h3>
                      <p className="mb-5 text-pretty text-sm text-muted-foreground leading-relaxed md:mb-6 md:text-base">
                        Process submissions faster, manage multiple programs efficiently, and maintain compliance across
                        your entire portfolio.
                      </p>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          <div>
                            <h4 className="mb-1 font-semibold text-sm">Automated Submission Intake</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              Extract data from emails, applications, and ACORD forms automatically
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          <div>
                            <h4 className="mb-1 font-semibold text-sm">Multi-Program Management</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              Handle multiple carrier programs with program-specific workflows
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          <div>
                            <h4 className="mb-1 font-semibold text-sm">Guideline Compliance</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              Verify submissions against underwriting guidelines and state regulations
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          <div>
                            <h4 className="mb-1 font-semibold text-sm">Bordereau & Carrier Reporting</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              Generate accurate compliance reports and validate MGA submissions
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="reinsurers" className="mt-0">
                    <div className="rounded-xl border bg-card p-5 md:p-8">
                      <h3 className="mb-2 font-bold text-xl md:text-2xl">Optimize Treaty Management & Risk Analysis</h3>
                      <p className="mb-5 text-pretty text-sm text-muted-foreground leading-relaxed md:mb-6 md:text-base">
                        Analyze ceded portfolios, monitor treaty compliance, and streamline reporting to optimize your
                        reinsurance operations.
                      </p>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          <div>
                            <h4 className="mb-1 font-semibold text-sm">Treaty Compliance Monitoring</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              Verify ceded submissions comply with treaty terms and conditions
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          <div>
                            <h4 className="mb-1 font-semibold text-sm">Exposure Analysis</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              Analyze portfolio concentrations and identify accumulation risks
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          <div>
                            <h4 className="mb-1 font-semibold text-sm">Cedent Reporting</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              Process and validate bordereau submissions from ceding companies
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          <div>
                            <h4 className="mb-1 font-semibold text-sm">Claims Recovery Analysis</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              Track claims notifications and calculate recovery amounts automatically
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="tpas" className="mt-0">
                    <div className="rounded-xl border bg-card p-5 md:p-8">
                      <h3 className="mb-2 font-bold text-xl md:text-2xl">Streamline Claims Administration</h3>
                      <p className="mb-5 text-pretty text-sm text-muted-foreground leading-relaxed md:mb-6 md:text-base">
                        Automate claims intake, accelerate adjudication, and deliver accurate reporting to carrier
                        partners.
                      </p>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          <div>
                            <h4 className="mb-1 font-semibold text-sm">Automated Claims Intake</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              Extract claim details from FNOL submissions and supporting documentation
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          <div>
                            <h4 className="mb-1 font-semibold text-sm">Coverage Verification</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              Verify policy coverage and identify potential coverage issues instantly
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          <div>
                            <h4 className="mb-1 font-semibold text-sm">Adjudication Support</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              Analyze claim documentation and generate settlement recommendations
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          <div>
                            <h4 className="mb-1 font-semibold text-sm">Carrier Reporting</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              Generate accurate claims reports and loss runs for carrier partners
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Security & Compliance Band */}
      <section className="border-y bg-muted/20 py-6 overflow-hidden">
        <div className="flex animate-scroll-slow gap-8 items-center">
          {/* First set */}
          <div className="flex items-center gap-2 shrink-0 text-muted-foreground text-sm">
            <Award className="h-4 w-4" />
            <span>SOC 2 Type II</span>
          </div>
          <div className="flex items-center gap-2 shrink-0 text-muted-foreground text-sm">
            <Cross className="h-4 w-4" />
            <span>HIPAA Ready</span>
          </div>

          <div className="flex items-center gap-2 shrink-0 text-muted-foreground text-sm">
            <Ban className="h-4 w-4" />
            <span>No training on your data</span>
          </div>
          <div className="flex items-center gap-2 shrink-0 text-muted-foreground text-sm">
            <Lock className="h-4 w-4" />
            <span>Private &amp; secure</span>
          </div>
          <div className="flex items-center gap-2 shrink-0 text-muted-foreground text-sm">
            <ShieldCheck className="h-4 w-4" />
            <span>End-to-end encrypted</span>
          </div>
          <div className="flex items-center gap-2 shrink-0 text-muted-foreground text-sm">
            <Fingerprint className="h-4 w-4" />
            <span>SSO/MFA</span>
          </div>
          <div className="flex items-center gap-2 shrink-0 text-muted-foreground text-sm">
            <ScrollText className="h-4 w-4" />
            <span>RBAC &amp; audit logs</span>
          </div>

          {/* Duplicate for seamless loop */}
          <div className="flex items-center gap-2 shrink-0 text-muted-foreground text-sm">
            <Award className="h-4 w-4" />
            <span>SOC 2 Type II</span>
          </div>
          <div className="flex items-center gap-2 shrink-0 text-muted-foreground text-sm">
            <Cross className="h-4 w-4" />
            <span>HIPAA Ready</span>
          </div>

          <div className="flex items-center gap-2 shrink-0 text-muted-foreground text-sm">
            <Ban className="h-4 w-4" />
            <span>No training on your data</span>
          </div>
          <div className="flex items-center gap-2 shrink-0 text-muted-foreground text-sm">
            <Lock className="h-4 w-4" />
            <span>Private &amp; secure</span>
          </div>
          <div className="flex items-center gap-2 shrink-0 text-muted-foreground text-sm">
            <ShieldCheck className="h-4 w-4" />
            <span>End-to-end encrypted</span>
          </div>
          <div className="flex items-center gap-2 shrink-0 text-muted-foreground text-sm">
            <Fingerprint className="h-4 w-4" />
            <span>SSO/MFA</span>
          </div>
          <div className="flex items-center gap-2 shrink-0 text-muted-foreground text-sm">
            <ScrollText className="h-4 w-4" />
            <span>RBAC &amp; audit logs</span>
          </div>
        </div>
      </section>

      <section id="waitlist" className="border-t py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-lg">
            <h2 className="mb-2 font-bold text-2xl md:text-3xl tracking-tight text-center">Request a Demo</h2>
            <p className="mb-6 text-muted-foreground text-sm text-center">
              See how AI can transform your insurance workflows.
            </p>
            <WaitlistForm />
          </div>
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-0.5">
              <CooperLogo className="h-5 w-5" />
              <span className="font-semibold text-lg">Cooper</span>
            </div>
            <p className="text-muted-foreground text-xs">© 2025 Cooper</p>
            <div className="flex gap-6 text-muted-foreground text-xs">
              <Link href="/privacy" className="hover:text-foreground">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-foreground">
                Terms
              </Link>
              <a
                href="#waitlist"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="hover:text-foreground cursor-pointer"
              >
                Contact
              </a>
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
    <div className="relative min-w-[280px] rounded-lg border bg-card p-5 shadow-sm sm:min-w-[320px]">
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
