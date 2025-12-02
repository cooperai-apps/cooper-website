import { SOCIAL_PROOF_LOGOS } from "@/lib/landing-data"

export function SocialProofSection() {
  return (
    <section className="border-y py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="font-semibold text-lg">Trusted by leading teams and leaders</p>
          <p className="text-muted-foreground">At the world's top insurance companies.</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
          {SOCIAL_PROOF_LOGOS.map((logo) => (
            <div key={logo} className="text-xl font-bold tracking-tight">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
