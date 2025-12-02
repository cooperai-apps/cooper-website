import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductMockup } from "./product-mockup"
import { scrollToSection } from "@/lib/scroll"

export function HeroSection() {
  const handleDemoClick = (e: React.MouseEvent) => scrollToSection(e, "demo")

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Social Proof Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm shadow-sm">
            <Sparkles className="h-4 w-4 text-foreground" />
            <span className="text-muted-foreground">Built for Insurance Professionals</span>
          </div>

          {/* Main Headline */}
          <h1 className="mb-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic tracking-tight leading-[1.1]">
            More business. Less busywork.
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Cooper is AI built for insurance, bringing your workflows together and automating what slows you down.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            asChild
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base"
          >
            <a href="#demo" onClick={handleDemoClick}>
              Request a Demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Product Screenshot */}
        <ProductMockup />
      </div>
    </section>
  )
}
