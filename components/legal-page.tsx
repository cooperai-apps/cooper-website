"use client"

import { useEffect } from "react"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import { CooperLogo } from "@/components/cooper-logo"
import { Footer } from "@/components/landing/footer"

interface LegalPageProps {
  title: string
  effectiveDate: string
  content: string
}

export function LegalPage({ title, effectiveDate, content }: LegalPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md transition-all">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <CooperLogo className="h-7 w-7" />
            <span className="font-semibold text-lg">Cooper</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
        <h1 className="mb-2 font-bold text-3xl md:text-4xl tracking-tight">{title}</h1>
        <p className="mb-12 text-muted-foreground text-sm">Effective: {effectiveDate}</p>

        <div className="prose prose-sm max-w-none">
          <ReactMarkdown
            components={{
              h2: ({ children }) => (
                <h2 className="mt-8 mb-4 font-semibold text-xl">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="mt-6 mb-3 font-medium text-foreground">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="mb-4 text-muted-foreground text-sm leading-relaxed text-justify">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc space-y-2 pl-6 mb-4 text-muted-foreground text-sm leading-relaxed text-justify">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal space-y-2 pl-6 mb-4 text-muted-foreground text-sm leading-relaxed text-justify">
                  {children}
                </ol>
              ),
              li: ({ children }) => <li>{children}</li>,
              strong: ({ children }) => (
                <strong className="font-semibold text-foreground">{children}</strong>
              ),
              a: ({ href, children }) => (
                <a href={href} className="text-primary hover:underline">
                  {children}
                </a>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </main>

      <Footer />
    </div>
  )
}
