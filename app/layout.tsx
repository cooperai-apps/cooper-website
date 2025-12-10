import type React from "react"
import type { Metadata } from "next"

import "./globals.css"

import { Assistant, Source_Serif_4 } from 'next/font/google'

const assistant = Assistant({
  subsets: ["latin"],
  variable: "--font-assistant",
  display: "swap",
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Cooper - AI-Powered Insurance Assistant",
  description:
    "Cooper streamlines submissions, automates underwriting, and accelerates policy management for insurance professionals.",
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${assistant.variable} ${sourceSerif.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
