import { WaitlistForm } from "@/components/waitlist-form"

export function DemoSection() {
  return (
    <section id="demo" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-lg">
          <h2 className="mb-4 font-serif text-3xl md:text-5xl italic text-center">Request a Demo</h2>
          <p className="mb-8 text-muted-foreground text-center">
            See how AI can transform your insurance workflows.
          </p>
          <WaitlistForm />
        </div>
      </div>
    </section>
  )
}
