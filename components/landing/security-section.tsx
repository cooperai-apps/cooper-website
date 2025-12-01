import { SECURITY_BADGES } from "@/lib/landing-data"

export function SecuritySection() {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8">
            Enterprise-grade security & compliance
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {SECURITY_BADGES.map((badge) => {
              const Icon = badge.icon
              return (
                <div key={badge.label} className="flex flex-col items-center text-center gap-2 w-24">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background border">
                    <Icon className="h-5 w-5 text-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground">{badge.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
