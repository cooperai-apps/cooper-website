import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PROFESSIONALS } from "@/lib/landing-data"

const CALENDLY_URL = "https://calendly.com/karly-askcooper/30min"

interface ProfessionalCardProps {
  title: string
  description: string
  features: readonly string[]
}

function ProfessionalCard({ title, description, features }: ProfessionalCardProps) {
  return (
    <div className="rounded-xl border bg-card p-6">
      <h3 className="mb-2 font-bold text-lg">{title}</h3>
      <p className="mb-4 text-sm text-muted-foreground">{description}</p>
      <div className="space-y-3">
        {features.map((feature) => (
          <div key={feature} className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-foreground mt-0.5" />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function CTACard() {
  return (
    <div className="rounded-xl border bg-foreground p-6 text-background flex flex-col justify-between">
      <div>
        <h3 className="mb-2 font-bold text-lg">Ready to transform your workflow?</h3>
        <p className="mb-4 text-sm text-background/70">
          See how Cooper can help your team process more business with less manual work.
        </p>
      </div>
      <Button asChild variant="secondary" className="w-full rounded-full">
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
          Request a Demo
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
  )
}

export function ProfessionalsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 font-serif text-3xl md:text-5xl italic tracking-tight">
            Built for every insurance professional
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cooper adapts to your workflows across the entire insurance value chain.
          </p>
        </div>

        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROFESSIONALS.map((professional) => (
            <ProfessionalCard key={professional.title} {...professional} />
          ))}
          <CTACard />
        </div>
      </div>
    </section>
  )
}
