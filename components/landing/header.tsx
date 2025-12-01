"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { CooperLogo } from "@/components/cooper-logo"
import { scrollToSection } from "@/lib/scroll"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const ticking = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10)
          ticking.current = false
        })
        ticking.current = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDemoClick = useCallback((e: React.MouseEvent) => {
    scrollToSection(e, "demo")
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-background"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:py-5">
        <div className="flex items-center gap-1.5">
          <CooperLogo className="h-6 w-6 text-foreground md:h-7 md:w-7" />
          <span className="font-semibold text-lg md:text-xl">Cooper</span>
        </div>

        <div className="flex items-center gap-4">
          <Button
            asChild
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-5"
          >
            <a href="#demo" onClick={handleDemoClick}>
              Request a Demo
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
