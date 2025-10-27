import type React from "react"
import type { Metadata } from "next"

import "./globals.css"

import { Assistant } from 'next/font/google'

const assistant = Assistant({
  subsets: ["latin"],
  variable: "--font-assistant",
})

export const metadata: Metadata = {
  title: "CooperAI - Your Insurance Copilot",
  description:
    "Cooper streamlines submissions, automates underwriting, and accelerates policy management for insurance professionals.",
  generator: 'v0.app',
  icons: {
    icon: '/cooper-flower-white.webp',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${assistant.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
