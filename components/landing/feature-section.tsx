import { CheckCircle2 } from "lucide-react"
import type { ReactNode } from "react"

interface Benefit {
  title: string
  description: string
}

interface FeatureSectionProps {
  label: string
  title: string
  titleLine2: string
  description: string
  benefits: readonly Benefit[]
  mockup: ReactNode
  reversed?: boolean
  className?: string
}

export function FeatureSection({
  label,
  title,
  titleLine2,
  description,
  benefits,
  mockup,
  reversed = false,
  className = "",
}: FeatureSectionProps) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content - on mobile always first, on desktop depends on reversed */}
          <div className={reversed ? "lg:order-2" : ""}>
            <div className="text-sm font-medium text-muted-foreground mb-3">{label}</div>
            <h2 className="font-serif text-3xl md:text-5xl italic mb-4">
              {title}
              <br />
              {titleLine2}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {description}
            </p>
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-foreground mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">{benefit.title}</div>
                    <div className="text-sm text-muted-foreground">{benefit.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mockup - on mobile always second, on desktop depends on reversed */}
          <div className={reversed ? "lg:order-1" : ""}>
            {mockup}
          </div>
        </div>
      </div>
    </section>
  )
}
