import Image from "next/image"
import { TESTIMONIAL } from "@/lib/landing-data"

export function TestimonialSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-square md:aspect-auto">
                <Image
                  src={TESTIMONIAL.image}
                  alt={TESTIMONIAL.author}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center bg-foreground p-8 md:p-12 text-background">
                <blockquote className="mb-6 text-lg md:text-xl font-medium leading-relaxed">
                  "{TESTIMONIAL.quote}"
                </blockquote>
                <div>
                  <p className="font-bold">{TESTIMONIAL.author}</p>
                  <p className="text-background/80 text-sm">{TESTIMONIAL.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
