"use client"

import { useEffect } from "react"
import {
  Header,
  HeroSection,
  // SocialProofSection,
  ValueSection,
  FeatureSection,
  IncomingDocumentsMockup,
  PolicyComparisonMockup,
  ComplianceCheckMockup,
  ProfessionalsSection,
  TestimonialSection,
  SecuritySection,
  Footer,
} from "@/components/landing"
import { FEATURES } from "@/lib/landing-data"

export default function LandingPage() {
  // Handle hash navigation on page load
  useEffect(() => {
    if (window.location.hash) {
      requestAnimationFrame(() => {
        const element = document.getElementById(window.location.hash.slice(1))
        element?.scrollIntoView({ behavior: "smooth" })
      })
    }
  }, [])

  // Map feature IDs to their mockup components
  const featureMockups: Record<string, React.ReactNode> = {
    "intelligent-intake": <IncomingDocumentsMockup />,
    "deep-insights": <PolicyComparisonMockup />,
    "workflow-automation": <ComplianceCheckMockup />,
  }

  // Feature section configurations (alternating: text-left, image-left, text-left)
  const featureConfigs = [
    { index: 0, reversed: false, className: "", id: "features" },  // Text left, Image right
    { index: 1, reversed: true, className: "bg-muted/30" },        // Image left, Text right
    { index: 2, reversed: false, className: "" },                   // Text left, Image right
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <HeroSection />

        {/* <SocialProofSection /> */}

        <ValueSection />

        {/* Feature Sections */}
        {featureConfigs.map((config) => {
          const feature = FEATURES[config.index]
          return (
            <div key={feature.id} id={config.id}>
              <FeatureSection
                label={feature.label}
                title={feature.title}
                titleLine2={feature.titleLine2}
                description={feature.description}
                benefits={feature.benefits}
                mockup={featureMockups[feature.id]}
                reversed={config.reversed}
                className={config.className}
              />
            </div>
          )
        })}

        <ProfessionalsSection />

        <TestimonialSection />

        <SecuritySection />
      </main>

      <Footer />
    </div>
  )
}
