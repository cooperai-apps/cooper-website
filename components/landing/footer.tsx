import Image from "next/image"
import Link from "next/link"
import { Mail, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground py-6 text-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Brand + Copyright + Legal */}
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5">
            <div className="flex items-center gap-1.5">
              <Image src="/cooper-flower-white.webp" alt="Cooper" width={18} height={18} />
              <span className="font-semibold text-sm">Cooper</span>
            </div>
            <span className="hidden md:block text-background/30">|</span>
            <div className="flex items-center gap-3 text-xs text-background/50">
              <span>© 2025</span>
              <span className="text-background/30">·</span>
              <Link
                href="/privacy"
                className="hover:text-background/80 transition-colors"
              >
                Privacy
              </Link>
              <span className="text-background/30">·</span>
              <Link
                href="/terms"
                className="hover:text-background/80 transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:contact@askcooper.ai"
              className="text-background/50 hover:text-background transition-colors"
              aria-label="Email us"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/ask-cooper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/50 hover:text-background transition-colors"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
