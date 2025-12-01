import Image from "next/image"
import Link from "next/link"
import { FOOTER_NAV } from "@/lib/landing-data"

export function Footer() {
  return (
    <footer className="bg-foreground py-12 md:py-16 text-background">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <Image src="/cooper-flower-white.webp" alt="Cooper" width={20} height={20} />
              <span className="font-bold">Cooper</span>
            </div>
            <p className="text-sm text-background/60">San Francisco, CA</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <div className="space-y-2 text-sm">
              {FOOTER_NAV.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-background/60 hover:text-background transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-background/60">
              <p>contact@askcooper.ai</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Social Media</h3>
            <div className="space-y-2 text-sm">
              {FOOTER_NAV.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-background/60 hover:text-background transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8">
          <p className="text-sm text-background/60">© Copyright 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
